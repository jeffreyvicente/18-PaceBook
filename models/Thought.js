const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
       reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getter: true
        },
        id: false,
    }
);

// reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// Creates a model called 'Thought'. 
const Thought = model('Thought', thoughtSchema);

// Exports the router
module.exports = Thought;