const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

User.plugin(passportLocalMongoose); // Automatically implements username, hashing, salting, hash password

module.exports = mongoose.model("User", userSchema);