import React, { useEffect, useState } from 'react';
import './App.css'
import Loader from './components/Loader';
import Info from './components/Info';

function App() {

  const [card, setCard] = useState([]);

  const [page, setPage] = useState(1);

  const getCardData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8&_page=${page}`);
    const data = await res.json();
    setCard((prev) => [...prev, ...data]);
    console.log(data);
  }

  useEffect(() => {
    getCardData();
  }, [page])

  // infinite scrolling 

  async function handleScroll(){
    console.log("scrollHeight" + document.documentElement.scrollHeight);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if((window.innerHeight + document.documentElement.scrollTop + 1) >= document.documentElement.scrollHeight){
        setPage((prev) => prev + 1)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <h1>List of Cards</h1>

      <div className='wrapper'>

        <Info cardInfo={card}/>

      </div>

    </>
  )
}

export default App
