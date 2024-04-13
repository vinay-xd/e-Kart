import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './component/HomePage/Homepage'
import Navbar from './component/Header/Navbar'
import Footer from './component/Footer/Footer'
import Men from './component/Men/Men'
import Women from './component/Women/Women'
import Login from './component/Login/Login'
import Signup from './component/Login/Signup'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Cart from './component/Cart/Cart'


function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Homepage/>}/>
        <Route path = '/men' element = {<Men/>}/>
        <Route path = '/women' element = {<Women/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/cart' element = {<Cart/>}/>

      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
