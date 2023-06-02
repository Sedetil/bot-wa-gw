const fs = require("fs");

module.exports.helpMenu = (pushname) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇

╭─❒ 「 *DATABASE MENU* 」
│
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addzip
│○ !delzip
│○ !listzip
│○ !yozip
│○ !sendzip
│○ !addapk
│○ !delapk
│○ !listapk
│○ !sendapk
│○ !addpdf
│○ !listpdf
│○ !sendpdf
│○ !yopdf
│○ !sendpdf
│
╰❒
`
}