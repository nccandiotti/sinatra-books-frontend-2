import React from "react"

function BookCard({
  onAddClick,
  orderBook,
  id,
  title,
  description,
  image,
  currentUser,
}) {
  function handleClick() {
    orderBook({ book: { id: id, title: title, image: image } })
    fetch("http://localhost:9292/mybooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ book_id: id, user_id: currentUser.id }),
    }).then((r) => r.json())
  }

  return (
    <li className="cards-list ">
      <img src={image} alt={title} onClick={onAddClick} />
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={handleClick}>Order</button>
    </li>
  )
}

export default BookCard
