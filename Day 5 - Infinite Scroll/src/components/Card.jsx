import React from 'react'
import './Card.css'

const Card = ({myData}) => {
  return (
    <div className="cardd">
      <img src="https://picsum.photos/200" alt="Random" />

      <div className="card-content">
        <p>
          {
            myData.title
          }
        </p>
        
        <button>Click me</button>
      </div>
    </div>
  )
}

export default Card
