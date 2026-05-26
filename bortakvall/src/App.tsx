import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import './styles/index.scss';


function App() {
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App