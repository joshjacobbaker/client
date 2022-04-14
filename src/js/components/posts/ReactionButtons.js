import React from "react"
import { useDispatch } from "react-redux"

import { reactionAdded } from "../../redux/features/posts/postsSlice"

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    const onClickHandler = () => {
      dispatch(reactionAdded({ postId: post.id, reaction: name }))
    }
    return (
      <button key={name} type="button" className="" onClick={onClickHandler}>
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}

export default ReactionButtons
