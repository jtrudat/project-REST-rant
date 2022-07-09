let router = require('express').Router()
router.get('/', (req, res)=>{
    console.log('arrived at subcategory places')
    res.send('GET /places')
})

module.exports = router