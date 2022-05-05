import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Route Components
import Counter from "../../../components/counter/Counter"
import PostsList from "../../../components/posts/PostsList"
import AddPostForm from "../../../components/posts/AddPostForm"
import SinglePostPage from "../../../components/posts/SinglePostPage"
import EditPostForm from "../../../components/posts/EditPostForm"
import UsersList from "../../../components/users/UsersList"
import UserPage from "../../../components/users/UserPage"
import Card from "../../../components/card/Card"
import CustomerSignup from "../../../components/customerSignup/CustomerSignup"
import Typing from "../../../components/typing/Typing"

const HomePage = () => {
  return (
    <>
      <Typing />
      <Counter />
      <AddPostForm></AddPostForm>
    </>
  )
}

export default HomePage
