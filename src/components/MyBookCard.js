import React from "react"

function MyBookCard({ handleAvailabilityUpdate, user_id, book }) {
  const updateAvailability = () => {
    handleAvailabilityUpdate(book.book.id)
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
    <>
      <h4>{book.book.title}</h4>
      <img
        width="200px"
        height="200px"
        src={book.book.image}
        alt={book.book.title}
      />
      <p>{book.book.description}</p>
      {book.available ? (
        <button className="not available" onClick={updateAvailability}>
          Add to MarketPlace
        </button>
      ) : (
        <button className="available" onClick={updateAvailability}>
          Remove from MarketPlace
        </button>
      )}
    </>
  )
}

export default MyBookCard
