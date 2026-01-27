import React from 'react'
import Navbar from './componentts/Navbar'
import ThemeProvider from './contexts/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  )
}

export default App