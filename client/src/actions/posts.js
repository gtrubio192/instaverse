import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// Action Creators - creators are functions that return actions

// redux-thunk gives us to specify an additional arrow func
// getPosts is a function that returns another function
export const getPosts = () => async(dispatch) => {
  // action is an object with a specified 'type', and some data
  // const action = { type: "FETCH_ALL", payload: [] }

  try {
    const { data } = await api.fetchPosts()
    // dispatch (aka return) an action > triggers the reducer
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (err) {
    console.log(err.message)
  }

}

export const createPost = (post) => async (dispatch) => {
  try {
     const { data } = await api.createPost(post)
     dispatch({ type: CREATE, payload: data })
  } catch(error) {
    console.log('error in createPost: ', error.message)
  }
}