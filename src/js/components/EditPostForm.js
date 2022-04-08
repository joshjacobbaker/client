import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, useNavigate } from "react-router-dom"

import { postUpdated, selectPostById } from "../redux/features/posts/postsSlice"

import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"

const EditPostForm = () => {
  let { postId } = useParams()
  const post = useSelector((state) => selectPostById(state, postId))

  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onBodyChanged = (e) => setBody(e.target.value)

  const onSavePostClicked = () => {
    if (title && body) {
      dispatch(postUpdated({ id: postId, title, body }))
      navigate(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <TimeAgo timestamp={post.date} />
      <PostAuthor userId={post.user} />
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" placeholder="What's on your mind?" value={title} onChange={onTitleChanged} />
        <label htmlFor="postBody">Body:</label>
        <textarea id="postBody" name="postBody" value={body} onChange={onBodyChanged} />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  )
}

export default EditPostForm
