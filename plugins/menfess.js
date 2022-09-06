// Fitur By Zivsan And Haori Kasih Credits Dong Stah
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .menfess nomor|pesan untuknya\nContoh : .menfess 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6285158866902|Hi Owner 🌹', body: 'Menfess By SaxiaMD', thumbnail: await (await fetch('https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6285158866902|Hi Owner 🌹', body: 'Menfess By SaxiaMD', thumbnail: await (await fetch('https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg')).buffer(),}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan woy!', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6285158866902|Hi Owner 🌹', body: 'Menfess By SaxiaMD', thumbnail: await (await fetch('https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)
⬡──⬡─────────⬡──⬡
💌 Pesan : ${pesan}
⬡──⬡─────────⬡──⬡
Maaf LU Belum Bisa Membalas ke Pengirim jadi Post sw aja`

let jarot = `▮PENGIRIM RAHASIA 」 
Lu Mau Mengirimkan Pesan ke Pacar/Sahabat/Teman/
Mantan/Crush?, Tapi ga tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini. Free dek!!
Contoh Penggunaan: .menfess nomor|pesan untuknya
Contoh: #menfess 628xxxxxxxxxx|hai owner baik`

    conn.send2ButtonImg(chat + '@s.whatsapp.net', await(await fetch('https://i.pinimg.com/originals/64/fe/94/64fe94513b3346c1a15ddd0129552493.jpg')).buffer(), chat1, jarot, 'Menu', '.menu', 'Donasi', '.donasi', m)
    
    let logs = `BOT AKAN BLOKIR LU?
    
≫ Spam
≫ Chat Aneh Aneh
≫ Tcdak sopan`

 let haori1 = `Sukses Mengirim Pesan Dek
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
⬡──⬡─────────⬡──⬡
💌Isi Pesan : ${pesan}
⬡──⬡─────────⬡──⬡`
    conn.send2ButtonImg(m.chat, await (await fetch('https://i.pinimg.com/originals/64/fe/94/64fe94513b3346c1a15ddd0129552493.jpg')).buffer(), logs, haori1, 'Owner', 'owner', 'Donasi', '.donasi', m)
}
handler.help = ['menfess <nomor|pesan>']
handler.tags = ['main']
handler.command = /^(menfess)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
