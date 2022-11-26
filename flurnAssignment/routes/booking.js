const express = require('express')
const seatsRounter = express.Router()
const { getSeats,getSeatByID} = require('../controllers/booking')


//Add seats route
seatsRounter.get('/', getSeats)


//Find a seat on the basis of ID
seatsRounter.get('/:id' ,getSeatByID)


//Exporting the router module
module.exports = seatsRounter