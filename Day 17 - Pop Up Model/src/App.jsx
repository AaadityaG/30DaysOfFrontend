import './App.css'
import { useState } from 'react';
import Popup from './Popup'


function App() {
  const [show, setShowModal] = useState(false);

  return (
    <>
      <div className='relative w-full bg-gradient-to-r from-[#ad0646] to-[#ff5757] h-screen flex items-center justify-center text-[white]'>
        <Popup />
      </div>
    </>
  )
}

export default App
