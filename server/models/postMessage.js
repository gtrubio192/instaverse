import mongoose from 'mongoose'

// Schema: create structure of posts to return different responses
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

// Need to create schema into a *model*
// Will be able to execute CRUD commands later on this model
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage