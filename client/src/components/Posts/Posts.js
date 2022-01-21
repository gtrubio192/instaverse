import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'

const Posts = () => {
  const classes = useStyles()
  // useSelector hook allows us to select an object property within the state obj
  //    'posts' is what we named it in the combined reducer function
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts