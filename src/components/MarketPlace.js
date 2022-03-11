import React from "react"
import MarketPlaceCards from "./MarketPlaceCards"

function MarketPlace({
  handleAvailabilityUpdate,
  currentUser,
  availableBooks,
  deleteBookFromMarketPlace,
}) {
  console.log(availableBooks)
  const createMarketPlaceCards = availableBooks.map((book) => (
    <MarketPlaceCards
      key={book.id}
      book={book}
      deleteBookFromMarketPlace={deleteBookFromMarketPlace}
      currentUser={currentUser}
      handleAvailabilityUpdate={handleAvailabilityUpdate}
    />
  ))
  return (
    <>
      <h1>Shop Marketplace</h1>
      {createMarketPlaceCards}
    </>
  )
}

export default MarketPlace
