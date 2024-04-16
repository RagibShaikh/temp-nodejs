const { readFile } = require('fs')

const showText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

showText('../Assests/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))
