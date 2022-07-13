//Modules and Globals
require('dotenv').config()
let express = require('express')
let methodOverride = require('method-override')
let app = express()
let PORT = process.env.PORT

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers and routes
app.use('/places', require('./controllers/places.js'))


app.get('/', (req, res) => {
    res.render('home')
})
app.get('*', (req, res) => {
    res.render('error404')
})

//Listen for connections to route
app.listen(PORT, ()=>{
    console.log(`monitoring ${PORT}`)
})
