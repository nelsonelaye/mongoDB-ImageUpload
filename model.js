const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    prefix: {
        type:String,
        required: true
    },
    firstname: {
        type:String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true,
        unique: true
    },
    image: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model("users", userSchema)