import React from "react"

// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// HOF Components
import HomePageLayout from "./layout/HomePage/HomePage"
import Counter from "./components/counter/Counter"
import PostsList from "./components/posts/PostsList"
import AddPostForm from "./components/posts/AddPostForm"
import SinglePostPage from "./components/posts/SinglePostPage"
import EditPostForm from "./components/posts/EditPostForm"
import UsersList from "./components/users/UsersList"
import UserPage from "./components/users/UserPage"
import Card from "./components/card/Card"

const App = () => {
  return (
    <HashRouter>
      <HomePageLayout>
        <Routes>
          <Route exact path="/" element={<div>Hi</div>}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/postslist" element={<PostsList />}></Route>
          <Route path="/addpostform" element={<AddPostForm />}></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />}></Route>
          <Route path="/editpost/:postId" element={<EditPostForm />}></Route>
          <Route path="/card" element={<Card>Button</Card>}></Route>
          <Route exact path="/users" element={<UsersList />} />
          <Route exact path="/users/:userId" element={<UserPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </HomePageLayout>
    </HashRouter>
  )
}

export default App
