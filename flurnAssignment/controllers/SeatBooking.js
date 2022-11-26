const userModel = require("../models/users")

const postBooking = async (req, res) => {
    const bookigndata = req.body
    try {
      const result = await userModel.create(bookigndata)
      res.status(200).send(result)
    } catch (err) {
      console.log(err)
      res.status(500).send("There is some error plz try agian")
    }
  }



  const getBooking = async (req, res) => {
    const { id } = req.params
  
    try  {
      const seat = await userModel.findById(id)
    if (seat) {
      res.send(seat)
    } else {
      res.status(404).send({ status: 'error', msg: 'Not found' })
    }
  }
    catch(error){
      res.status(404).send({ status: 'error', msg: 'Not found' })
    }
  }  

  module.exports = {
    postBooking,
    getBooking
  }