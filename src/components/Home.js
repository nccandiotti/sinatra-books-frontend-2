import React, { useState } from "react"
import BookCard from "./BookCard"
import Carousel from "react-material-ui-carousel"

function Home({
  books,
  orderBook,
  myBooks,
  setMyBooks,
  handleAvailabilityUpdate,
  currentUser,
}) {
  return (
    <>
      <h2 style={{ fontSize: "15px" }}>
        <em>
          BookPlace, your one stop shop to buy, trade, and organize your books
        </em>
      </h2>

      <Carousel
        style={{ backgroundImage: "url(./image/bookstore)" }}
        interval="3000"
        animation="fade"
        duration="2000ms"
        // style={{ width: "80%" }}
        fullHeightHover={true}
        navButtonsProps={{
          style: {
            backgroundColor: "cornflowerblue",
            borderRadius: 0,
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            bottom: "0",
            top: "unset",
          },
        }}
        // NextIcon="next" // Change the "inside" of the next button to "next"
        // PrevIcon="prev" // Change the "inside of the prev button to "prev"
      >
        {books.map((book) => (
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
            books={books}
          />
        ))}
      </Carousel>
    </>
  )
}

export default Home
