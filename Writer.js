const fs = require('fs')
const util = require('util')

class Writer {
    constructor() {
        this.writeFile = util.promisify(fs.writeFile)
    }

    async write(fileName, extension, data) {
        try {
            await this.writeFile(fileName + '.' + extension, data)  
            return true
        } catch (error) {
            return false
        }
    }
}

module.exports = Writer