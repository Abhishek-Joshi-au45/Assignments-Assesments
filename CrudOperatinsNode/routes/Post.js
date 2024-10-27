const express = require('express')
const { getPost,getPostByID,postData,updatePostById,deletePostByID } = require('../controllers/function')
const postRouter = express.Router()

postRouter.get('/', getPost);
postRouter.get('/:EmployeeID', getPostByID);
postRouter.post('/', postData);
postRouter.put('/:EmployeeID', updatePostById);
postRouter.delete('/:EmployeeID', deletePostByID);

module.exports = postRouter
