let router = require('express').Router()
let places = require('../models/places.js')
//GET /places
router.get('/', (req, res)=>{
    console.log('arrived at subcategory places')
    res.render('places/index', {places})
})

//CREATE places
router.post('/', (req, res) => {
    console.log(req.body)
    places.push(req.body)
    res.redirect('/places')
  })

//NEW places
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  


module.exports = router