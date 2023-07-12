import React, { useContext } from 'react'
import DarkModeContext from './DarkModeContext'

function LightSwitch  ()  {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  }
  return (
    <div className='Lightswitch'>
      <button onClick={handleClick} className={darkMode ? `Content Content-dark` : `Container Container-light`}>Switch</button>
    </div>
  )
}

export default LightSwitch
