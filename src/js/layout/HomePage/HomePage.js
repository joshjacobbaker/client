import React, { useState } from "react"
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"
// Sections of Layout w/ Components
import HomePageStyled from "./HomePageStyled"

// Foundational Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Right from "./Right/Right"
import Main from "./Main/Main"

// Route Components
import Counter from "../../components/counter/Counter"
import PostsList from "../../components/posts/PostsList"
import AddPostForm from "../../components/posts/AddPostForm"
import SinglePostPage from "../../components/posts/SinglePostPage"
import EditPostForm from "../../components/posts/EditPostForm"
import UsersList from "../../components/users/UsersList"
import UserPage from "../../components/users/UserPage"
import Card from "../../components/card/Card"
import CustomerSignup from "../../components/customerSignup/CustomerSignup"
import Typing from "../../components/typing/Typing"

// Theme
// import theme from "../../hooks/UseTheme"

const HomePage = (props) => {
  return (
    <HomePageStyled>
      <Header />

      <Main>
        {/* <Hero></Hero> */}
        <Routes>
          <Route
            path="signup"
            element={
              <>
                <CustomerSignup />
                <CustomerSignup />
              </>
            }
          />
          <Route path="/" element={<Typing />} />
          <Route path="counter" element={<Counter />} />
          <Route path="postslist" element={<PostsList />} />
          <Route path="addpostform" element={<AddPostForm />} />
          <Route path="posts/:postId" element={<SinglePostPage />} />
          <Route path="editpost/:postId" element={<EditPostForm />} />
          <Route path="card" element={<Card>Button</Card>} />
          <Route exact path="users" element={<UsersList />} />
          <Route exact path="users/:userId" element={<UserPage />} />
          <Route
            path="*"
            element={
              <div style={{}}>
                <p>There's nothing here!</p>
              </div>
            }
          />
        </Routes>

        <Outlet />
        {/* <button onClick={onClickHandler}>Switch Theme? CLick me!</button> */}
        {/* <Right></Right> */}
      </Main>
      <Footer />
    </HomePageStyled>
  )
}

export default HomePage