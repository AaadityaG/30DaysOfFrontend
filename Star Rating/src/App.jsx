import './App.css'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";


function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <>
      <h1>Star Rating</h1>
      <div className='Rating'>
        {[...Array(5)].map((star, index) => {

          const currRating = index + 1;
          // console.log(currRating)
          // console.log(rating)
          return(
            <label key={currRating}>
              <input type="radio" name="rating" value={currRating} onClick={() => setRating(currRating)}/>
              <FaStar 
                size={50} 
                className='myIcon'
                color={currRating <= (hover || rating) ? "yellow" : ""}
                onMouseEnter={() => setHover(currRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          )

        })}
        <p>Your gave a rating: {rating}</p>
      </div>
    </>
  )
}

export default App
