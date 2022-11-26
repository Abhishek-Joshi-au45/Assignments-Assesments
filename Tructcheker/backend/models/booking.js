const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Origin_city:{
        type:String,
        required:true
    },

    Destination_city:{
        type:String,
        required:true
    },
    
    Departure_date:{
        type:Boolean,
        required:true
    },

    Return_date:{
        type:Number,
        required:true
    },
    Departure_time:{
        type:String,
        required:true
    },
    
    Arrival_time:{
        type:Boolean,
        required:true
    },

    Price:{
        type:Number,
        required:true
    }
},              
);  

//collectionName, Schema
const flightModel = mongoose.model('booking', flightSchema)

module.exports = flightModel