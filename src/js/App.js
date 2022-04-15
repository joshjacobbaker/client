import React from "react"

// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// HOF Components
import Layout from "./layout"
import Body from "./components/Body"
import Counter from "./components/counter/Counter"
import PostsList from "./components/posts/PostsList"
import AddPostForm from "./components/posts/AddPostForm"
import SinglePostPage from "./components/posts/SinglePostPage"
import EditPostForm from "./components/posts/EditPostForm"
import UsersList from "./components/users/UsersList"
import UserPage from "./components/users/UserPage"

// Page Components

import Admin from "./pages/Admin"

//pages
// import Page1 from "./pages/page1"

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route exact index path="/" element={<Body />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/postslist" element={<PostsList />}></Route>
          <Route path="/addpostform" element={<AddPostForm />}></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />}></Route>
          <Route path="/editpost/:postId" element={<EditPostForm />}></Route>
          <Route exact path="/users" element={<UsersList />} />
          <Route exact path="/users/:userId" element={<UserPage />} />
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
