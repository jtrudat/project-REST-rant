let router = require('express').Router()
let db = require('../models')

//GET /places (route to the list of all places)
router.get('/', (req, res)=>{
    db.Place.find()
    .then((places)=>{
      res.render('places/index', {places})
    })
    .catch(err =>{
      console.log(err),
      res.render('error404')
    })
})

//Creating pt2 Adding NEWLY created places (routing a newly created place to the list of all places)
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(()=>{
      res.redirect('/places')
    })
    .catch(err=>{
      console.log('err', err)
      res.render('error404')
    })
  })

//Creating pt1 NEW places (the place where you go to fill in the template of a new place)
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
//SHOW (routing to the page displaying a particular item menu in detail (/:id = places/id index number) )
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then((place)=>{
      res.render('places/show', {place})
    })
    .catch((err)=>{
      console.log('err, err')
      res.render('error404')
    })
  })
 
//EDIT pt2 (then reposting that items index with changes)  
  router.put('/:id', (req, res) => {
    res.send('PUT /places/:id route stub good check')
})

//DELETE (routing to remove an itme by its index)
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id route stub good check')
})  

//EDIT pt 1 (routing to a specific item, make changes) 
router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit form route stub good check')
})

//POST RANTS routing
router.post('/:id/rant', (req, res)=>{
  res.send('GET /places/:id/rant route stub good check')
})

//DELETE RANTS routing
router.delete('/:id/rant/:rantId', (req, res)=>{
  res.send('DELETE /places/:id/rant/:rantId route stub good check')
})

module.exports = router