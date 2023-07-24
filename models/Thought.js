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
// reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.vitural('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;