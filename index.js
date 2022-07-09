require('dotenv').config()
let express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send('Hello world!!!!')
})
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page hit</h1>')
})

app.listen(process.env.PORT)
