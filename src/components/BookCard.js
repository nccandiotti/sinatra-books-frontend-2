import React from "react"

function BookCard({ onAddClick, orderBook, id, title, description, image, currentUser }) {
  // onclick has to update the myBooks array w/orderbooks fx
  // onclick creates a new book instance of user_book for a given user - need

  function handleClick() {
    console.log(title)
    const params = {
      book: { id: id, title: title, description: description, image: image },
    }
    fetch("http://localhost:9292/mybooks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    }).then((r) => r.json())
  }

  return (
    <li className="cards-list ">
      <img 
        width="200px" 
        height="200px" 
        src={image} alt={title} 
        onClick={onAddClick}
        />
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={handleClick}>Order</button>
    </li>
  )
}

export default BookCard
