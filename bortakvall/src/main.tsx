import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartContextProvider } from './context/CartContextProvider.tsx'
import { CustomerContextProvider } from './context/CustomerContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomerContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </CustomerContextProvider>
    
  </StrictMode>,
)
