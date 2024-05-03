import React, { useContext } from 'react'
import { myDarkgreen, myLightgreen, myLightpurple, myorange, myred, mywhite, myyellow } from '../Images';

import * as Images from '../Images/index'

function Cardlist({ imgUrl, title, price, description, shiftToCart, remove }) {
    
    return (
        <>
            <div className='listCon w-[1280px] h-[200px] p-5 border-y-2 flex justify-between'>

                <div className='listImgCon w-[15%] h-[100%] ' >
                    <img className='w-[100%] h-[100%] object-cover ' src={imgUrl} alt="" />
                </div>
                <div className='listDecCon w-[70%] '>
                    <h2 className='text-[18px] font-[600]' style={{color: myLightpurple}}>{title}</h2>
                    <p className='text-[16px] font-[600] mb-2' style={{color: myyellow}}>{price}</p>
                    <p className='text-[14px] opacity-50' style={{color: myLightpurple}}>{description}</p>
                </div>
                <div className='listBtnCon w-[10%] '>
                    <button className=' block ml-auto p-2 px-6 opacity-50' onClick={remove} >X</button>
                    {/* style={{ backgroundColor: myLightpurple, color: mywhite }} */}
                    <button className='block px-4 mt-[5rem] ml-auto p-2 rounded-[10px]' style={{ backgroundColor: myLightpurple, color: mywhite }} onClick={shiftToCart} >Add to Cart</button>
                </div>
            </div>

        </>
    )
}

export default Cardlist