const userModel = require("./model")
// const express = require("express")
// const route = express.Router()
// const imageUploader = require( './multer')

const createUser = async (req, res) => {
    try {
        const newUser = await userModel.create({
            prefix: req.body.firstname.charAt(0).toUpperCase() + req.body.lastname.charAt(0).toUpperCase() ,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            image: req.file.path
        })

        res.status(201).json({
            status: "Success",
            data: newUser
        })
    } catch (error) {
        console.log(error.message);
    }
}

// route.post("/create", )


module.exports = {createUser}