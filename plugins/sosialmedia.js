const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let Shunji = `
╭─❑ 「 *SOSIAL MEDIA* 」 ❑──
│ Follow sosial media
│ Owner kang nolep jadi seadanya
│ Sahlam kenal...
╰❑
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya6)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: 9999,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '',
           hydratedButtons: [{
             urlButton: {
               displayText: 'IGE gwe 📨',
               url: 'https://www.instagram.com/mfordxcl/'
             }

           },
                {
               urlButton: {
               displayText: 'Wangsaf Owner🔥',
               url: 'https://wa.me/6283805685278'
             }

           },
               {
urlButton: {
               displayText: 'Group Bot Creator📸',
               url: 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
             }

           },
               {
             quickReplyButton: {
               displayText: 'DONASI',
               id: '.donasi',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'BIODATA CREATOR',
               id: '.biodata',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(sosialmedia|.sosialmedia)$/i
handler.command = new RegExp
handler.help = ['.sosialmedia']
module.exports = handler
