const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᴹᴿ Unknown ツ
item.ORG: ᴹᴿ Unknown ツ 
item1.TEL;waid=6283805685278:6283805685278@s.whatsapp.net
item1.X-ABLabel:Owner agak sibuk jadi inti aja
item2.YOUTUBE;type=INTERNET: https://youtube.com
item2.X-ABLabel:YOUTUBE
item3.ADR:;;🎍INDONESIA-JATIM;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg'
await conn.send3ButtonImg(m.chat, 02-04-200, `*✨Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor owner gwehj…*`, '📮: jngn di spam dek', 'SEWA', '.sewa', 'BACK', '.menu', 'DONASI', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
