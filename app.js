const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const connectDB = require('./config/db');

 
require('dotenv').config(); 

// Connect to MongoDB
connectDB();

// Session management
  app.use(session({
    secret: 'SARA', // Replace with your own secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));
  

//routes
const mainRoute = require('./routes/mainR')
const loginRoute = require('./routes/loginR')
const dashRoute = require('./routes/dashR')
const adminRoute = require('./routes/adminR')
const candidateRoute = require('./routes/candidateR')
const voterRoute = require('./routes/voterR')
const pollRoutes = require('./routes/polls');

//template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));


//static files
app.use(express.static(path.join(__dirname, 'public')))


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// // // MongoDB Connection
// // mongoose.connect('mongodb://localhost:27017/TV')
// // .then(() => {
// //     console.log('Connected to MongoDB');
// // }).catch((error) => {
// //     console.error('MongoDB connection error:', error);
// // });



app.use('/contact', (req, res) => {
    res.render('contact');
  });


app.use('/reg_suc', (req, res) => {
     res.render('reg_suc');
 });
 
//routing
app.get('/',mainRoute)
app.use('/main',mainRoute)
app.use('/login',loginRoute)
app.use('/dash',dashRoute)
app.use('/admin',adminRoute)
app.use('/candidate',candidateRoute)
app.use('/create-poll',pollRoutes)
app.use('/voter',voterRoute)




app.listen(5550, () => {
    console.log('Server is running @ http://localhost:5550');
});

