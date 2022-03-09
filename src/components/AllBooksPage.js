import { useEffect } from "react"

function AllBooksPage() {
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((r) => r.json())
      .then((r) => console.log(r))
  }, [])

  return <div>AllBooksPage</div>
}

export default AllBooksPage
