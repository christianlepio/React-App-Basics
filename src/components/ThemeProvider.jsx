import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext'

//create a ThemeProvider component handles all children and state globally.
//all states/functions that is inside this ThemeProvider component will be accessible 
//by the children/other component.
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('btn-outline-info');

    const toggleTheme =()=>{
        setTheme((prevTheme)=>(prevTheme === 'btn-outline-info' ? 'btn-dark' : 'btn-outline-info'));
    }

    return (
        //pass all state/function that you want to be accessible globally to ThemeContext
        <ThemeContext.Provider 
            value={{theme, toggleTheme}}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider