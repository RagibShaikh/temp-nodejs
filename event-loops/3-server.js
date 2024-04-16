const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('hello world')
})

server.listen(1221, () => {
    console.log('Server Listening to Port: ')
})