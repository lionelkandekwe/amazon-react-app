import React from "react"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import "../Assets/Styles/Checkout.css"
import { useStateValue } from "./StateProvider"

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">YOUR AMAZON SHOPPING CART</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_rigth">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
