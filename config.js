const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true

//aumto functioner
//global.autoTyping = false //auto tying in gc (true to on, false to off)
//global.autoRecord = true //auto recording (true to on, false to off)

global.Owner = ['918348225320'] //ur number 
global.OwnerNumber = ['22390765931']
global.ownertag = ['918348225320']
global.BotName = "Richard" //ur bot name 
global.packname = "ZenitsuBot"
global.author = "🦄Dream Guy Deepak" //ur sticker pack name 
global.OwnerName = "🦄Richboy" //ur name
global.BotSourceCode = "https://youtube.com/@dreamguydeepak" //ur website link
global.SupportGroupLink = "https://chat.whatsapp.com/KguOo9XsRTW2iESYuHzVX1" //ur group link 
global.sessionName = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUs1MWN5Y3ByTmFpZE1ITEhsenpWM3NSUUMzTlFCSEZUVkJjcFVUbWhtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjVkb1d0akg4UjU0NUMwTXZJcm5YdWJCYTk3elFDQ1pqLzZZZ3BHZTBTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSmtSSExXSHpjTStYUlRvcUxwdWk5OU1rakNWMWF6Qk1QRmY0WVJLaWswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvWVh3Y2hqV2tsc3dpWWh1WnJlc0pDT3NZTjhXU1dKZnh2dVp6N2pFM1ZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNbGN3Z2JFWi9CTzJIeWF0U1pkS2phTFdEeWpmbWVxSVRuK0lhZGpaWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI4RDBpakNBYTJJaHJobW0wR200VnFBWVY1Sk5tamliZzY4cklMYlRkelk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVB4bEFkV2tPNGNDS0NMem9sMkZ6TWdxbVFTTnFubER3bXdsTzN6cnJXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3pWZjAxcjlLVFFrcVJHdzFtd3Z0aWxna0p4Smh2WnNMeXE5emdYQzNXVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1uT1NFY3Y0TzZmR1I4d2g0S0pZWmExR3RYd2tqT3pFVWFSWWMrcUhIT2JkNWdEMDM2SllpSVRPd2k2dGRMMmMxdjRIc2hLKzVqL283RGFNTjJJdGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiQ0hFYVlJTWxVL0xRTHpPSjExVGUvazhzUXE5YUk5d2ZzUU1ET29sTk1rND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaXhlSHExLWFRZWFUblozQ0w2enpZUSIsInBob25lSWQiOiJhMTc2MmFlZS0yYjJiLTRhYzgtYjE4Ni0yNDg5MGFhZjkwYzIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3dNOW9UaG1NNnhUcktSWDZVUXZsSXJQcTZFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOMUNYMFpZNWpNemppek1oUFJvUE53WnhDTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLUEZTU1JQTCIsIm1lIjp7ImlkIjoiMjIzOTA3NjU5MzE6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS09KNU9JQ0VMNjh4YlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieDFhVGlaRW04TncweG9LUG9ZQ1dNT09NVjcxVG94REV0eVdDOWh4aFFpND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT1pRRFg3WWdQa1hEYnN5aThjZWJ2UldxSzZjVi9BQW5LUWx4WWc3NlZKTDdiVFY5YlpSYnZ6cEFPZE8vcXdQUWNQQzJuY08rdnRaYjlhRkZzN1pLRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkFpdW1zekxabEg2S1dELzZZSFR3ZmNJdkdhdkRZdUw0WGFrWmRoZndTWm1uakdkK2Z1d0E5YWhVMFNKSXpmUEwwMnpCbTZxVFRkSTBsazhhbUdWM2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIzOTA3NjU5MzE6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjZFdrNG1SSnZEY05NYUNqNkdBbGpEampGZTlVNk1ReExjbGd2WWNZVUl1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODAyODkyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgxMSJ9"

// Prefix //="."
// If you want to change the prefix, change it and also change all switch's button id from Zenitsu.js  otherwise buttons will not work //
global.prefa = ['.'] 


global.location = "Darjeeling, India"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://i.ibb.co/vXnjzpr/cheemspic.jpg' }
global.websitex = "https://youtube.com/@dreamguydeepak"
global.lolhuman = "Deepak"


global.BotLogo = fs.readFileSync("./Assets/cheemspic.jpg")
global.Thumb = fs.readFileSync("./Assets/cheemspic.jpg")
global.Thumb1 = fs.readFileSync("./Assets/cheemspic.jpg")
global.ErrorPic = fs.readFileSync("./Assets/cheemspic.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Dear*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Yeah!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Okey ?!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: ' Ruko Zara...',
    nolink: 'Please provide me *link*, Uff!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!, Haha',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert  Uff! This is not a NSFW enabled group!, Uff!,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '39788fed50', //ur api key
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
