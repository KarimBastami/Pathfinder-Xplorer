import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/root/App.jsx'

import { GridProvider } from './context/GridContext.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GridProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GridProvider>
  </React.StrictMode>,
)
