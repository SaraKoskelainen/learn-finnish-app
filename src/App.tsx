import './App.css'
import TaskSelectCorrectOption from './features/taskSelectCorrectOption'
import {Heading} from '@chakra-ui/react'

function App() {

  return (
    <>
      <Heading as='h1' fontSize="4xl" color="brand.base-dark" p={4}> Opi suomea - Learn Finnish</Heading>
      <TaskSelectCorrectOption/>
      </>
  )
}

export default App
