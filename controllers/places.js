let router = require('express').Router()
//GET /places
router.get('/', (req, res)=>{
    console.log('arrived at subcategory places')
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: src= "images/food1.jpg"
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/food2.jpg'
      }]
      
    res.render('places/index', {places})
})

//New places
router.post('/', (req, res) => {
    res.render('places/index')
  })

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  


module.exports = router