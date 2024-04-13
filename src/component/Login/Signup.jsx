import React from 'react'
import './Login.css'

function Signup() {
  return (
    <>
    <form action="">
    <div className='formCon'>

        <h3>Registration</h3>

        <label htmlFor="Uinput" id='Ulabel'>Email</label>
        <input type="text" name="Username" placeholder='Email' id="Uinput" />

        <label htmlFor="Uinput" id='Ulabel'>Username</label>
        <input type="text" name="Username" placeholder='Username' id="Uinput" />

        <label htmlFor="Pinput" id='Plabel'>Password</label>
        <input type="text" name="Password" placeholder='Password' id="Pinput" />

        <div className='Fbtnc'>
        <button type='submit' id='Fbtn'>Log in</button>
        <hr />
        
        </div>
        <hr />

    
    </div>
    </form>
    
    </>
  )
}

export default Signup