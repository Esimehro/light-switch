import React, { useState } from 'react'
import Container from './Container';
import DarkModeContext from './DarkModeContext';

function DarkModeApp  () {
  const [darkMode, setDarkMode] = useState(false);

  //function for changinging the darkmode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div>
      {/* passing in the darkmode value and function for changing dark mode into the parent value */}
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        <Container />
      </DarkModeContext.Provider>
    </div>
  )
}

export default DarkModeApp;
