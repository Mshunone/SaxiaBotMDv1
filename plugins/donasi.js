let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*𝐇i 𝐁𝐚𝐧𝐡 𝐃𝐨𝐧𝐚𝐬𝐢 𝐲𝐮𝐤 𝐁𝐢𝐚𝐫 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐥𝐮👋*
╔═══════════════════
║ _*DONASI UNTUK*_  Owner baik
╠═══════════════════
║          ❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉
║-> *DANA* : 
║> CHT OWNER 
║-> *GOPAY*
║> CHT OWNER 
║-> *SHOPPAY*:
║> CHT OWNER 
╰═══════════════════
╔════════════════════
║ *Donasi Via Ikuti Sosial media YOK*
╠════════════════════
║     >> 〔 SOOCIAL MEDIAK OWNER 〕 <<
║➸ *Instagram*
║ Ga main ige aslinya
║➸ *Grub Bot*
║ https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
║➸ *Github*
║ SC CARI SENDIRI DEK
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
