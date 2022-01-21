import React, { useState } from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'

const Form = () => {
  const classes = useStyles()
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''})

  const handleSubmit = () => {

  }

  const clear = () => {

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
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        /> 
        <TextField
          name="selectedFile"
          variant="outlined"
          label="Selected File"
          fullWidth
          value={postData.selectedFile}
          onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })}
        />               
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" color="primary" fullWidth>Submit</Button>
        <Button variant="contained" size="small" onClick={clear} color="secondary" fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form