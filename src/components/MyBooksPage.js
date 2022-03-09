import { useEffect } from "react"

// need to figure out how to interpolate id based on current user
// const id =

function MyBooksPage() {
  
  
  useEffect(() => {
   // fetch(`http://localhost:9292/mybooks/${id}`)
   fetch(`http://localhost:9292/mybooks`)
      .then((res) => res.json())
      .then((r) => console.log(r))
  }, [])
  return <div>Hello from My Books Page</div>
}

export default MyBooksPage



// localStorage.setItem("user_id", user_from_login_form.id)
//let id = localStorage.getItem("user_id")