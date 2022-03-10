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

  console.log(currentUser)

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

  // make mybook available to marketplace (in mybookcard component)
  function addBookToMarketplace(book) {}

  // claim book from marketplace
  function claimBookFromMarketPlace(bookObj) {
    const updatedArray = availableBooks.map((book) => (book = !bookObj.id))
    setAvailableBooks(updatedArray)
  }
  return (
    <div>
      <NavBar />
      <h3>
        <em>Welcome back, {currentUser.name}!</em>
      </h3>
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
              claimBookFromMarketPlace={claimBookFromMarketPlace}
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
