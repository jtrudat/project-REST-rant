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
  
//SHOW
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
      res.render('places/show', {place: places[id]})
    }
  })
  
  

module.exports = router