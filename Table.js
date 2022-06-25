class Table {
    constructor(arrData) {
        this.header = arrData[0]
        arrData.shift()
        this.rows = arrData
    }
    // const qtdColunas = pedidos.header.length
    // const qtdLinhas = pedidos.rows.length
    async rowCount() {
        return await this.header.length
    }

    async colCount() {
        return await this.rows.length
    }
}

module.exports = Table