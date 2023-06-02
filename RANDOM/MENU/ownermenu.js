const fs = require("fs");

module.exports.helpMenu = (pushname) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *OWNER MENU* 」
│
│○ !addprem  
│○ !delprem  
│○ !listprem  
│○ !block  
│○ !unblock  
│○ !public  
│○ !self  
│○ !out  
│○ !kosong  
│○ !join  
│○ !addsewa  
│○ !delsewa  
│○ !setnamabot  
│○ !setbiobot  
│○ !broadcastvid  
│○ !bctext  
│○ !bcimage  
│○ !pushkon
│○ !pushkonid
│○ !anticall [on/off]
│○ !setexif
│○ !idgrub
│○ !jadibot
│○ !listjadibot
│○ !restartbot
│○ !creategc
│○ !banned
│○ !listbanned
│○ !unbanned
│
╰❒
`
}