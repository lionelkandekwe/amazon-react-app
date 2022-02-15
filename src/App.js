import Header from "./Layouts/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import Login from "./components/Login"
import { Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
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
