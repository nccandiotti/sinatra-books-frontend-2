import React from "react"

function BookCard({ orderBook, id, title, description, image, currentUser }) {
  // onclick has to update the myBooks array w/orderbooks fx
  // onclick creates a new book instance of user_book for a given user - need

  function handleClick() {
    const params = {
      book: { id: id, title: title, description: description, image: image },
    }
    fetch("http://localhost:9292/mybooks", {
      method: "patch",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    }).then((r) => r.json())
  }

  return (
    <li className="cards-list ">
      <h4>{title}</h4>
      <img width="200px" height="200px" src={image} alt={title} />
      <p>{description}</p>
      <button onClick={handleClick}>Order</button>
    </li>
  )
}

export default BookCard
