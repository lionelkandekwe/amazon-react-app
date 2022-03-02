import React, { useEffect } from "react"
import Header from "./Layouts/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import Payment from "./components/Payment"
import Login from "./components/Login"
import Orders from "./components/Orders"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import { auth } from "./firebase"
import { useStateValue } from "./components/StateProvider"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  "pk_test_51KWhk0KCz8CsU1CN8mJHyVqMdAOB26J172Ue3XEr4eDvVsYMbmJ9pM1ftcjFl4zzb1Z0F5ZN7emcGqginvDnbO3000oVE8i6vp"
)

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
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
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
