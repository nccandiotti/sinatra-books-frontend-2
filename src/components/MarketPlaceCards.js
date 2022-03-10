import React from "react"

function MarketPlaceCards({ currentUser, deleteBookFromMarketPlace, book }) {
  // patch request -
  function handleClick() {
    // deleteBookFromMarketPlace(book.id)

    fetch(`http://localhost:9292/availablebooks/${book.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentUser.id,
        availability: false,
      }),
    }).then((r) => r.json())
    deleteBookFromMarketPlace(book.id)
  }
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
      <button onClick={handleClick}>Claim this book</button>
    </>
  )
}

export default MarketPlaceCards
