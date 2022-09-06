const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
•·––––––––––––––––––––––––––·•
❑ *Nama* : Mrcl
❑ *Umur* : XX Tahun
❑ *Kelas* : Sekolah
❑ *Ulang Tahun* : 02 Februari 200X
❑ *Alamat* : Yang ytta ytta aja
•·––––––––––––––––––––––––––·•
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya7)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: Shunji,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'salam kenal banh👋',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Group official',
               url: 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
             }

           },
                {
               urlButton: {
               displayText: 'YTTA 🌍',
               url: 'https://chat.whatsapp.com/EUexY1yhxAB6wjD9ZP6MOU'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Sewa Bot 🏧',
               id: '.sewa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu ⛽',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi yok 📮',
               id: '.donasi',
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
handler.customPrefix = /^(biodata|.biodata)$/i
handler.command = new RegExp
handler.help = ['.biodata']
module.exports = handler
