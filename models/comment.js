let mongoose = require('mongoose')
let commentSchema = new mongoose.Schema({
    author: {
        type: String,
        defaultValue: 'Anonymous',
    },
    rant: {
        type: Boolean,
        defaultValue: false,
    },
    stars: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        defaultValue: '',
    }
})




module.exports = mongoose.model('Comment', commentSchema)

