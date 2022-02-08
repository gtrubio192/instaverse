import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

const Posts = () => {
  const classes = useStyles()
  // useSelector hook allows us to select an object property within the state obj
  //    'posts' is what we named it in the combined reducer function
  const posts = useSelector((state) => state.posts)
  return (
    <>
      <h1>Posts</h1>
      {
        posts.length === 0
        ? <CircularProgress /> 
        : <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {
              posts.map(post => (
                <Grid key={post._id} item xs={12} sm={6}>
                  <Post post={post} />
                  {/* TODO: Set up current Id */}
                  {/* <Post post={post} setCurrentId={setCurrentId} /> */}
               </Grid>
              ))
            }
          </Grid> 
        
      }
    </>
  )
}

export default Posts