const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HTMLParser = require('./HTMLParser')
const Writer = require('./Writer')
const PDFWriter = require('./PDFWriter')

const leitor = new Reader();
const escritor = new Writer();

(async function main() {
    const conteudo = await leitor.read('./Antonio.csv')
    const dadosProcessados = await Processor.process(conteudo);

    const pedidos = new Table(dadosProcessados)

    const rowCount = await pedidos.rowCount();
    const colCount = await pedidos.colCount();

    const html = await HTMLParser.parse(pedidos)

    await escritor.write(Date.now(), 'html', html)
    console.log('Sua tabela HTML foi criada com sucesso!')

    await PDFWriter.writePDF(Date.now(), html)
    console.log('Sua tabela PDF foi criada com sucesso!');

    
})();