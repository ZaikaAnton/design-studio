
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {theme} from './theme'

const router = createBrowserRouter([
  {
    path: '/login',
  },
  {
    path: '/register',
  },
  {
    path: '/',
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
  <RouterProvider router={router} />
  </ThemeProvider>
)
