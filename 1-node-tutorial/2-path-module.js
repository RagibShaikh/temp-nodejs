const path = require('path')

// path seprator 
console.log(path.sep)

// path join
const filePath = path.join('/Assets', 'Subfolder', 'info.txt')
console.log(filePath)

// accessing only the last part (base) of the filePath
const base = path.basename(filePath)
console.log(base)

// the absolute path
const absolute = path.resolve(__dirname, '/Assests', 'Subfolder', 'info.txt')
console.log(absolute)