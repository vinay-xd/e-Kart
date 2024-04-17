import React from 'react'
// 
function Card({imgUrl, title, description}){
    return(
        <>
        <div className='card p-2'>
            <img className='card-image' src = {imgUrl} />
            <div className='card-content'>
                <h1 className='card-title mt-5'> {title}</h1>
                <p className='card-description mb-5'>{description}</p>
            </div>
        </div>
        
        
        </>
    )
}

export default Card

