//modules
const express = require("express");
const dotenv = require('dotenv')

//files
const routes = require('./routes')

//environment variables
dotenv.config();


//Variables
var PORT = process.env.PORT

//init app
var app = express()


//use json
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//routes
app.use("/api", routes);


//start server
app.listen(PORT, () => {
    console.log("server started on port " + PORT);
});