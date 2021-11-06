var admin = require('firebase-admin');
const dotenv = require('dotenv')

//environment variables
dotenv.config();

// Set the configuration for your app
// TODO: Replace with your project's config object
var serviceAccount = require("./rabbii-website-firebase-adminsdk-otc5k-c1fb75d779.json");


const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.dburl
});


module.exports = db;

// Get a reference to the database service
//var database = firebase.database();