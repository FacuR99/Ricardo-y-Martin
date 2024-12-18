import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/Home'
import Characters from './pages/characters/Character.jsx'
import Contact from './pages/contact/Contact'
import './index.css'
import RouSite from "./routes.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouSite></RouSite>
  </StrictMode>
)
