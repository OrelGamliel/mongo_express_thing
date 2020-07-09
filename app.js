const express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
               require('dotenv/config');

//a middleware parsing every request to json
app.use(bodyParser.json());
               
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("connected to DB"));

//import routes
const postsRoute = require('./routes/posts');

//use postsRoute as middleware
app.use('/posts', postsRoute);


//ROUTES
app.get('/',(req,res) => {
    res.send('Home page')
})

app.listen(3000);