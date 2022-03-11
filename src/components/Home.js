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
        onAddClick={handleAddBooks}
        books={books}
      />
    ))

  function handleAddBooks() {
    setIndex((index) => (index + 1) % books.length)
  }

  return (
    <>
      <h2>Click Below to Shop Our Books</h2>
      <ul>{bookCards}</ul>
    </>
  )
}

export default Home
