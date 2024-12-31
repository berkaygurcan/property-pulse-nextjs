import {Schema, model, models} from 'mongoose'

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: [true,'Email already exists'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    image: {
        type: String,
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId, // for relation
            ref: 'Property' // Property modeline bakıcak 
        }
    ]
}, {
    timestamps:true
})

const User = models.User || model('User', UserSchema)

export default User