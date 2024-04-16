const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('../Assests/first.txt', 'utf-8')
        const second = await readFilePromise('../Assests/second.txt', 'utf-8')
        await writeFilePromise('../Assests/Subfolder/newFile.txt', `hey there, this is the new content in the file using async`)
        const third = await readFilePromise('../Assests/Subfolder/newFile.txt', 'utf-8')
        console.log(first)
        console.log(second)
        console.log(third)
    } catch (error) {
        console.log(error)
    }
}

start()