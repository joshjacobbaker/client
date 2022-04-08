import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewPost } from "../redux/features/posts/postsSlice"

const AddPostForm = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [userId, setUserId] = useState("")
  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const users = useSelector((state) => state.users)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onBodyChanged = (e) => setBody(e.target.value)
  const onAuthorChanged = (e) => setUserId(e.target.value)

  const canSave = [title, body, userId].every(Boolean) && addRequestStatus === "idle"

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending")
        await dispatch(addNewPost({ title, body, userId })).unwrap()
        setTitle("")
        setBody("")
        setUserId("")
        navigate("/postslist")
      } catch (err) {
        console.error("Failed to save the post: ", err)
      } finally {
        setAddRequestStatus("idle")
      }
    }
  }

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postBody">Body:</label>
        <textarea id="postBody" name="postBody" value={body} onChange={onBodyChanged} />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
