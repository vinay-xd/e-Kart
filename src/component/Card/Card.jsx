import React from 'react'
// 
function Card({imgUrl, title, description}){
    return(
        <>
        <div className='card'>
            <img className='card-image' src = {imgUrl} />
            <div className='card-content'>
                <h1 className='card-title'> {title}</h1>
                <p className='card-description'>{description}</p>
            </div>
        </div>
        
        
        </>
    )
}

export default Card

