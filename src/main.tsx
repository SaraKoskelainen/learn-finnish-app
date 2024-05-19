import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  ChakraProvider, extendTheme
} from '@chakra-ui/react'

const colors = {
  brand: {
    'base-dark': '#805AD5',
    'base-light': '#D6BCFA',
    'correct-dark': '#285E61',
    'correct-light': '319795',
    'wrong-dark': '#C53030',
    'wrong-light': '#F56565',
  },
}

const theme = extendTheme({colors})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
