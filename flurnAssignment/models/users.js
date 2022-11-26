const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    seat_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},              
);  

//collectionName, Schema
const userModel = mongoose.model('seats', userSchema)

module.exports = userModel