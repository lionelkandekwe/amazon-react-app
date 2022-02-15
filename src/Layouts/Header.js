import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Link } from "react-router-dom"
import "../Assets/Styles/Header.css"
import { useStateValue } from "../components/StateProvider"

const Header = () => {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header_option">
            <span className="header_optionLineTwo header_cartCount">
              {basket?.length}
            </span>
            <ShoppingCartIcon className="header_optionShoppingCart" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
