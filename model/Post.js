const { model, Schema } = require('mongoose');

const PostSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description provided on this article'
    },
    createdAt: {
        type: Date
    }
})

module.exports = model('Post', PostSchema);