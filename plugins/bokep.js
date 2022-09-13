let handler = async (m, { conn }) => {		
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih', m)
}
handler.help = ['rhs']
handler.tags = ['data']

handler.command = /^(bkp)$/i
handler.premium = false
handler.register = true
handler.limit = true
handler.owner = true
module.exports = handler
