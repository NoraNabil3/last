const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogsSchema = new Schema({
    title: {
        type: String,
        maxLength: 256,
        required: true,
    },
    body: {
        type: String,
        maxLength: 256,
        required: true,
    },
    author: {
        type: String,
        maxLength: 256,
    },
    tags: {
        type: String,
        maxLength: 256,
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const blogsModel = mongoose.model('Blogs', blogsSchema);

module.exports = blogsModel;