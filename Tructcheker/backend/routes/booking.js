const express = require('express')
const seatsRounter = express.Router()
const { getFlight,getFlightByID} = require('../controllers/booking')


//Add seats route
seatsRounter.get('/', getFlight)


//Find a seat on the basis of ID
seatsRounter.get('/:id' ,getFlightByID)


//Exporting the router module
module.exports = seatsRounter