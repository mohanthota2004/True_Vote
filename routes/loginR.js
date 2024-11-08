const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const { protect } = require('../middleware/auth');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('login');
});






// Route to handle registration form submission
router.post('/post', async (req, res) => {

    const { Name, email, password, phone, dob, userType } = req.body;

    // Check if the user already exists
    try {
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email or phone number.' });
      // alert("User already exists with this email or phone number")
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create a new user and save to the database
    const newUser = new User({
      Name,
      email,
      password,
      phone,
      dob,
      userType
    });
  
   
      await newUser.save();


      const token = jwt.sign(
        { id: newUser._id }, // Only include user ID in the token
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
      );
  
      // Set the token in an HTTP-only cookie
      res.cookie('token', token, { httpOnly: true });
  


      console.log("User saved:", newUser); // Use 'newUser' instead of 'user'
      res.redirect('/reg_suc'); // Redirect to login after successful registration
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error occurred while registering the user.');
    }
  });
  


// Handle POST request for login
router.post('/authenticate', async (req, res) => {
  const { email, password, userType } = req.body;

  try {
    // Find the user by email and userType
    const user = await User.findOne({ email: email, userType: userType });
    
    // If user not found or password doesn't match
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).send('Invalid credentials');
    }

    // If password matches, generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });

    // Redirect based on userType
    if (userType === "Admin") {
      return res.status(201).redirect('/admin');
    } else if (userType === "Voter") {
      return res.status(201).redirect('/voter'); // Changed to 'dashboard' for better clarity
    } else if (userType === "Candidate") {
      return res.status(201).redirect('/candidate');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send("Internal server error. Please try again later.");
  }
});




module.exports = router;
