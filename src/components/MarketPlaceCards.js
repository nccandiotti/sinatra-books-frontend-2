import React from "react"

function MarketPlaceCards(available, description, book) {
  return (
    <>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button>Claim this book</button>
    </>
  )
}

export default MarketPlaceCards
