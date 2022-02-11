import React from "react"
import Product from "../components/Product"
import "../Assets/Styles/Home.css"
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home
