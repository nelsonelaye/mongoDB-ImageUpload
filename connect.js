const mongoose = require("mongoose")
const url = "mongodb://localhost/usersDB"

mongoose.connect(url).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err.message);
})