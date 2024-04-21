// another approach would be instead of adding the 'util'module and then using its promisify property
//      we could just add '.promises' to the 'require('fs')', that way we don't need to make new functions to
//      to access the readFile or writeFile properties of the fs module

const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('../Assests/first.txt', 'utf-8')
        const second = await readFile('../Assests/second.txt', 'utf-8')
        await writeFile('../Assests/new.txt', `this is the new approach`)
        const third = await readFile('../Assests/new.txt', 'utf-8')
        console.log(first)
        console.log(second)
        console.log(third)
    } catch (error) {
        console.log(error)
    }
}

start()


