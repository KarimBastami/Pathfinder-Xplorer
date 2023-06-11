import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/root/App.jsx'

import { GridProvider } from './context/GridContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GridProvider>
      <App />
    </GridProvider>
  </React.StrictMode>,
)
