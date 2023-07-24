const { Schema, model } = require('mongoose');

// Schema to create the Thought model
const thoughtSchema = new Schema(
    {
       thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
       },
       createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => timestamp.toLocaleString(),
       },
       username: {
            type: String,
            required: true,
       },
       reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtuals('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;