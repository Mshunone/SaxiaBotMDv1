let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://i.pinimg.com/originals/64/fe/94/64fe94513b3346c1a15ddd0129552493.jpg'
       await conn.delay(1500)
       await conn.send2ButtonLoc(id, bcbg,'*——————「 Broadcast Dek 」——————*\n' + text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', m)
     }
  m.reply('*Broadcast selesai*')
}
handler.help = ['broadcastloc','bcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastloc|bcloc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
