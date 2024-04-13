import React from 'react'

function Contact() {
  return (

<>

    <div className='contact-container mx-auto text-center shadow-slate-600 shadow-lg rounded-[25px] my-24 w-[500px] p-10'>
        <textarea name="Query" id="" className='resize-none w-[100%] h-[200px] border px-5 p-2' placeholder='enter your query'></textarea>
        <input type="text" name="name" id="" placeholder='enter your name' className='block border mt-5 px-5 p-2 w-[100%]' />
        <input type="text" name="email" id="" placeholder='enter your email' className='block border mt-5 px-5 p-2 w-[100%]'/>
        <button type='submit' className='  bg-[#c0c0c0] text-[#585858] p-2 px-5 shadow-slate-600 shadow-md rounded-[5px] mt-5'>Submit</button>
    </div>

</>


  )
}

export default Contact