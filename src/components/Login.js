import React from "react"
import { Link } from "react-router-dom"
import "../Assets/Styles/Login.css"

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login_signinButton">Sign In</button>

          <p>
            By signing-in you agree to the Amazon React Application Conditions
            of Use & Sale.Please see our Privacy Notice,our Cookies Notice and
            our Interest-Based Ads Notice.
          </p>
          <button className="login_registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login