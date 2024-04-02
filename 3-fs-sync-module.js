const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./Assests/first.txt', 'utf-8')
const second = readFileSync('./Assests/second.txt', 'utf-8')

console.log(`starting the task`)

// reading contents of the files
console.log(first)
console.log(second)

// writing content in the pre-existing files, incase there is already data present in those files then Node will over-write that data.
writeFileSync('./Assests/first.txt', `goodbye`)
writeFileSync('./Assests/second.txt', `hey there, this is the content in the second.txt`)

// writing content in the file which doesnot exists, in that case Node will create that particular new file and then add the data to it.
writeFileSync('./Assests/writeFile.txt', `hello there, this is the latest content`)

// appending the data, in that case writeFileSync() will take one more argument that will be {flag: a} which will append the new data with the previous data
writeFileSync('./Assests/writeFile.txt', ` / hey there, this is the new data which is appended`, { flag: 'a' })

console.log(`done with the task`)
console.log(`starting the new task`)