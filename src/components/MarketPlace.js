import React from "react"
import MarketPlaceCards from "react"

function MarketPlace({ availableBooks }) {
  createMarketPlaceCards = availableBooks.map((book) => (
    <MarketPlaceCards
      key={book.id}
      available={book.available}
      book={book.book}
      description={book.description}
    />
  ))
  return (
    <>
      <h1>Market Place</h1>
      {CreateMarketPlaceCards}
    </>
  )
}

export default MarketPlace
