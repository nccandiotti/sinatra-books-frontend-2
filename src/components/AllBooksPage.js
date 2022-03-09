import { useEffect, useState } from "react"
import AllBooksContainer from "./AllBooksContainer"

function AllBooksPage() {
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((r) => r.json())
      .then((r) => console.log(r))
  }, [])

  

  //   const [allBooksArray, setAllBooks] = useState([])
  //   console.log(allBooksArray)

  return (
    <div>
      <AllBooksContainer books />
    </div>
  )
}

export default AllBooksPage
