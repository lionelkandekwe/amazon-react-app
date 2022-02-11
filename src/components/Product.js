import React from "react"
import "../Assets/Styles/Product.css"
const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>11.96</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
