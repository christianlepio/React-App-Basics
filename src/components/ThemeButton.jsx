import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeButton = () => {
    //this is destructuring and fetching state/function from ThemeContext using 
    //useContext() react hook.
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <>
            <h3>Theme {theme === 'btn-outline-info' ? 'is in light mode.' : 'is in dark mode.'}</h3>
            <button className={'btn '+theme} onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}

export default ThemeButton