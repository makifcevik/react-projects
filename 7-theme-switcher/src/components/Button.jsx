import React from 'react'
import useTheme from '../contexts/theme';

function Button() {

    const {themeMode, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}
            className='bg-blue-700 p-3 rounded-lg text-white font-semibold hover:bg-blue-800 mt-5 mx-12'
        >
            Toggle Theme
        </button>

    )
}

export default Button
