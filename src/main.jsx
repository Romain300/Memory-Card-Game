import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DisplayCard from './components/displayCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayCard/>
  </StrictMode>,
)
