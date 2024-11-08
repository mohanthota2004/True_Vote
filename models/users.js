const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true,unique: true },
    phone: { type: String, required: true, unique: true},
    dob: { type: Date },
    userType: { type: String, enum: ['Voter', 'Candidate', 'Admin'] },
});



// Hash password before saving (use regular function to access 'this')
userSchema.pre('save', async function (next) {
    // Check if the password is modified
    if (!this.isModified('password')) return next();
  
    // Hash the password
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  // Method to compare passwords
  userSchema.methods.comparePassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password);
  };
  

const User = mongoose.model('user', userSchema)
module.exports = User ;
