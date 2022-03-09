import "../App.css"
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import Home from "./Home"
import MyBooksPage from "./MyBooksPage"
import MarketPlace from "./MyBooksPage"

function App() {
  const [books, setBooks] = useState([])

  //homepage - all books
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

  //all available books - market place
  const [availableBooks, setAvailableBooks] = useState([])
  useEffect(() => {
    fetch(`http://localhost:9292/availablebooks`)
      .then((res) => res.json())
      .then(setAvailableBooks)
  }, [])
  // console.log(availableBooks)

  function orderBook(book) {
    setMyBooks([...myBooks, book])
  }

  return (
    <div>
      Hello from app
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              books={books}
              orderBook={orderBook}
              myBooks={myBooks}
              setMyBooks={setMyBooks}
            />
          }
        />
        <Route
          exact
          path="/marketplace"
          element={<MarketPlace availableBooks={availableBooks} />}
        />
        <Route path="/mybooks" element={<MyBooksPage myBooks={myBooks} />} />
      </Routes>
    </div>
  )
}

export default App
