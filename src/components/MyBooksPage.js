import { useEffect, useState } from "react"
import MyBooksContainer from "./MyBooksContainer"

// need to figure out how to interpolate id based on current user
// const id =

function MyBooksPage({ myBooks, handleAvailabilityUpdate }) {
  // my books => available, rating, user_id, book (nested title, desc, etc.)
  // console.log(myBooks)

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
