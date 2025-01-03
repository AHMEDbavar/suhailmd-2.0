const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_09_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTkzLFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRUnVRNjFOWE1sdDQ4bTlVL09NNEllc1daMXZSUlJZYy8yb1ZhTkplMFlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNMklod2JyQlQwMmN0YThRVkxJeF9nXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3M2YzOTE3LTIyZjYtNDlmNy05Zjg2LTViOWJmMTE2NWU2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICA3NyxcbiAgICAgIDIxMCxcbiAgICAgIDEsXG4gICAgICAxOTgsXG4gICAgICAyMCxcbiAgICAgIDIzMCxcbiAgICAgIDE4OSxcbiAgICAgIDIyNSxcbiAgICAgIDE5NixcbiAgICAgIDI1MixcbiAgICAgIDQ2LFxuICAgICAgMjAsXG4gICAgICA4MSxcbiAgICAgIDEyMCxcbiAgICAgIDEyNyxcbiAgICAgIDE2NSxcbiAgICAgIDY2LFxuICAgICAgMTQ4LFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMTA2LFxuICAgICAgMTYxLFxuICAgICAgMTA0LFxuICAgICAgMTc2LFxuICAgICAgMTI2LFxuICAgICAgMTUxLFxuICAgICAgMTk3LFxuICAgICAgMTYzLFxuICAgICAgMjI1LFxuICAgICAgMzUsXG4gICAgICA4MSxcbiAgICAgIDY5LFxuICAgICAgOTgsXG4gICAgICAxODYsXG4gICAgICAxNTUsXG4gICAgICAxODIsXG4gICAgICAxMzEsXG4gICAgICA0MSxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSWVZZMUdaUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDgxMzYxNjAwOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2OTAyNDg4OTIwMDczNToyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ0YxNUVHRUp2ZjM3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInQxTGdmN0txR24rd001Q2poVUcxNThRWkRLVFFRakM2UGdqdUhGY3VsM2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwialVtbkVkeHNDTjE4LzRyNlIwcDFSVC9IQzhUa2s2bVFnaFJFNEU5em05RlcwUVNiamF5VVg2MytxKy9lSmVjK0NJeXZ6OXZmSTZhT2J4ajV3OVowQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicDd1dlFMQjFXb0VwZzhqdTRLRmpZdDJHUGhOM0JjY3NGQXRxaVNWb2xBMzhMNVh0a3UyWm5neEpndEl6TGREd1lrWVorNnE2Qk1FMkovSVJucXpMQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDgxMzYxNjAwOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkxMzM3NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
