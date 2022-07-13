let router = require('express').Router()
let places = require('../models/places.js')
//GET /places (route to the list of all places)
router.get('/', (req, res)=>{
    console.log('arrived at subcategory places')
    res.render('places/index', {places})
})

//Creating pt2 Adding NEWLY created places (routing a newly created place to the list of all places)
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
        req.body.city = 'Anytown'
      }
      if (!req.body.state) {
        req.body.state = 'USA'
      }
    places.push(req.body)
    res.redirect('/places')
  })

//Creating pt1 NEW places (the place where you go to fill in the template of a new place)
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
//SHOW (routing to the page displaying a particular item menu in detail (/:id = places/id index number) )
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
      res.render('places/show', {place: places[id], id})
    }
    console.log(places[id])
  })
 
//EDIT pt2 (then reposting that items index with changes)  
  router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

//DELETE (routing to remove an itme by its index)
router.delete('/:id', (req, res) => {
    let id =Number(req.params.id)
    if(isNaN(id)){
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})  

//EDIT pt 1 (routing to a specific item, make changes) 
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)){
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
    res.render('places/edit', {place: places[id]})
    }
})
module.exports = router