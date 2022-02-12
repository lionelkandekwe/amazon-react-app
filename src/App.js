import Header from "./Layouts/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import { Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
