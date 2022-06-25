const fs = require('fs');
const util = require('util')

class Reader {
    constructor() {
        this.reader = util.promisify(fs.readFile)
    }
    async read (filePath) {
        try {
            return await this.reader(filePath, {encoding: 'utf8'})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Reader