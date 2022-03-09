import "../App.css"
import { Route, BrowserRouter } from "react-router-dom"
import { useEffect, useState } from "react"

function App() {
  useEffect(() => {
    fetch("http://localhost:6001/books")
      .then((response) => response.json())
      .then((response) => console.log(response))
  }, [])

  return <div>Hello from app</div>
}

export default App
