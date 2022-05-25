import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AppProvider from './context/app-providers'
import { ThemeProvider } from './context/theme-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
)
