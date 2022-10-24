import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import './index.css'
import Feed from './pages/Feed'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>
)
