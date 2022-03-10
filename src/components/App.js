import "../App.css"
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import Home from "./Home"
import MyBooksPage from "./MyBooksPage"
import MarketPlace from "./MarketPlace"

function App() {
  // current user (hardcoded as second in backend)
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    fetch("http://localhost:9292/currentuser")
      .then((r) => r.json())
      .then(setCurrentUser)
  }, [])

  //homepage - all books
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((r) => r.json())
      .then(setBooks)
  }, [])
  // my books

  useEffect(() => {
    // fetch(`http://localhost:9292/mybooks/${id}`)
    fetch(`http://localhost:9292/mybooks`)
      .then((res) => res.json())
      .then(setMyBooks)
  }, [])
  const [myBooks, setMyBooks] = useState([])

  function handleAvailabilityUpdate(bookId) {
    const array = myBooks.map((book) => {
      if (book.book.id === bookId) {
        return { ...book, available: !book.available }
      } else {
        return book
      }
    })
    setMyBooks(array)
  }

  //all available books - market place
  const [availableBooks, setAvailableBooks] = useState([])
  useEffect(() => {
    fetch(`http://localhost:9292/availablebooks`)
      .then((res) => res.json())
      .then(setAvailableBooks)
  }, [])
  // console.log(availableBooks)

  // order book from store
  function orderBook(book) {
    setMyBooks([...myBooks, book])
  }

  // claim book from marketplace
  function deleteBookFromMarketPlace(bookObjId) {
    const updatedArray = availableBooks.filter(
      (book) => book.id !== bookObjId
      )
    setAvailableBooks(updatedArray)
  }
  return (
    <div>
       <h5>
        <em>Welcome back, {currentUser.name}!</em>
      </h5>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              handleAvailabilityUpdate={handleAvailabilityUpdate}
              books={books}
              orderBook={orderBook}
              myBooks={myBooks}
              setMyBooks={setMyBooks}
              currentUser={currentUser}
            />
          }
        />
        <Route
          exact
          path="/marketplace"
          element={
            <MarketPlace
              deleteBookFromMarketPlace={deleteBookFromMarketPlace}
              availableBooks={availableBooks}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/mybooks"
          element={
            <MyBooksPage
              myBooks={myBooks}
              handleAvailabilityUpdate={handleAvailabilityUpdate}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
