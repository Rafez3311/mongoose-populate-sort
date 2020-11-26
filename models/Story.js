const mongoose = require("mongoose");

// Declaring a _id field with mongoose.Schema.Types.ObjectId is only useful in the schema when you want to 
// embed some fields of a model document as sub-document instead of adding a ref 
// with the original id otherwise it will add a newly generated ObjectId as _id in the subdocument schema.

const storySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    fans: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;