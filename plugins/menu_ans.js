const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6283805685278
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮Note : HALO DEK GWE SAXIA`BOT, KALO MAU MENGGUNAKAN WA LAMA ATAU WA MOD, DAN BUTTON TIDAK KELIATAN, LANGSUNG AJA KETIK .allmenu ATAU .menu2',
           hydratedButtons: [{
             urlButton: {
               displayText: '🔮GRUB BOT🔮',
               url: 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
             }

           },
                {
               urlButton: {
               displayText: '🐻YTTA🐻',
               url: 'https://youtube.com'
             }

           },
               {
             quickReplyButton: {
               displayText: 'SEWA BOT🚀',
               id: '.sewabot',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'GA ADA SC SC AN🎗️',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'KAYAK NYA ALLMENU📖',
               id: '.allmenu',
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
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
