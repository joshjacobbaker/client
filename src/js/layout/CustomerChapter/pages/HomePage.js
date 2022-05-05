import React from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Framer Motion
import { motion } from "framer-motion"
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
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }}>
      <Typing />
      <Counter />
      <AddPostForm></AddPostForm>
    </motion.div>
  )
}

export default HomePage
