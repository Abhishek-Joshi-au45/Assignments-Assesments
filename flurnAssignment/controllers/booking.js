const bookingModel = require('../models/booking')


const getSeats = async (req, res) => {            
  try {
    const seats = await bookingModel.find({booked:"true"});
    res.send({ status: 'success', seats })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching ' })
  }
}


const getSeatByID = async (req, res) => {
  const { id } = req.params

  try  {
    const seat = await bookingModel.findById(id)
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
  getSeats,
  getSeatByID
}