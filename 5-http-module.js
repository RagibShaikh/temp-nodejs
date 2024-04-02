const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('here is the brief intro about us')
    }
    else if (req.url === '/products') {
        res.end('here is the page where all our products are listed')
    }
    else {
        res.end(`
        <h1>Oops..!</h1>
        <h3>Sorry, we can't find the page that you're looking for.</h3>
        <a href='/'>Back To Home?</a>
        `)
    }
})

server.listen(3999)