const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys")

const P = require("pino")
require("./settings")

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./session")

  const sock = makeWASocket({
    logger: P({ level: "silent" }),
    auth: state
  })

  sock.ev.on("creds.update", saveCreds)

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0]
    if (!m.message) return

    const msg = m.message.conversation || m.message.extendedTextMessage?.text
    if (!msg) return

    const from = m.key.remoteJid

    if (!msg.startsWith(global.prefix)) return

    const command = msg.slice(1).split(" ")[0].toLowerCase()

    switch (command) {

      case "menu":
        await sock.sendMessage(from, {
          text: `🤖 *${global.botname}*

Hello! I am ${global.botname}

Commands:
.menu
.ping
.alive`
        })
        break

      case "ping":
        await sock.sendMessage(from, { text: "🏓 Pong!" })
        break

      case "alive":
        await sock.sendMessage(from, { text: global.alive_msg })
        break
    }
  })

  sock.ev.on("connection.update", ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const reason = lastDisconnect?.error?.output?.statusCode
      if (reason !== DisconnectReason.loggedOut) {
        startBot()
      }
    } else if (connection === "open") {
      console.log(`✅ ${global.botname} Connected!`)
    }
  })
}

startBot()
