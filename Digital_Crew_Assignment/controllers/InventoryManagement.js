const EmployeeModel = require('../models/InventoryManagement')

const get = async (req, res) => {

  try {
    const employees = await EmployeeModel.find();
    res.send({ status: 'success', employees })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching ' })
  }
}


const getByID = async (req, res) => {
  const { ID } = req.params

  const Employee = await EmployeeModel.findById(ID)
  if (Employee) {
    res.send(Employee)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const post = async (req, res) => {
  const EmployeesData = req.body
  try {
    const result = await EmployeeModel.create(EmployeesData)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updateById = async (req, res) => {

  const { ID } = req.params
  const updatedEmployeeData = req.body //{language, name, id}

  try {
    const updatedResult = await EmployeeModel.findByIdAndUpdate(ID, updatedEmployeeData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deleteByID = async (req, res) => {
  const { ID } = req.params

  const deletedData = await EmployeeModel.findByIdAndDelete(ID)
  res.send(deletedData)
}


module.exports = {
  get,
  getByID,
  post,
  updateById,
  deleteByID
}