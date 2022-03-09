import "../App.css"
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import MyBooksPage from "./MyBooksPage"
import AllBooksPage from "./MyBooksPage"

function App() {
  return (
    <div>
      Hello from app
      <NavBar />
      <Routes>
        <Route exact path="/" component={AllBooksPage} />
        <Route path="/mybooks" component={MyBooksPage} />
      </Routes>
    </div>
  )
}

export default App
