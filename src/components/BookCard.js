// import { useState } from "react"
import Card from "@mui/material/Paper"
import "../App.css"

function BookCard({ orderBook, id, title, description, image, currentUser }) {
  function handleClick() {
    orderBook({ book: { id: id, title: title, image: image } })
    fetch("http://localhost:9292/mybooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ book_id: id, user_id: currentUser.id }),
    }).then((r) => r.json())
  }

  return (
    <Card className="MuiCard" variant="outlined">
      <img src={image} alt={title} />

      <button className="button" onClick={handleClick}>
        Order
      </button>
    </Card>
  )
}

export default BookCard
