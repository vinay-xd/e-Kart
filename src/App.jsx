import React, { useEffect, useState } from 'react'
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
import { MyContext, HomeProduct, ShopProduct } from './Data/ContextApi'


function App() {
  const [addtocart, setaddtocart] = useState([]);
  const addtoKart = (ShopProduct) => {
    setaddtocart([...addtocart, ShopProduct ])
    console.log(ShopProduct);
  }


  const [view, setview] = useState(0)
  const hendelQuickView = (index) => {
    const quickCon = document.getElementById('quickCon');
    const overlay = document.getElementById('overlay');
    quickCon.style.display = quickCon.style.display === 'none' ? 'block' : 'none';
    overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    setview(index);
  }
  const [addi, setaddi] = useState([])
  useEffect(() => {
    setaddi([HomeProduct[view]])
  }, [view]);
  console.log(addi);
    const hendelQuickViewClose = () => {
      const quickCon = document.getElementById('quickCon');
      const overlay = document.getElementById('overlay');
      quickCon.style.display = quickCon.style.display === 'none' ? 'block' : 'none';
      overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    }
  return (
    <>
    <MyContext.Provider value={{ addtocart, addtoKart, HomeProduct, ShopProduct, hendelQuickView, hendelQuickViewClose, view, addi}} >
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Homepage />} />
        <Route path = '/men' element = {<Men/>}/>
        <Route path = '/women' element = {<Women/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/cart'  element = {<Cart />} />
      
      </Routes>
      <Footer/>
    </Router>
    </MyContext.Provider>
    
    </>
  )
}

export default App
