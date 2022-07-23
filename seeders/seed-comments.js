let db = require('../models')

async function seed(){
    let place = await db.Place.findOne({
        name: 'H-Thai-ML'
    })

//made up comment
let comment = await db.Comment.create({
    author: 'Famished Fran',
    rant: false,
    stars: 5,
    content: 'Wow, simply amazing and highly recommended',
})

//comment added to places comment array
place.comments.push(comment.id)

//saving the place now that it has a comment
await place.save()

//exit
process.exit()
}

seed()