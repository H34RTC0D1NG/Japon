import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,

) 