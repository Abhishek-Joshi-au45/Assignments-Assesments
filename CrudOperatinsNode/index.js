const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

require('dotenv').config() //load all key-value pairs in .env file to proces.env object
const postRouter = require('./routes/Post')

// Middleware
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

const { initDB } = require('./dbConfig')

//connect to DB
initDB()

app.get('/', (req,res)=>{
    res.send("Hi , to get the post use /post")
})
app.use('/Post', postRouter)

app.listen(8000,()=>{
    console.log("Server started at 8000")
})
