const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᴹᴿ Unknown ツ
item.ORG: ᴹᴿ Unknown ツ 
item1.TEL;waid=6283805685278:6283805685278@s.whatsapp.net
item1.X-ABLabel:Owner agak sibuk jadi inti aja
item2.YOUTUBE;type=INTERNET: https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ
item2.X-ABLabel:YOUTUBE
item3.ADR:;;🎍AMERIKA SERIKAT;;;;
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
let jarot = 'https://telegra.ph/file/00ca947f49354f6c108da.jpg'
await conn.send3ButtonImg(m.chat, SaxiaBot, `*✨Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor owner gwehj…*`, '📮: jngn di spam dek', '𝙎𝙚𝙬𝙖', '.sewa', '𝘽𝙖𝙘𝙠', '.menu', '𝘿𝙤𝙣𝙖𝙨𝙞', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
