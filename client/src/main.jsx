import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { SavedVideosProvider } from './context/SavedVideosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SavedVideosProvider>
        <App />
      </SavedVideosProvider>
      </ThemeProvider>
  </StrictMode>,
)
