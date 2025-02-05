import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function ProductCard({item}) {
    return (
        <div className='bg-white rounded-lg flex flex-col justify-between text-center p-2'>
            <img src={item.image} className='rounded-tl-lg size-20 mx-auto'/>
            <h1>{item.title}</h1>
            <div className='flex justify-between mt-1'>
                <p>${item.price}</p>
                <p>{item.rating.rate} <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}}/> </p>
            </div>
        </div>
    )
}

export default ProductCard
