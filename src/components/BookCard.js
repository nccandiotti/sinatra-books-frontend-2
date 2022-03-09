import React from "react"

function BookCard({
  orderBook,
  title,
  description,
  image,
  myBooks,
  setMyBooks,
}) {
  // onclick has to update the myBooks array

  function handleClick() {
    const params = {
      book: { title: title, description: description, image: image },
    }
    console.log(params)
    fetch("http://localhost:9292/mybooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    })
      .then((r) => r.json())
      .then(setMyBooks)
  }

  return (
    <li className="cards-list">
      <h4>{title}</h4>
      <img width="200px" height="200px" src={image} alt={title} />
      <p>{description}</p>
      <button onClick={handleClick}>Order</button>
    </li>
  )
}

export default BookCard
