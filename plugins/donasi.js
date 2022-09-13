let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*Hamlo Banh yok donasi biar bot on terus👋*
╔═══════════════════
║ _*DONASI UNTUK GWEHJ*_  
╠═══════════════════
║          ❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉
║-:> *DANA* : 
║> -
║-:> *GOPAY*
║> -
║-:> *SHOPPAY*:
║> -
╰═══════════════════
╔════════════════════
║ *Donasi Via Ikuti Sosial media YOK*
╠════════════════════
║   >> 〔 SOOCIAL MEDIAK OWNER 〕 <<
║➸ *Instagram*
║ Ga ada cug
║➸ *Grub Bot*
║ https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
║➸ *Github*
║ - SC CARI SENDIRI DEK -
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
