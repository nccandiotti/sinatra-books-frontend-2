import React from "react"
import BookCard from "./BookCard"

function Home({books}) {
  const bookCards = books.map(book =>
    <BookCard
      key={book.id}
      title={book.title} 
      description={book.description}
      image={book.image}
     />
  )
  return (
    <ul>{bookCards}</ul>
  );
}

export default Home
