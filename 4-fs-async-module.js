const { readFile, writeFile } = require('fs')

console.log(`starting the task`)

readFile('./Assests/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return null
    }
    else {
        console.log(result)
    }
    readFile('./Assests/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return null
        }
        else {
            console.log(result)
        }
    })
    writeFile('./Assests/new.txt', `this is the new file content`, (err, res) => {
        if (err) {
            console.log(err)
            return null
        }
        else {
            console.log(`done with the task`)
        }
    })
})

console.log(`new task started`)


// APPENDING THE CONTENT

// const { appendFile, readFile } = require('fs')

// appendFile('./Assests/new.txt', ' / good evening', (err, res) => {
//     if (err) {
//         console.log(err)
//         return null
//     }
//     else {
//         readFile('./Assests/new.txt', 'utf-8', (err, res) => {
//             if (err) {
//                 console.log(err)
//                 return null
//             }
//             else {
//                 console.log(res)
//             }
//         })
//     }
// })


// DELETING THE FILE

// const {unlink} = require('fs')

// unlink('./Assests/new.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(`file deleted`)
//     }
// })