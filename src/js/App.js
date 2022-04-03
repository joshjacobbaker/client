import React from "react"

// Router
import { BrowserRouter, Routes, Route, Redirect, Outlet } from "react-router-dom"

// HOF Components
import Layout from "./layout"
import Body from "./components/Body"
import Counter from "./components/Counter"

//pages
// import Page1 from "./pages/page1"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact index element={<Body />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
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
    </BrowserRouter>
  )
}

export default App
