import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carta from './pages/carta/carta.jsx'
import Textcarta from './pages/carta/textCarta/textcarta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/carta" element={<Carta />} />
      <Route path="/text-carta" element={<Textcarta />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
