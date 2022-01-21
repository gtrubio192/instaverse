import * as api from '../api'

// Action Creators - creators are functions that return actions

// redux-thunk gives us to specify an additional arrow func
// getPosts is a function that returns another function
export const getPosts = () => async(dispatch) => {
  // action is an object with a specified 'type', and some data
  // const action = { type: "FETCH_ALL", payload: [] }

  try {
    const { data } = await api.fetchPosts()
    // dispatch (aka return) an action
    dispatch({ type: "FETCH_ALL", payload: [] })
  } catch (err) {
    console.log(err.message)
  }

}