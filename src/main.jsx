import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'

import { QueryClient,QueryClientProvider } from 'react-query'

// PrimeReact Configuration
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"     
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"                                         
import "primeflex/primeflex.css"    

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)