import React from "react"
import MyBookCard from "./MyBookCard"

function MyBooksContainer({ myBooks }) {
  const createMyBooksCards = myBooks.map((book) => (
    <MyBookCard
      user_id={book.user_book_id}
      key={book.user_book_id}
      book={book}
    />
  ))
  return <div>{createMyBooksCards}</div>
}

export default MyBooksContainer
