const express = require('express')
const GetSeatsRounter = express.Router()
const { getBooking,postBooking} = require('../controllers/SeatBooking')


//Add booking route
GetSeatsRounter.post('/', postBooking)


//Find a booking on the basis of ID
GetSeatsRounter.get('/:id' ,getBooking)


//Exporting the router module
module.exports = GetSeatsRounter