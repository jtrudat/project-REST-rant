require('dotenv').config()
let express = require('express')
let app = express()
let PORT = process.env.PORT

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places.js'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(PORT, ()=>{
    console.log(`monitoring ${PORT}`)
})
