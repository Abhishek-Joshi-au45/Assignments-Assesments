const flightModel = require('../models/booking')


const getFlight = async (req, res) => {            
  try {
    const seats = await flightModel.find();
    res.send({ status: 'success', seats })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching ' })
  }
}


const getFlightByID = async (req, res) => {
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
  getFlight,
  getFlightByID
}