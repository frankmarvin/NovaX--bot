const express = require("express")
const cors = require("cors")
const P = require("pino")

const {
  default: makeWASocket,
  useMultiFileAuthState
} = require("@whiskeysockets/baileys")

const app = express()
app.use(cors())
app.use(express.json())

let sock

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./session")

  sock = makeWASocket({
    logger: P({ level: "silent" }),
    auth: state,
    printQRInTerminal: false
  })

  sock.ev.on("creds.update", saveCreds)
}

startBot()

// 🔑 Pairing endpoint
app.post("/pair", async (req, res) => {
  const number = req.body.number

  if (!number) {
    return res.json({ error: "Number is required" })
  }

  try {
    const code = await sock.requestPairingCode(number)
    res.json({ code })
  } catch (err) {
    res.json({ error: "Failed to generate code" })
  }
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(3000, () => console.log("🚀 Pairing server running on port 3000"))
