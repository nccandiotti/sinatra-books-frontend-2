import React from "react";

function BookCard({title, description, image}) {
  return (
    
    <li>
      <h4>{title}</h4>
      <img src={image} alt={title}/>
      <p>{description}</p>
      <button>Order</button>
    </li>
    
  )
}

export default BookCard