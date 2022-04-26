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

const HomePage = (props) => {
  const [number, setNumber] = useState(0)

  const onClickHandler = (e) => {
    props.setSwitchTheme((p) => !p)
    console.log("theme button clicked")
  }
  return (
    <HomePageStyled>
      <Header number={number} />

      <Main>
        {/* <Hero></Hero> */}
        <Routes>
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
              <main style={{}}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

        <Outlet />
        <button onClick={onClickHandler}>Switch Theme? CLick me!</button>
        {/* <Right></Right> */}
      </Main>

      <Footer />
    </HomePageStyled>
  )
}

export default HomePage
