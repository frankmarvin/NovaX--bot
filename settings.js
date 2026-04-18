//-------------------[ BOT SETTINGS ]------------------//

// @project_name : NOVAX-XMD
// @author : FrankMarv
// @github : frankmarvin
// @whatsapp : +254748642275

//----------------------[ NOVA-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./NovaX/color')

if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname + '/.env' })

//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || ''
// Enter your session id here

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'NOVA-XXMD'

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254748642275'

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO
  ? process.env.SUDO.split(',')
  : ['254748642275']

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'FrankMarv'

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "NOVAX-XMD"

//--------------[ TIMEZONE ]------------//

global.timezones = 'Africa/Nairobi'

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "FrankMarv"

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || ""

//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://github.com/frankmarvin"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "© NOVAX-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = {
  done: '*Done*',
  success: '© NOVAX-XMD',
  owner: `*You don't have permission to use this command!*`,
  group: '*This feature is only available in groups!*',
  admin: '*You need admin rights to use this feature!*',
  notadmin: '*You must be an admin to use this feature!*'
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ NOVAX-XMD ]----------------------//
