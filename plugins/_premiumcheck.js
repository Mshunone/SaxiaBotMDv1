let handler = m => m
handler.before = async (m, { conn, isPrems, owner }) => {
	if (isPrems) {
    if (new Date() * 1 >= global.db.data.users[m.sender].premiumDate) {
      conn.reply(m.chat, "*[-Promosi-] Upgrade premium yok dek*\n*Chat owner untuk upgrade premium ya*", m).then(() => {
        global.db.data.users[m.sender].premium = false
        const data = global.owner.filter(([id, isCreator]) => id && isCreator)
         this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m).then(() => {
