import React from "react"
import MyBookCard from "./MyBookCard"
import Grid from "@mui/material/Grid"

function MyBooksContainer({
  updateMarketPlaceArray,
  handleAvailabilityUpdate,
  myBooks,
}) {
  const createMyBooksCards = myBooks.map((book) => (
    <MyBookCard
      updateMarketPlaceArray={updateMarketPlaceArray}
      user_id={book.user_book_id}
      key={book.user_book_id}
      book={book}
      handleAvailabilityUpdate={handleAvailabilityUpdate}
    />
  ))
  return (
    <Grid container spacing={5}>
      {createMyBooksCards}
    </Grid>
  )
}

export default MyBooksContainer
