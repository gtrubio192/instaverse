import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import instaverse from './images/Instaverse.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts)
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center" className={classes.heading} >
          Instaverse
        </Typography>
        <img src={instaverse} alt="instaverse" height={60} className={classes.image} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="strech" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App