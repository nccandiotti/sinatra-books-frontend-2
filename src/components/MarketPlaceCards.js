import { useState } from "react"
import Grid from "@mui/material/Grid"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import Button from "@mui/material/Button"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"

function MarketPlaceCards({
  handleAvailabilityUpdate,
  deleteBookFromMarketPlace,
  currentUser,
  book,
}) {
  const [showDescription, setShowDescription] = useState(true)
  const toggleCover = () => setShowDescription((prevState) => !prevState)
  function flipCover() {
    toggleCover()
  }
  function handleClick() {
    deleteBookFromMarketPlace(book.id)
    handleAvailabilityUpdate(book.id)
    fetch(`http://localhost:9292/availablebooks/${book.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: currentUser.id,
        available: !book.available,
      }),
    }).then((r) => r.json())
    // .then((r) => console.log(r))
  }

  return (
    <Grid item xs={3}>
      {book.available ? (
        <div className="book">
          {showDescription ? (
            <img
              className="book-description"
              onClick={handleClick}
              src={book.book.image}
              alt={book.book.title}
            />
          ) : (
            <div className="book-description">
              <p>{book.book.description}</p>
            </div>
          )}
          <Button
            size="large"
            className="button"
            onClick={handleClick}
            startIcon={
              <ShoppingCartOutlinedIcon style={{ color: "#448AFF" }} />
            }
          ></Button>
          <Button onClick={flipCover}>
            <MenuBookOutlinedIcon
              HomeIcon
              style={{ color: "#448AFF" }}
              size="large"
            />
          </Button>
        </div>
      ) : null}
    </Grid>
  )
}

export default MarketPlaceCards
