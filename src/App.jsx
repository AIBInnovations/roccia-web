import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Portfolio from './pages/Portfolio'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
        </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default App
