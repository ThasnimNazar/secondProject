import './App.css'
import Header from './components/Header'
import Homescreen from './Screens/Homescreen'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

function App() {

  return (
    <>
    <ChakraProvider>
      <Homescreen/>
    </ChakraProvider>
    </>
  )
}

export default App
