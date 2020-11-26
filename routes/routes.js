const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User");
const Story = require("../models/Story");


router.get("/", (req, res) => {
    res.render("home");
});



router.post("/users", (req, res) => {
    const {name, age, story} = req.body;

    Story.findOne({title: story}, (err, story) => {
        if(story) {
        const user = new User({_id: new mongoose.Types.ObjectId(), name, age});

        user.save(err => {
        if(err) throw err;
        console.log("user successfully added");

        res.redirect("/");
    });
        }
    });

    
    
});



router.post("/stories", (req, res) => {
    const {title} = req.body;

    

    Story.findOne({title}, (err, story) => {
        if(!story) {

            const story = new Story({title});
            story.save(err => {

            });
        }
    });

    // story.save(err => {
    //     if(err) throw err;
    //     console.log("story successfully created");
    //     res.redirect("/");
    // });
});




module.exports = router;