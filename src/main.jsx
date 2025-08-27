import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookingPage from './Components/BookingPage.jsx'
import Tickets from './Components/Tickets.jsx'
import Stages from './Components/Stages.jsx'
import Hero from './Components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Hero />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/stages" element={<Stages />} />
      <Route path="/tickets" element={<Tickets />} />
    </Routes>
  </StrictMode>
  </BrowserRouter>
)
