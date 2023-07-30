import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PlusMinus from './PlusMinus.jsx'
import MyCounter from './MyCounter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PlusMinus/>
  </React.StrictMode>,
)
