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
          <Product
            id="12213144124"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={11.96}
            rating={5}
          />
          <Product
            id="1917370330"
            title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel"
            image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY436_FMwebp_QL65_.jpg"
            price={290.96}
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="80918903810"
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Silver"
            image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_UL640_FMwebp_QL65_.jpg"
            price={120.96}
            rating={5}
          />
          <Product
            id="80765511234"
            title="Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked (Renewed Premium)"
            image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY436_FMwebp_QL65_.jpg"
            price={290.96}
            rating={5}
          />
          <Product
            id="7120361230"
            title="PS5 Fan Cooling Fan, KIWIHOME PS5 Cooling Fan with LED Light, Upgraded Quiet Cooler Fan with 3 Fans "
            image="https://m.media-amazon.com/images/I/71qGOF1nK0L._AC_UY436_FMwebp_QL65_.jpg"
            price={598.12}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="81831678190"
            title="SAMSUNG 75-Inch Class QLED Q80A Series - 4K UHD Direct Full Array Quantum HDR 12x Smart TV with Alexa Built-in and 6 Speaker Object Tracking Sound - 60W, 2.2.2CH (QN75Q80AAFXZA, 2021 Model)"
            image="https://m.media-amazon.com/images/I/71ihMv1q-kL._AC_UY436_FMwebp_QL65_.jpg"
            price={499.12}
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
