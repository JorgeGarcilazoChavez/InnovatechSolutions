import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NotFoundPage from './NotFound.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import Registro from './Registro.jsx'

const router = createHashRouter([
  {path: "/", element:<App/>},
  {path: "/login", element:<Login/>},
  {path: "/registro", element:<Registro/>},
  {path: "*", element:<NotFoundPage/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

