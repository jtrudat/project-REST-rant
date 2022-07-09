let router = require('express').Router()
//GET /places
router.get('/', (req, res)=>{
    console.log('arrived at subcategory places')
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/195/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/225/250'
      }]
      
    res.render('places/index', {places})
})

module.exports = router