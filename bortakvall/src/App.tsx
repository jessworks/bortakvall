import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import './App.css'
import { CartContextProvider } from './context/cartContext'


function App() {
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App