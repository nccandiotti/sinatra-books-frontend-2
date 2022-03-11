import React from "react"

function MarketPlaceCards({
  handleAvailabilityUpdate,
  deleteBookFromMarketPlace,
  currentUser,
  book,
}) {
  function handleClick() {
    deleteBookFromMarketPlace(book.id)
    handleAvailabilityUpdate(book.id)
    fetch(`http://localhost:9292/availablebooks/${book.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentUser.id,
        available: !book.available,
      }),
    })
      .then((r) => r.json())
      .then((r) => console.log(r))
  }
  return (
    <>
      {book.available ? (
        <div>
          <h2>{book.book.title}</h2>
          <img
            width="200px"
            height="200px"
            src={book.book.image}
            alt={book.book.title}
          />
          <p>{book.description}</p>
          <button onClick={handleClick}>Claim this book</button>
        </div>
      ) : null}
    </>
  )
}

export default MarketPlaceCards
