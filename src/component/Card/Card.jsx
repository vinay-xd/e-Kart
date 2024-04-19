import React from 'react'
import { CiHeart } from "react-icons/ci";
import { myDarkgreen, myLightgreen, myLightpurple, myorange, myred, mywhite, myyellow } from '../Images';
// 
function Card({ imgUrl, title, description, price, onClick }) {
    
    return (
        <>
            <div className='card w-[290px] rounded-[10px] m-3 overflow-hidden'>
                <div className='imgCOn overflow-hidden relative'>
                    <img className='card-image w-[100%] h-[300px] object-cover' src={imgUrl} />
                    <button className='Overbtn  absolute px-3 py-1 rounded-[50px]' onClick={onClick} style={{backgroundColor:myLightpurple, color:mywhite}}>Quick view</button>
                </div>
                
                <div className='card-content p-2 '>
                    <div className='flex justify-between text-[14px]'style={{color:myLightpurple}}>
                        <h1 className='card-title mt-2 ' > {title}</h1>
                        <button className='text-[20px] my-2 '><CiHeart /></button>
                    </div>
                    {/* <p className='card-description mb-5'>{description}</p> */}
                    <p className='card-price mb-5' style={{color:myyellow}}>{price}</p>

                </div>
            </div>



        </>
    )
}

export default Card

