class Processor {
   static async process(data) {
    const conteudo = await data.split('\r\n')
    const rows = []
    for (const row of conteudo) {
        rows.push(row.split(';'))
    }
    return rows
   }
}

module.exports = Processor