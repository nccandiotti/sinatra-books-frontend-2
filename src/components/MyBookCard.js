import { useState } from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import LoyaltyIcon from "@mui/icons-material/Loyalty"

function MyBookCard({
  updateMarketPlaceArray,
  handleAvailabilityUpdate,
  user_id,
  book,
}) {
  const [showDescription, setShowDescription] = useState(true)
  const toggleCover = () => setShowDescription((prevState) => !prevState)

  const updateAvailability = () => {
    handleAvailabilityUpdate(book.book.id)
    updateMarketPlaceArray(book.book.id)
    fetch(`http://localhost:9292/mybooks/${user_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        available: !book.available,
      }),
    }).then((res) => res.json())
  }

  return (
    <Grid item xs={3}>
      {showDescription ? (
        <img
          className="book-description"
          src={book.book.image}
          alt={book.book.title}
        />
      ) : (
        <div className="book-description">
          <p>{book.book.description}</p>
        </div>
      )}
      {book.available ? (
        <Button
          startIcon={<RemoveShoppingCartIcon color="error" sx="large" />}
          className="button"
          onClick={updateAvailability}
          style={{ color: "white" }}
        >
          Remove from MarketPlace
        </Button>
      ) : (
        <Button
          startIcon={<LoyaltyIcon hover="none" color="success" sx="large" />}
          className="button"
          onClick={updateAvailability}
          style={{ color: "white" }}
        >
          Add to MarketPlace
        </Button>
      )}
    </Grid>
  )
}

export default MyBookCard
