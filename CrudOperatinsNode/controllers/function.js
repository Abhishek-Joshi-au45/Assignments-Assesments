const postModel = require('../models/Post')

const getPost = async (req, res) => {

  try {
    const post = await postModel.find();
    res.json(post)
    //res.send({ status: 'success', post })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'error fetching post' })
  }
}


const getPostByID = async (req, res) => {
  const { PostID } = req.params

  const Post = await postModel.findById(PostID)
  if (Post) {
    res.send(Post)
  } else {
    res.status(404).send({ status: 'error', msg: 'Not found' })
  }
}


const postData = async (req, res) => {
  const Data = req.body
  try {
    const result = await postModel.create(Data)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }

}


const updatePostById = async (req, res) => {

  const { PostID } = req.params
  const updatedPostData = req.body //{language, name, id}

  try {
    const updatedResult = await postModel.findByIdAndUpdate(PostID, updatedPostData, { new: true, runValidators: true })
    res.send(updatedResult)
  } catch (err) {
    res.status(500).send(err)
  }
}


const deletePostByID = async (req, res) => {
  const { PostID } = req.params

  const deletedData = await postModel.findByIdAndDelete(PostID)
  res.send(deletedData)
}


module.exports = {
  getPost,
  getPostByID,
  postData,
  updatePostById,
  deletePostByID
}