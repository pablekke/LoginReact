import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Rutas } from './components/Rutas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Rutas />
  </React.StrictMode>,
)
