import "../App.css"
import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import NavBar from "./NavBar"
import Home from "./Home"
import MyBooksPage from "./MyBooksPage"
import AllBooksPage from "./MyBooksPage"

function App() {
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((r) => r.json())
      .then((r) => console.log(r))
  }, [])
  return (
    <div>
      Hello from app
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books" element={<AllBooksPage />} />
        <Route path="/mybooks" element={<MyBooksPage />} />
      </Routes>
    </div>
  )
}

export default App
