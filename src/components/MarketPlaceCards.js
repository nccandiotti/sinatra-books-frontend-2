import React from "react"

function MarketPlaceCards({ currentUser, claimBookFromMarketPlace, book }) {
  // patch request -
  function handleClick() {
    console.log("claim book  click")
    claimBookFromMarketPlace(book)

    fetch("https//:localhost/9292/mybooks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        available: false,
        user_id: currentUser.id,
      }),
    }).then((r) => r.json)
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
