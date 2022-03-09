import { useEffect } from "react"

// need to figure out how to interpolate id based on current user
// const id =

function MyBooksPage() {
  useEffect(() => {
    fetch(`http://localhost:9292/mybooks/23`)
      .then((res) => res.json())
      .then((r) => console.log(r))
  }, [])
  return <div>Hello from My Books Page</div>
}

export default MyBooksPage
