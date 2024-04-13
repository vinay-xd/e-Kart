import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <div className='Nav-Container'>
            <div className='Nav-ConLogo'>
                <h3>e-Kart</h3>
            </div>
            <div className='Nav-Conlist'>
                <ul>
                    <Link to={'/'}><li><a href="">Home</a></li></Link>
                    <Link to={'/men'}><li><a href="">Men</a></li></Link>
                    <Link to={'/women'}><li><a href="">Women</a></li></Link>
                    <Link to={'/about'}><li><a href="">About</a></li></Link>
                    <Link to={'/contact'}><li><a href="">Contact Us</a></li></Link>
                    
                    
                </ul>
            </div>
            <div className='flex'>
                <Link to={'/login'}> <div className='Nav-icon'><BsPersonCircle /></div></Link>
                <Link to={'/cart'}><div className='Nav-icon'><FaShoppingCart /></div></Link>
            </div>
        </div>
    )
}

export default Navbar