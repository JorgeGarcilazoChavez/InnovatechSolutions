import { useState } from 'react'
import './style.css'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import { Link, createBrowserRouter, BrowserRouter, Routes, Form } from 'react-router-dom'
import Formulario from './Registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-amber-100/50">
      <Header/>
      <main className='flex-1'>
      <MainContent/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
