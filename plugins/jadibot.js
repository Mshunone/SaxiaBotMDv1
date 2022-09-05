let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo Mypren 👋
*MAAF DEK FITUR JADIBOT ITU BERAT & TIDAK ADA DI DALAM FITUR BOT*
⟩» *Kalau kakak mau jadi bot silahkan jasa run aja 50k paket lengkap*
          
━━━〔 > *HARGA* < 〕━━ꕥ
⬡ *1 minggu:* 15.000
⬡ *3 minggu:* 25.000
⬡ *Tutorial Jadibot:* 50.000
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━━〔 > *PAYMENT* < 〕━━ꕥ
⬡ *DANA:* ${-}
⬡ *GOPAY:* ${-}
⬡ *Grub Bot:* ${'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 > *RULES* < 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan gwehj*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi Dek* «⟨
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
