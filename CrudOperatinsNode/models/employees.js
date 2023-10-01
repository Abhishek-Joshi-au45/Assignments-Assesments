const mongoose = require('mongoose')


const EmployeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // lowercase: true,
    maxLength: 50
  },
  Employees_id: {
    type: Number,
    default: 0,
    required:true
  },
  Designation :{
    type: String,
    maxLength: 50
  }
})

//collectionName, Schema
const EmployeeSModel = mongoose.model('Employees', EmployeesSchema)

module.exports = EmployeeSModel