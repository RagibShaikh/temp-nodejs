const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.end(`hello world`)
})

app.listen(port, () => {
    console.log(`server is listen to port- ${port} `)
})

// removed the previous comments