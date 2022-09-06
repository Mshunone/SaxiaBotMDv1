let handler = async (m, { conn, command, text }) => {
await conn.sendMessage(m.chat, { delete: m.key })
}
handler.customPrefix = /Biadap|badjingan|bajingan|brengsek|/i
handler.command = new RegExp

module.exports = handler
