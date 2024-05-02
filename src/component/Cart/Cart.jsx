import React, { useState } from 'react'
import * as Images from '../Images/index'
import Homepage from '../HomePage/Homepage';
import { useContext } from 'react';
import { MyContext } from '../../Data/ContextApi';


function Cart() {
    const { addtocart, count, Increase, Decrease } = useContext(MyContext);
    // const [count, setCount] = useState(1)
    // const increase = () => { setCount(count + 1) }
    // const decrease = () => { count > 0 ? setCount(count - 1) : '' }
    console.log(addtocart);


    return (
        <>


            <div className='mt-52 bg-white p-5'>
                <ul className='flex'>
                    {addtocart.map((item) => (
                        <li key={item.id}>
                            {item.title}
                            {item.price}
                        Count: {item.count}
                        <button onClick={() => Increase(item.id)} className=' p-1 px-2 ' >+</button>
                        <button onClick={() => Decrease(item.id)} className=' p-1 px-2 '>-</button>
                        {console.log(item.id)}
                        </li>
                        // console.log(item.title);
                    ))
                    }
                </ul>
            </div>

            {/* <div className='flex border justify-between ml-16 w-20'>
                
                <p className=' p-1 px-2'>{count}</p>
                
            </div> */}




        </>
    )
}

export default Cart