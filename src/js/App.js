import React from "react"

// Router
import { HashRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// Global Styles
import GlobalStyles from "./globalStyles"
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
      <GlobalStyles />
      <Routes>
        <Route exact path="/*" element={<HomePageLayout />}>
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
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
