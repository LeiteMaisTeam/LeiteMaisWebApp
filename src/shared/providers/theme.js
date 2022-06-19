import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    500: '#2C5282'
  },
  colorScheme: {
    blue: 'red'
  },
  fonts: {
    default: 'Raleway',
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`
  }
}

const theme = extendTheme({ colors })

function ThemeProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemeProvider
