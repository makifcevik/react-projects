import React from 'react'
import useTheme from '../contexts/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

function ThemeButton() {

    const {themeMode, toggleTheme} = useTheme();
    
    return (
        <button onClick={toggleTheme}>
            {themeMode === "light" ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon} className='mr-1'/>}
        </button>
    )
}

export default ThemeButton
