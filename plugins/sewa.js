let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let saweria = global.saweria
let owner = global.owner
let anu = `Hallo Mypren ๐
โโโใ >> *Sewa Bot* << ใโโ๊ฅ
โโโโโโโโโโโโโโโโโโโโ
โโโใ *HARGA* ใโโ๊ฅ
โฌก *1 BULAN:* *10.000*
โฌก *2 BULAN:* *20.000*
โฌก *1 BULAN 2/3 GRUP:* *20.000*
โฌก *lebih dari 3 tambah +5.000*
โโโโโโโโโโโโโโโโ๊ฅ
โโโโใ *PAYMENT* ใโโ๊ฅ
โฌก *DANA:* ${dana}
โฌก *Shoppay:* ${saweria}
โฌก *gopay:* ${pulsa}
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโใ *RULES* ใโ๊ฅ
โฌก [โ] *Dana yang sudah masuk tidak bisa di kembalikan*
โโโโโโโโโโโ๊ฅ
Jika anda berminat hubungi nomor di bawah dek!!

[ยป *jangan lupa donasi kak* ยซ]

Contact person Sewa Bot:
wa.me/${6283805685278} (Owner)

*Follow Instagram ama join grub ya*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Pilihan Store', '.pilihanstore', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewaoscar']
handler.tags = ['info']
handler.command = /^(sewa|sewaoscar|sewa|sewabot)$/i

module.exports = handler
