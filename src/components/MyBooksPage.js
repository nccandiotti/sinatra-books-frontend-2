import { useEffect, useState } from "react"
import MyBooksContainer from "./MyBooksContainer"

function MyBooksPage({ myBooks, handleAvailabilityUpdate }) {
  return (
    <div>
      <MyBooksContainer
        myBooks={myBooks}
        handleAvailabilityUpdate={handleAvailabilityUpdate}
      />
    </div>
  )
}

export default MyBooksPage

// localStorage.setItem("user_id", user_from_login_form.id)
//let id = localStorage.getItem("user_id")
