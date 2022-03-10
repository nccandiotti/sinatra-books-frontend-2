import React from "react"
import BookCard from "./BookCard"

function Home({ books, orderBook, myBooks, setMyBooks }) {
  const bookCards = books.map((book) => (
    <BookCard
      key={book.id}
      id={book.id}
      title={book.title}
      description={book.description}
      image={book.image}
      orderBook={orderBook}
      myBooks={myBooks}
      setMyBooks={setMyBooks}
    />
  ))
  return <ul>{bookCards}</ul>
}

export default Home
