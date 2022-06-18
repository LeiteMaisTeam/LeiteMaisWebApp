import React from 'react'
import ThemeProvider from './theme'

export const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
