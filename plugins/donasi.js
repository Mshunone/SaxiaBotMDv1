let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*Hamlo Banh yok donasi biar bot on terusπ*
ββββββββββββββββββββ
β _*DONASI UNTUK GWEHJ*_  
β βββββββββββββββββββ
β          β γ *ππ’π‘ππ¦π* γ β
β-:> *DANA* : 
β> -
β-:> *GOPAY*
β> -
β-:> *SHOPPAY*:
β> -
β°βββββββββββββββββββ
βββββββββββββββββββββ
β *Donasi Via Ikuti Sosial media YOK*
β ββββββββββββββββββββ
β   >> γ SOOCIAL MEDIAK OWNER γ <<
ββΈ *Instagram*
β Ga ada cug
ββΈ *Grub Bot*
β https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
ββΈ *Github*
β - SC CARI SENDIRI DEK -
βββββββββββββββββββββ

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
