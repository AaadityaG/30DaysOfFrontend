import React from 'react'
import { useState } from 'react';
import './Mode.css'

const Mode = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!isDarkMode);
    };


    return (
        <div className={`light-dark-mode ${isDarkMode ? 'dark' : 'light'}`} >
            <div className="container">
                <h1>Hello World!</h1>
                <button onClick={toggleMode}  className={`${isDarkMode ? 'dark' : 'light'}`}>{isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}</button>
            </div>
        </div>
    )
}

export default Mode
