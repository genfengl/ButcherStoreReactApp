const mongoose = require('mongoose')
const passportlocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    roles: {
        type: [{
            type: String,
            enum: ['user', 'admin']
        }],
        default: ['user']
    }
})

userSchema.plugin(passportlocalMongoose)

const User = mongoose.model('User', userSchema)

module.exports = User