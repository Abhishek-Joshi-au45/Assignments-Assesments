const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: {type: Number, required: true},
    aadhar:{type: Number, required: true},
    age:{type: Number, required: true},
    pincode:{type: Number, required: true},
    isAdmin: { type: Boolean, default: false, required: true },
  },          
 );  

// collectionName, Schema
 const userModel = mongoose.model('users', userSchema)

 module.exports = userModel




