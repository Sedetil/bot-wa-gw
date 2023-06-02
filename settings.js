const fs = require("fs");

// APIKEY OPEN AI
global.jeropenai = "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"; // ISI APIKEY LU

global.sewabot = "SEWA CHAT OWNER 50K"; // ISI HARGA SEWA BOT LU

global.namabot = "Wanz-BOT"; // UBAH JADI NAMA LU
global.namaowner = "WANZ"; // NAMA OWNER
global.footer_text = "Wanz-BOT By WANZ"; // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg"); // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg"); // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ["6285158862314"]; // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = "Wanz-BOT"; //sticker wm ubah
global.author = "Wanz-BOT"; //sticker wm ganti nama kalian
// = \\
global.sessionName = "session"; // GAK USAH UBAH
global.prefa = ["", "!", ".", "🐦", "🐤", "🗿"]; // GAK USAH UBAH
global.script = "https://youtube.com/@itsukabotz"; // JANGAN DI HAPUS NANTI ERROR KOAR²
global.fakelink = "https://chat.whatsapp.com/6285158862314"; // bebas asal jan hapus
global.grubbot = `*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/C2m2XsHWXRkBRYyARCAQzG`; // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = false; // BEBAS
global.welcome = false; // KALO MAU AUTO WELCOME UBAH JADI true
global.left = true; // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true; // BEBAS

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
