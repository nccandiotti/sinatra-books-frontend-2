import React from "react"

function MarketPlaceCards({ currentUser, claimBookFromMarketPlace, book }) {
  console.log(book.id)
  // console.log(book)
  // patch request -
  function handleClick() {
    // claimBookFromMarketPlace(book)

    fetch(`http://localhost:9292/mybooks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_book_id: book.id,
        book: {
          title: book.book.title,
          description: book.book.description,
          image: book.book.image,
        },
      }),
    })
      .then((r) => r.json())
      .then((r) => console.log(r))

    // fetch(`http://localhost:9292/availablebooks/${book.id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     user_id: currentUser.id,
    //   }),
    // }).then((r) => r.json)
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
