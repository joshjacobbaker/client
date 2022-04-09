import React from "react"
import { useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"

import { selectUserById } from "../../redux/features/users/usersSlice"
import { selectAllPosts } from "../../redux/features/posts/postsSlice"

const UserPage = () => {
  let { userId } = useParams()

  const user = useSelector((state) => selectUserById(state, userId))

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state)
    return allPosts.filter((post) => post.user === userId)
  })

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  )
}

export default UserPage
