let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let saweria = global.saweria
let owner = global.owner
let anu = `Hallo Mypren 👋
━━━〔 >> *Sewa Bot* << 〕━━ꕥ
━━━━━━━━━━━━━━━━━━━━
━━━〔 *HARGA* 〕━━ꕥ
⬡ *1 BULAN:* *10.000*
⬡ *2 BULAN:* *20.000*
⬡ *1 BULAN 2/3 GRUP:* *20.000*
⬡ *lebih dari 3 tambah +5.000*
┗━━━━━━━━━━━━━━━ꕥ
┏━━━〔 *PAYMENT* 〕━━ꕥ
⬡ *DANA:* ${dana}
⬡ *Shoppay:* ${saweria}
⬡ *gopay:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 *RULES* 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah dek!!

[» *jangan lupa donasi kak* «]

Contact person Sewa Bot:
wa.me/${6283805685278} (Owner)

*Follow Instagram ama join grub ya*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Pilihan Store', '.pilihanstore', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewaoscar']
handler.tags = ['info']
handler.command = /^(sewa|sewaoscar|sewa|sewabot)$/i

module.exports = handler
