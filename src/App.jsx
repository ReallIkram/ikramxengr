
import React from 'react'
import Home from './pages/Home'

import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
  return (
<ThemeProvider>


<RouterProvider router={routes} >
   <Home />
</RouterProvider>
     
</ThemeProvider>
  )
}

export default App