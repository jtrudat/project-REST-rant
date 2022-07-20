const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/food1.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/food2.jpg',
    founded: 2020
}])
.then(()=>{
    console.log('Successfully uploaded')
    process.exit()
})
.catch((err)=>{
    console.log('Upload incomplete', err)
    process.exit()
})