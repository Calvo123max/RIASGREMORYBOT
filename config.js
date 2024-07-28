//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "33757054414";
global.sudo = process.env.SUDO || "254758227939,254769279076";
global.owner = process.env.OWNER_NUMBER || "254769279076";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBtN2ppM05rWkJUODZhVVVZb29wK1lsVlYrZG0rNEtheWpDUmZpa0Jsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1IVmN2UEE5NmZiZmgzWjczcDk2a1pKanFtVDU1Znl4eExpSDRady9tMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQVpNTkozVStvR21UdkVWeUdNRUJUTFZPNkp0Z1UzQW50RE1iRU4wMEVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0UGU0T2U2OU9Xbm1uYWplUFFCdFRUdnRaVHV2SDEyUjVqY1RZMlRuUUZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGc3l4QXczK2Q5RDF1endLRWlUcGdxQUxOZlh3VUhiMTlCS1Y3TDBTVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBXS1hWQWZGOWZMSGRMQy8yRjB1ZnV5aVAvRy9rdnpORE9LWG9WY0ZSSHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJOYzd5QnJxS2dzK2pYZ3ZRRDFySkloc3pLSzhnTGs3anlxcU9JekIwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicW9WK3lodExxK0hUQ0FiWUhXMExreVd5aDgxZUhVTTFBVjdaL3RpNVRUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjljUlZjQnFCOHJNcHE1ZHlVMHNZZVNjOEhWS1hRV09CMWp3VW5vQzNhaEgyTzErVzRsZ3ZLZGFoR3VGSE1uVVoxY2NQSGI0SHhaemlDaGQ0dVZxNWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJTV3UySmE1aGxKaUdTNkxuWitnWjQ0UjZtdFdCbGJkeHd6UFBRQU9EYjI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc1ODIyNzkzOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMDJGMzQ0NDVFMTQ5MEVFNkMxMzZFOTg5MDhBMjQwNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMTg3Nzg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NTgyMjc5MzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjZBMUIwNDk1OEMwNkJEODVCMjg4MzYwNjAwMDVENjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjE4Nzc4NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTzRCb3NmZkJSLWEwN3JyWEQ3UU53ZyIsInBob25lSWQiOiI5NDY1YjM4ZC1jYmU4LTQxYWUtYjE2Ny0zYTkyNmIxMmNiODMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWUvUWRjT2l5NmdCUDY4MlNORlUyQms3Z2FBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAzRzNMSm13TnNLc1k3eHFoaFF5RGRtdDZJND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJEUTc3UUREQiIsIm1lIjp7ImlkIjoiMjU0NzU4MjI3OTM5OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiY2FsdmluIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYUtwSWdFRVBuL21iVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVV2NJV0E1WkxxdVhXdUhVZVByajhrRi9uU3QrSldhUG1oTS9kUzZaRndRPSIsImFjY291bnRTaWduYXR1cmUiOiJhcnBXS1g3RlE4KzNDMWpyR0VTTkVqbmpCK3FrSW5jRFFYdkNWZGFiMElvcmpIRDdsVzRvQVZJeHVzQkh5TDhqZDN5a0RqL0NZSWF2eXNJMS9zeXBEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWEzbDRuT3oxaXpoZFVDK243U1lDMDgySlhtUFhERnR6SE5mcnJFb3NsZG5BUTlkOFFoZXVrazJFbExtMjA2QXBldkZXS3B3RlkxeklGL0N0TzBpamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTgyMjc5Mzk6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWRm5DRmdPV1M2cmwxcmgxSGo2NC9KQmY1MHJmaVZtajVvVFAzVXVtUmNFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTg3NzgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVidyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "CALVIN 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "DAVE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
