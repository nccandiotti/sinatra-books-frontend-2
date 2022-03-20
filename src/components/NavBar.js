import React from "react"
import { NavLink } from "react-router-dom"
import "../App.css"
import StorefrontIcon from "@mui/icons-material/Storefront"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import HomeIcon from "@mui/icons-material/Home"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"

function NavBar() {
  return (
    <header>
      <Button
        startIcon={
          <HomeIcon sx={{ mr: 0.5 }} size="large" style={{ color: "white" }} />
        }
      >
        <Link underline="hover" color="white" href="/">
          Home
        </Link>
      </Button>
      <Button
        startIcon={
          <StorefrontIcon
            style={{ color: "white", paddingLeft: "40px" }}
            sx={{ mr: 0.5 }}
            size="large"
          />
        }
      >
        <Link underline="hover" color="white" href="/marketplace">
          Marketplace
        </Link>
      </Button>
      <Button
        startIcon={
          <AutoStoriesIcon
            sx={{ mr: 0.5 }}
            size="large"
            style={{ color: "white", paddingLeft: "40px" }}
          />
        }
      >
        <Link underline="hover" color="white" href="/mybooks">
          My Books
        </Link>
      </Button>
    </header>
  )
}

export default NavBar
