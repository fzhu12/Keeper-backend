const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    key: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note