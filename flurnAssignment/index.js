const express = require("express")
const app = express()


//load all key-value pairs in .env file to proces.env object
require('dotenv').config() 

const { initDB } = require('./dbConfig')
const cookieParser = require('cookie-parser')

//connect to DB
initDB()

//express.urlencoded() will accept the form data from the postman
app.use(express.urlencoded({extended:true}))

//express.json() will accept the json data from the postman
app.use(express.json())             

app.use(cookieParser())

//express.static('public') will accept the public file
app.use(express.static('public'))


const seatsRounter = require('./routes/booking')
const GetSeatsRounter = require('./routes/SeatBooking')

// Checking th server
app.get("/",(req,res)=>{
    res.send(`Home Routes`)
})

//importing Contact realted route
 app.use('/seats' , seatsRounter)
 app.use('/booking', GetSeatsRounter)


app.listen(8000,()=>{
    console.log("Server started at port 8000")
})