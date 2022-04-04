import React from "react"

// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// HOF Components
import Layout from "./layout"
import Body from "./components/Body"
import Counter from "./components/Counter"
import PostsList from "./components/PostsList"
import AddPostForm from "./components/AddPostForm"
import SinglePostPage from "./components/SinglePostPage"
import EditPostForm from "./components/EditPostForm"

//pages
// import Page1 from "./pages/page1"

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" exact index element={<Body />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/postslist" element={<PostsList />}></Route>
          <Route path="/addpostform" element={<AddPostForm />}></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />}></Route>
          <Route path="/editpost/:postId" element={<EditPostForm />}></Route>
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
