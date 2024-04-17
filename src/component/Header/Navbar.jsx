import React, {useEffect, useState} from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { myblack, myred, myyellow, myorange, myLightpurple, myLightgreen, myDarkgreen,myDarkpurple, myLightpurpl } from '../Images/index';

function Navbar() {
    const [isScroll, setIsScroll] = useState(false)
    
    
    useEffect(() => {
        let handelScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 100){
                setIsScroll(true);
            }
            else{
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handelScroll);

        return () => {window.removeEventListener('scroll', handelScroll);}
    })
    
    console.log(isScroll);
    
    const bgCol = {
        backgroundColor: isScroll ? '#fff' : 'transparent',
        // color: isScroll ? 'myDarkpurple' : '#fff',
        color: myDarkpurple,
        transition: 'all .7s ease'
    }
    

    
    
//{bgCol}

    return (
        <>
            <div className='Nav-Container h-[80px] font-medium ' style={bgCol}>
                <div className='Nav-ConLogo flex'>
                    <h3 style={{color:myorange}}  >e-Kart</h3>
                    <div className='Nav-Conlist ml-10 '>
                        <ul>
                            <Link to={'/'} className={`${useLocation().pathname === '/' ? 'text-[#1aa7ce]' : {bgCol} }`} > 
                                <li className='Hover'>Home</li></Link>
                            <Link  to={'/men'} className={`${useLocation().pathname === '/men' ? 'text-[#1aa7ce]' : {bgCol}}`} >
                                <li className='hover:text-[#1aa7ce]' >Men</li></Link>
                            <Link to={'/women'} className={`${useLocation().pathname === '/women' ? 'text-[#1aa7ce]' : {bgCol}}`} >
                                <li className='hover:text-[#1aa7ce]' >Women</li></Link>
                            <Link to={'/about'} className={`${useLocation().pathname === '/about' ? 'text-[#1aa7ce]' : {bgCol}}`} >
                                <li className='hover:text-[#1aa7ce]'>About</li></Link>
                            <Link to={'/contact'} className={`${useLocation().pathname === '/contact' ? 'text-[#1aa7ce]' : {bgCol}}`} >
                                <li className='hover:text-[#1aa7ce]'>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>

                <div className='flex'>
                    <Link to={'/login'}> <div className='Nav-icon'><BsPersonCircle /></div></Link>
                    <Link to={'/cart'}><div className='Nav-icon'><FaShoppingCart /></div></Link>
                </div>
            </div>
        {}

        </>
    )
}

export default Navbar