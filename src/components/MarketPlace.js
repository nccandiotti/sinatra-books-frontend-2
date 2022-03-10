import React from "react"
import MarketPlaceCards from "./MarketPlaceCards"

function MarketPlace({
  currentUser,
  availableBooks,
  deleteBookFromMarketPlace,
}) {
  console.log(availableBooks)
  const createMarketPlaceCards = availableBooks.map((book) => (
    <MarketPlaceCards
      key={book.id}
      book={book}
      claimBookFromMarketPlace={deleteBookFromMarketPlace}
      currentUser={currentUser}
    />
  ))
  return (
    <>
      <h1>Market Place</h1>
      {createMarketPlaceCards}
    </>
  )
}

export default MarketPlace
