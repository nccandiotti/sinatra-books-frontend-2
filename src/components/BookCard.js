// import { useState } from "react"
import Card from "@mui/material/Paper"
import "../App.css"
import Button from "@mui/material/Button"

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
    <Card
      style={{ backgroundImage: "url(./image/bookstore)" }}
      variant="outlined"
    >
      <img src={image} alt={title} />
      <Button className="button" onClick={handleClick}>
        Order
      </Button>
    </Card>
  )
}

export default BookCard
