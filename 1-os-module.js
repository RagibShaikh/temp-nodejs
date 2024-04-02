const os = require('os')

//info about user
const user = os.userInfo()
console.log(user)

//uptime
console.log(`the uptime of the system is ${os.uptime()}`)

//more info
const userOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(userOS)