import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  addToSaved: () => {},
  removeFromSaved: () => {},
})

export default ThemeContext
