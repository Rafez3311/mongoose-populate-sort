require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();




// Middlewares
//app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));

// View Engine
app.set("view engine", "ejs");








// Database Connection With Mongoose
const uri = process.env.URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const conn = mongoose.connection;

conn.once("open", () => console.log("Database connected"));




// Routes
app.use("/", require("./routes/routes"));






// Server & PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));