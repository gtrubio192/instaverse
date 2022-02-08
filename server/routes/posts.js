import express from 'express'
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router()

// First draft:
// router.get('/', (req, res) => {
//   res.send('Post works')
//   ... other logic ...
// })

// 2nd draft:
// remove all logic from callback as to reduce clutter, move logic to controller
router.get('/', getPosts)
router.post('/', createPost)

export default router;