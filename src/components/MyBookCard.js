import { useState, useEffect } from "react"

function MyBookCard({ book }) {
  // OnClick need to patch availability

  //   from Controller :
  // patch '/users/:id/sell_book' do
  // UserBook.find(params[:id]).update(available: true).to_json
  // end
  const [isAvailable, setIsAvailable] = useState(false)

  const toggleAvailable = () => setIsAvailable(!isAvailable)

  const updateAvailability = () => {
    toggleAvailable()
    fetch(`http://localhost:9292/mybooks`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        available: isAvailable,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
  }
  console.log(book)
  return (
    <>
      <h4>{book.book.title}</h4>
      <img src={book.book.image} alt={book.book.title} />
      <p>{book.book.description}</p>
      {/* {book.book.availability ? "Available in MarketPlace" : "Not Available"} */}
      {isAvailable ? (
        <button onClick={updateAvailability}>Add to MarketPlace</button>
      ) : (
        <button onClick={updateAvailability}>Remove from MarketPlace</button>
      )}
    </>
  )
}

export default MyBookCard
