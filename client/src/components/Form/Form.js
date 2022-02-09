import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase64 from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

const Form = () => {
  const classes = useStyles()
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
  const [formError, setFormError] = useState(false)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log('updatings post data!', postData)
  // }, [postData])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!postData.selectedFile) {
      setFormError(true)
    } else {
      setFormError(false)
      dispatch(createPost(postData))
      clear()
    }
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
          required
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          key={3}
          required
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          key={4}
          required
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        /> 
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            required
            key={666}
            multiple={false}
            onDone={({ base64 }) => {
              setFormError(false)
              setPostData({ ...postData, selectedFile: base64 })
            }}
          />
        </div>
        {
          formError && <Typography variant="subtitle2" gutterBottom component="div">Post must include a picture!</Typography>
        }
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" color="primary" fullWidth>Submit</Button>
        <Button variant="contained" size="small" onClick={clear} color="secondary" fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form