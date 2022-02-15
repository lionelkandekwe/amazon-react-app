import React, { useEffect } from "react"
import Header from "./Layouts/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import Login from "./components/Login"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import { auth } from "./firebase"
import { useStateValue } from "./components/StateProvider"

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>> ", authUser)
      if (authUser) {
        // user loggedin
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  return (
    <div className="app">
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
