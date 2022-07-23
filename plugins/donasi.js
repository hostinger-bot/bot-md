let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ Dana 082221792667
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6282221792667
│ _Hasil donasi akan digunakan buat sewa_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
