const { readFile } = require('fs')

console.log('task started')

readFile('../Assests/Subfolder/info.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    else {
        console.log(res.toUpperCase())
        console.log('TASK COMPLETED!!')
    }
})

console.log('new task started')