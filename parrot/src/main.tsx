import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Hello world</h1>
    <a href='#' className='btn btn-primary'>botao bootstrap</a>
  </React.StrictMode>
)
