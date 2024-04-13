import React, {useState} from 'react'
import * as Images from '../../Images/index'

function Cart() {

     const [count, setCount] =  useState(1)
     const increase = () => {setCount(count + 1)}
     const decrease = () => {
        if( count > 0){
            setCount(count - 1)}
    }

    return (
        <>
            <table className='w-[800px] mx-auto my-10'>
                <tr className='border '>
                    <th className='w-[50%] border' >Product</th>
                    <th className='w-[25%] border'>Count</th>
                    <th className='w-[25%] border'>Price</th>
                </tr>
                <tr className='border '>
                    <td className='w-[50%] border '>
                        <div className='Cart text-center my-5'>
                            <div className='cart-img w-[50%] mx-auto '><img src={Images.image} alt="" /></div>
                            <div className='cart-title mt-3 capitalize' >product</div>
                        </div>
                    </td>
                    <td className='w-[25%]  '>
                        <div className='flex border justify-between ml-16 w-20'>
                        <button onClick={increase} className=' p-1 px-2 ' >+</button>
                        <p className=' p-1 px-2'>{count}</p>
                        <button onClick={decrease} className=' p-1 px-2 '>-</button>
                        </div>
                        </td>
                    <td className=' text-center w-[25%] border'>Price</td>
                </tr>
            </table>
        </>
    )
}

export default Cart