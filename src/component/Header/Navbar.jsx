import React, { useContext, useEffect, useState } from 'react'
import { GoPerson } from "react-icons/go";
import { PiShoppingBagThin } from "react-icons/pi"
import { CiHeart } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
import { myblack, myred, myyellow, myorange, myLightpurple, myLightgreen, myDarkgreen, myDarkpurple } from '../Images/index';
import { MyContext } from '../../Data/ContextApi';


function Navbar() {
    const { addtocart } = useContext(MyContext)
    const [isScroll, setIsScroll] = useState(false)
    useEffect(() => {
        let handelScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 100) {
                setIsScroll(true);
            }
            else {
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handelScroll);
        return () => { window.removeEventListener('scroll', handelScroll); }
    })


    const bgCol = {
        backgroundColor: isScroll ? '#fff' : 'transparent',
        // color: isScroll ? 'myDarkpurple' : '#fff',
        boxShadow: isScroll ? '0px 1px 3px grey' : "",
        color: myLightpurple,
        transition: 'all .7s ease'
    }


    return (
        <>
            <div className='Nav-Container flex justify-between w-[100%] h-[80px] px-4 py-6 font-[500] fixed z-[10] top-0' style={bgCol}>
                <div className='Nav-ConLogo flex'>
                    <h3 style={{ color: myDarkpurple }} className=' font-[800]' >Trend<span className='font-[600]'>Fusion</span></h3>
                    <div className='Nav-Conlist ml-10 tracking-[0.25rem]'>
                        <ul>
                            <Link to={'/'} className={`${useLocation().pathname === '/' ? 'text-[#8800cc]' : { bgCol }}`} >
                                <li className='Hover'>Home</li></Link>
                            <Link to={'/men'} className={`${useLocation().pathname === '/men' ? 'text-[#8800cc]' : { bgCol }}`} >
                                <li className='Hover' >Men</li></Link>
                            <Link to={'/women'} className={`${useLocation().pathname === '/women' ? 'text-[#8800cc]' : { bgCol }}`} >
                                <li className='Hover' >Women</li></Link>
                            <Link to={'/about'} className={`${useLocation().pathname === '/about' ? 'text-[#8800cc]' : { bgCol }}`} >
                                <li className='Hover'>About</li></Link>
                            <Link to={'/contact'} className={`${useLocation().pathname === '/contact' ? 'text-[#8800cc]' : { bgCol }}`} >
                                <li className='Hover'>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>

                <div className='mr-5 flex'>
                    <Link to={'/wishlist'}><div className='Nav-icon'><CiHeart /></div></Link>
                    <Link to={'/cart'}>
                        <div className='Nav-icon relative'>
                            <PiShoppingBagThin />
                            <div className=' absolute -top-1 right-1 text-[13px] '>{addtocart.length}</div>
                        </div>
                    </Link>
                    <Link to={'/login'}><div className='Nav-icon'><GoPerson /></div></Link>

                </div>
            </div>
            { }

        </>
    )
}

export default Navbar