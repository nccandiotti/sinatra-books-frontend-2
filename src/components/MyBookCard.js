import { useState, useEffect } from "react"

function MyBookCard({ handleAvailabilityUpdate, user_id, book, id }) {
  // OnClick need to patch availability

  //   from Controller :
  // patch '/users/:id/sell_book' do
  // UserBook.find(params[:id]).update(available: true).to_json
  // end
  // const [isAvailable, setIsAvailable] = useState(false)
  console.log(book.available)

  // function toggleAvailable() {
  //   setIsAvailable((prevState) => !prevState)
  // }

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
  // console.log(book)
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
      {/* {book.book.availability ? "Available in MarketPlace" : "Not Available"} */}
      {book.available ? (
        <button onClick={updateAvailability}>Add from MarketPlace</button>
      ) : (
        <button onClick={updateAvailability}>Remove to MarketPlace</button>
      )}
    </>
  )
}

export default MyBookCard
