import React from "react"
import { useSelector } from "react-redux"
import { useParams, NavLink } from "react-router-dom"

import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

import { selectPostById } from "../redux/features/posts/postsSlice"

const SinglePostPage = () => {
  let { postId } = useParams()

  // const { postId } = match.params
  console.log(postId)

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <TimeAgo timestamp={post.date} />
        <PostAuthor userId={post.user} />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <NavLink to={`/editpost/${post.id}`} className="button">
          Edit Post
        </NavLink>
      </article>
    </section>
  )
}

export default SinglePostPage
