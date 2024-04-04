import './App.css'
import HomePage from './pages/HomePage/HomePage';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </>
  )
}

export default App
