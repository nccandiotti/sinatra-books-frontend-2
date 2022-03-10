import React from "react"
import { NavLink } from "react-router-dom"
import "../App.css"

function NavBar({ currentUser }) {
  return (
    <header>
      <NavLink className="nav-li" to="/">
        Home
      </NavLink>
      <NavLink className="nav-li" to="/marketplace">
        | Shop Marketplace |
      </NavLink>
      <NavLink className="nav-li" to="/mybooks">
        My books
      </NavLink>
      {/* <h2>{currentUser.name}</h2> */}
    </header>
  )
}

export default NavBar
