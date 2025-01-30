import React from 'react'
import Navber from './Components/Navber'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Packages from './Pages/Packages'
import Contact from './Pages/Contact'
import News from './Pages/News'
import Footer from './Components/Foother'
import Pages from './Pages/Pages'
import Shop from './Pages/Shop'


const App = () => {
  return (
    <div className='font-poppins'>
      <Router>
        <Navber />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='packages' element={<Packages/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='news' element={<News/>} />
          <Route path='pages' element={<Pages/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
