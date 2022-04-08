import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { sub } from "date-fns"

const initialState = { posts: [], status: "idle", error: null }

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get("http://localhost:8080/posts")
    console.log(response)
    return response.data
  } catch (e) {
    console.error(`Error during GET request: ${e}`)
  }
})

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  // The payload creator receives the partial `{title, body, user}` object
  async (initialPost) => {
    // We send the initial data to the fake API server
    const response = await axios.post("http://localhost:8080/posts", initialPost)
    // The response includes the complete post object, including unique ID
    return response.data
  }
)

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postUpdated(state, action) {
      const { id, title, body } = action.payload
      const existingPost = state.posts.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.body = body
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addNewPost.pending, (state, action) => {
        state.status = "loaded"
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.posts.push(action.payload)
      })
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded"
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const { postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

export const selectAllPosts = (state) => state.posts.posts

export const selectPostById = (state, postId) => state.posts.posts.find((post) => post.id === postId)

// postAdded: {
//   reducer(state, action) {
//     state.posts.push(action.payload)
//   },
//   prepare(title, body, userId) {
//     return {
//       payload: {
//         id: nanoid(),
//         date: new Date().toISOString(),
//         title,
//         body,
//         user: userId,
//         reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
//       },
//     }
//   },
// },
