import React, { useState } from "react"
import BookCard from "./BookCard"

function Home({
  books,
  orderBook,
  myBooks,
  setMyBooks,
  handleAvailabilityUpdate,
  currentUser,
}) {
  const [index, setIndex] = useState(0)
  const bookCards = books
    .slice(index, index + 1)
    .map((book) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        description={book.description}
        image={book.image}
        orderBook={orderBook}
        myBooks={myBooks}
        setMyBooks={setMyBooks}
        handleAvailabilityUpdate={handleAvailabilityUpdate}
        currentUser={currentUser}
      />
    ))
  return (
    <>
      <h1>Shop All Books</h1>
      <ul>{bookCards}</ul>
    </>
  )
}

export default Home
