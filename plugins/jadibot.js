let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo Mypren ๐
*MAAF DEK FITUR JADIBOT ITU BERAT & TIDAK ADA DI DALAM FITUR BOT*
โฉยป *Kalau kakak mau jadi bot silahkan jasa run aja 50k paket lengkap*
          
โโโใ > *HARGA* < ใโโ๊ฅ
โฌก *1 minggu:* 15.000
โฌก *3 minggu:* 25.000
โฌก *Tutorial Jadibot:* 50.000
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโโใ > *PAYMENT* < ใโโ๊ฅ
โฌก *DANA:* ${-}
โฌก *GOPAY:* ${-}
โฌก *Grub Bot:* ${'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'}
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโใ > *RULES* < ใโ๊ฅ
โฌก [โ] *Dana yang sudah masuk tidak bisa di kembalikan*
โฌก [โ] *Kalau akunmu ke banned bukan urusan gwehj*
โโโโโโโโโโโ๊ฅ
Jika anda berminat hubungi nomor di bawah!!
โฉยป *jangan lupa donasi Dek* ยซโจ
Terimakasih yang sudah donasi
Yang blom kamu taik pencet doang

Contact person jasa run:
wa.me/${'6285850539404'} (Owner)

*Follow Instagram ku Ama Join GRUB SU*`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'SewaBot', '.sewaoscar', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
