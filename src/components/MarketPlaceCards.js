import React from "react"

function MarketPlaceCards({ available, description, book }) {
  console.log(book)
  return (
    <>
      <h1>{book.book.title}</h1>
      <img
        width="200px"
        height="200px"
        src={book.book.image}
        alt={book.book.title}
      />
      <p>{book.description}</p>
      <button>Claim this book</button>
    </>
  )
}

export default MarketPlaceCards
