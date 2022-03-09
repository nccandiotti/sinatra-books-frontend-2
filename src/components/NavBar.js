import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <header>
      <NavLink to="/"></NavLink>
      <NavLink to="/books"></NavLink>
      <NavLink to="/mybooks"></NavLink>
    </header>
  )
}

export default NavBar
