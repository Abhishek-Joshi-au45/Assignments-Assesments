const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    SeatType:{
        type:String,
        required:true
    },
    SeatNumber:{
        type:String,
        required:true
    },

    bookedBy:{
        type:String,
        required:true
    },
    
    booked:{
        type:Boolean,
        required:true
    },

    ammount:{
        type:Number,
        required:true
    }
},              
);  

//collectionName, Schema
const bookingModel = mongoose.model('booking', bookingSchema)

module.exports = bookingModel