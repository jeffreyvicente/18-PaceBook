const { Schema, model } = require('mongoose');

// Schema to create the User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[\w-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Though',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtuals('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;