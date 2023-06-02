import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateGlobalStyle from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CreateGlobalStyle />
        <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
