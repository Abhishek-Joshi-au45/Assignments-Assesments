const express = require('express')
const app = express()

require('dotenv').config() //load all key-value pairs in .env file to proces.env object
const InventoryManagement = require('./routes/InventoryManagement')

app.use(express.json())

const { initDB } = require('./dbConfig')

//connect to DB
initDB()

app.use('/InventoryManagement', InventoryManagement)

app.listen(8000,()=>{
    console.log("Server started at 8000")
})
