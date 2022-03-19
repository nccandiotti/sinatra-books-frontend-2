import { useState } from "react"
import Grid from "@mui/material/Grid"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import ToggleButton from "@mui/material/ToggleButton"
import Button from "@mui/material/Button"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"

function MarketPlaceCards({
  handleAvailabilityUpdate,
  deleteBookFromMarketPlace,
  currentUser,
  book,
}) {
  const [selected, setSelected] = useState(false)
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
        <div>
          {/* <h2>{book.book.title}</h2> */}
          <img
            onClick={handleClick}
            width="200px"
            height="200px"
            src={book.book.image}
            alt={book.book.title}
          />
          <p>{book.description}</p>
          <Button
            size="large"
            className="button"
            onClick={handleClick}
            startIcon={
              <ShoppingCartOutlinedIcon style={{ color: "#448AFF" }} />
            }
          ></Button>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected)
            }}
          >
            <MenuBookOutlinedIcon
              HomeIcon
              style={{ color: "#448AFF" }}
              fontSize="small"
            />
          </ToggleButton>
        </div>
      ) : null}
    </Grid>
  )
}

export default MarketPlaceCards
