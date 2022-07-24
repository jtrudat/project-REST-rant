let router = require('express').Router()
let db = require('../models')

//GET INDEX /places (route to the list of all places)
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
    db.Place.findOne({
      _id: req.params.id,
    })
    .populate('comments')
    .then((place)=>{
      console.log(place.comments)
      res.render('places/show', {place})
    })
    .catch((err)=>{
      console.log('err', err)
      res.render('error404')
    })
  })
 
//EDIT route, submitting to places, pt2 (then reposting that items index with changes)  
  router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
      console.log(req.body)
      res.redirect(`/places/${req.params.id}`)
    })
    .catch((err)=>{
      console.log('err', err)
      res.render('error404')
    })
})

//DELETE (routing to remove an itme by its index)
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then((deletedPlace) =>{
    console.log(deletedPlace)
    res.redirect('/places')
  })
  .catch((err) =>{
    console.log('err', err)
    res.render('error404')
  })
  // res.send('DELETE /places/:id route stub good check')
})  

//EDIT route, updating edit form, pt 1 (routing to a specific item, make changes) 
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then((place)=>{
      console.log(place)
      res.render('places/edit', {place})
    })
    .catch((err)=>{
      res.render('error404')
    })
})

//POST RANTS routing
router.post('/:id/comment', (req, res)=>{
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then((place)=>{
    if(req.body.rant === 'on'){
      req.body.rant = true
    }
    else{
      req.body.rant = false
    }
    db.Comment.create(req.body)
    .then((comment)=>{
      place.comments.push(comment.id)
      place.save()
      .then(()=>{
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch((err)=>{
      res.render('error404')
    })
  })
  .catch((err)=>{
    res.redirect('error404')
  })
})

//DELETE RANTS comments routing
router.delete('/:id/comment/:commentId', (req, res)=>{
  db.Comment.findByIdAndDelete(req.params.commentId)
  .then(()=>{
    console.log('DELETED',req.params.commentId)
    res.redirect(`/places/${req.params.id}`)
  })
  .catch((err)=>{
    console.log('err', err)
    res.render('error404')
  })
})

module.exports = router