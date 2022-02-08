import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase64 from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

const Form = () => {
  const classes = useStyles()
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log('updatings post data!', postData)
  // }, [postData])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit post data: :', postData)
    dispatch(createPost(postData))
    clear()
  }

  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">
          Creating a Post
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          key={1}
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          key={2}
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          key={3}
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          key={4}
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        /> 
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            key={666}
            multiple={false}
            onDone={({ base64 }) => {
              console.log('onDone firing...')
              setPostData({ ...postData, selectedFile: base64 })
            }}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" color="primary" fullWidth>Submit</Button>
        <Button variant="contained" size="small" onClick={clear} color="secondary" fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form