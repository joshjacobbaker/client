import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Spinner from "./Spinner"
import PostExcerpt from "./PostExcerpt"

import { selectAllPosts, fetchPosts } from "../redux/features/posts/postsSlice"

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  // const renderedPosts = orderedPosts.map((post) => <PostExcerpt key={post.id} post={post} />)

  let content

  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />
  } else if (postStatus === "succeeded") {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    content = orderedPosts.map((post) => <PostExcerpt key={post.id} post={post} />)
  } else if (postStatus === "failed") {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts...</h2>
      {content || <p>No Content...</p>}
    </section>
  )
}

export default PostsList
