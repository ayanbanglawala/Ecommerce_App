const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart:{
        type:Array,
        default:[]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Users',UserSchema)