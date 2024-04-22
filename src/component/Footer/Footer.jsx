import React from 'react'
import { PiYoutubeLogoThin, PiInstagramLogoThin, PiPinterestLogoThin } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import './Footer.css'
import { myLightpurple, myblack, mywhite } from '../Images'

function Footer() {
    return (
        <>
            <div className='Footer w-[100%] ' style={{ backgroundColor: myblack, color: mywhite }}>
                <div className='Footer-container w-[1280px] p-6 flex justify-between mx-auto tracking-[.25rem]'>
                    <div className='FconDec w-[40%] p-5 mr-7'>
                        <h3 className='mb-5 text-[20px] font-[500]'><span className='font-[700]'>Trend</span>Fusion</h3>
                        <p className=' text-wrap tracking-[.25rem] text-[0.9rem]'>Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.</p>
                    </div>
                    <div className='FItemcon p-5 w-[30%] flex justify-between ml-10 text-[0.9rem]' style={{ color: mywhite }}>
                        <div className='FconItem '>
                            <ul>
                                <th>Categories</th>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Shoes</li>
                                <li>Acessories</li>
                            </ul>
                        </div>
                        <div className='FconItem'>
                            <ul>
                                <th>Help</th>
                                <li>Contact us</li>
                                <li>Orders</li>
                                <li>Career</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                    </div>

                </div >
                <div className='Ficon flex justify-center mb-5 -mt-8 text-[20px]' >
                    <i className='px-5' > <PiInstagramLogoThin /> </i>
                    <i className='px-5' > <RiTwitterXFill /> </i>
                    <i className='px-5' > <PiPinterestLogoThin /> </i>
                    <i className='px-5' > <PiYoutubeLogoThin /> </i>
                </div>
                <div><p className='copyright p-5 text-center'>&copy;2024 All right reserved | made by vinay</p></div>
            </div>

        </>
    )
}

export default Footer