import React from "react"
import { NavLink } from "react-router-dom"
import "../App.css"

function NavBar() {
  return (
    <header>
      <NavLink className="nav-li" to="/">
        Home
      </NavLink>
      <NavLink className="nav-li" to="/marketplace">
        | Marketplace |
      </NavLink>
      <NavLink className="nav-li" to="/mybooks">
        My Books
      </NavLink>
    </header>
  )
}

export default NavBar
