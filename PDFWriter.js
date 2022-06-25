const pdf = require('html-pdf')

class PDFWriter {
    static async writePDF(fileName, html) {
        pdf.create(html).toFile(fileName + '.pdf', err => {})
    }
}

module.exports = PDFWriter