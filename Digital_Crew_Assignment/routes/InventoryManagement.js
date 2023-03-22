const express = require('express')
const { get, getByID, post, updateById, deleteByID } = require('../controllers/InventoryManagement')
const InventoryManagement = express.Router()

InventoryManagement.get('/', get);
InventoryManagement.get('/:ID', getByID);
InventoryManagement.post('/', post);
InventoryManagement.put('/:ID', updateById);
InventoryManagement.delete('/:ID', deleteByID);

module.exports = InventoryManagement
