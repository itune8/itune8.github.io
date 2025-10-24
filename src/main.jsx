import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './portfolio.jsx'  // 👈 Make sure the file name matches exactly
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
)
