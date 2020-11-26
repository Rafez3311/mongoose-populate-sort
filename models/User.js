const mongoose = require("mongoose");

// Declaring a _id field with mongoose.Schema.Types.ObjectId is only useful in the schema when you want to 
// embed some fields of a model document as subdocument instead of adding a ref 
// with the original id otherwise it will add a newly generated ObjectId as _id in the subdocument schema.

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }] // Array Data Type can also be set like this {type: Array}
});


const User = mongoose.model('User', userSchema);

module.exports = User;