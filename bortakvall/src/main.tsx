import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartContextProvider } from './context/cartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>,
)
