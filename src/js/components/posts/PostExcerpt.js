import React from "react"
import { NavLink } from "react-router-dom"

import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-body">{post.body.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <NavLink to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </NavLink>
    </article>
  )
}

export default PostExcerpt
