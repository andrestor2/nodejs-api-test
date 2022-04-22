const mongoose = require('mongoose');
const { Schema } = mongoose;

const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    description: { type: String },
    upvotes: [{ type: Boolean }],
    downvotes: [{ type: Boolean }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        autopopulate: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment',
            required: true,
            autopopulate: true
        }
    ]
});

module.exports = mongoose.model('ideas', IdeaSchema);