import React, { useContext } from 'react'
import { MyContext, ShopProduct } from '../../Data/ContextApi'
import * as Images from '../Images/index'
import Cardlist from '../Card/Cardlist';
import { myblack, mywhite, mygrey, myred, myyellow, myorange, myLightpurple, myLightgreen, myDarkgreen, myDarkpurple } from "../Images/index";

function Wishlist() {
    const {addtowisharray, addtowish, addtoKart, removeWishlist, ShopProduct } = useContext(MyContext)
    
  return (
    <>
    <div className=" sec2 card-container relative w-[1280px] mx-auto my-32 p-2">
        <div className=" uppercase text-[35px] font-[700] mb-16 tracking-wider" style={{ color: myLightpurple }}>
          <h2>Wishlist</h2>
        </div>
        <div className="flex flex-wrap justify-around">
          {addtowisharray.map((i, index) => (
            <Cardlist
              key={i.id}
              imgUrl={i.imgUrl[0]}
              title={i.title}
              price={i.price}
              description={i.description}
              shiftToCart={() => addtoKart(addtowisharray[index].id)}
              remove={() => removeWishlist(i.id)}
              
            />,
            // console.log(addtowisharray[index].id)
          ))}
          {}
        </div>
      </div>
    
    </>
  )
}

export default Wishlist