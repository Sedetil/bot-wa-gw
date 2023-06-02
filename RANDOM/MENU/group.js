const fs = require("fs");

module.exports.helpMenu = (pushname) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *GROUP MENU* 」 
│
│○ !antiwame  [on/off]
│○ !antiwame2  [on/off]
│○ !antilink  [on/off]
│○ !antilink2  [on/off]
│○ !welcome  [on/off]
│○ !goodbye  [on/off]
│○ !group open
│○ !group close
│○ !hidetag  
│○ !kick  
│○ !linkgc  
│○ !resetlinkgc  
│○ !delete  
│○ !listonline  
│○ !setnamegc  
│○ !setdesc  
│○ !listsewa  
│○ !add  
│○ !promote  
│○ !demote  
│○ !antilinkall  
│○ !sendlinkgc  
│○ !tagall  
│○ !totag
│○ !mute [on/off]
│○ !nsfw [on/off]
│
╰❒
`
}