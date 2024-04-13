import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='Footer'>
    <div className='Footer-container'>
        <div className='FconDec'>
            <h3>e-Kart</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati numquam dolorum corporis ut repellendus soluta.</p>
        </div>
        <div className='FItemcon'>
        <div className='FconItem'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className='FconItem'>
        <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className='FconItem'>
        <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        </div>
    </div >

    <p className='copyright'>&copy; 2024 e-Kart. All right reserved</p>
    </div>
    </>
  )
}

export default Footer