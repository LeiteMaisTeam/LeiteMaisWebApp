import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  exemplo: {
    100: '#2C5282'
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`
  }
}

const theme = extendTheme({ colors })

function ThemeProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemeProvider
