import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hook from './hooks.jsx'
import Hook3 from './hooks2.jsx'
import Hook4 from './hooks3.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Hook4 />
  </StrictMode>,
)
