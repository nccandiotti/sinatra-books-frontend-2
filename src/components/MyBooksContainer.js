import React from "react"
import MyBookCard from "./MyBookCard"

function MyBooksContainer({ myBooks }) {
  const createMyBooksCards = myBooks.map((book) => (
    <MyBookCard key={book.book.id} book={book} />
  ))
  return <div>{createMyBooksCards}</div>
}

export default MyBooksContainer
