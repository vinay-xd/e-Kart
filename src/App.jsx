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
import Wishlist from './component/WishList/Wishlist'
import { MyContext, HomeProduct, ShopProduct } from './Data/ContextApi'


function App() {
  const [addtocart, setaddtocart] = useState([]);
  const addtoKart = (id) => {
    const productToadd = ShopProduct[id - 1];
    console.log(productToadd);
    const itemIndex = addtocart.findIndex(item => item.id === productToadd.id);
    if (itemIndex !== -1 ) {
      const updateaddtocartlist = [...addtocart];
      if(updateaddtocartlist[itemIndex].count < 10){
      updateaddtocartlist[itemIndex].count += 1;
      setaddtocart(updateaddtocartlist);
    }}
    else {
      setaddtocart([...addtocart, { ...productToadd, count: 1 }])
    }
  }
  const Increase = (id) => {
    setaddtocart((prevState) => {
      return prevState.map((item) => {
        if (id === item.id && item.count < 10) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    })
  }
  const Decrease = (id) => {
    setaddtocart((prevState) => {
      return prevState.map((item) => {
        if (id === item.id && item.count > 1) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
    })
  }

  const [addtowish, setaddtowish] = useState(new Set())
  const addtolist = (item) => {
    setaddtowish(new Set([...addtowish, item]))
  }
  const addtowisharray = Array.from(addtowish);
  console.log(addtowish);
  const removeWishlist = (id) => {
    setaddtowish(addtowisharray.filter(list => list.id !== id))
  }

  // ........................................................................quick view
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

  const hendelQuickViewClose = () => {
    const quickCon = document.getElementById('quickCon');
    const overlay = document.getElementById('overlay');
    quickCon.style.display = quickCon.style.display === 'none' ? 'block' : 'none';
    overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
  }
  return (
    <>
      <MyContext.Provider value={{ addtocart, addtoKart, addtolist, addtowisharray, addtowish, removeWishlist, HomeProduct, ShopProduct, hendelQuickView, hendelQuickViewClose, view, addi, Increase, Decrease }} >
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Wishlist' element={<Wishlist />} />

          </Routes>
          <Footer />
        </Router>
      </MyContext.Provider>

    </>
  )
}

export default App
