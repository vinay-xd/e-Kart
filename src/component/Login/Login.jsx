import React from 'react'
import{Link} from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <>
    <form action="">
    <div className='formCon'>

        <h3>Log in</h3>

        <label htmlFor="Uinput" id='Ulabel'>Username</label>
        <input type="text" name="Username" placeholder='Username' id="Uinput" />

        <label htmlFor="Pinput" id='Plabel'>Password</label>
        <input type="text" name="Password" placeholder='Password' id="Pinput" />

        <div className='Fbtnc'>
          
          <Link to={'/signup'}><p id='Nacc'>Don't have account? sign up</p></Link>
          <p id='Fforgot'>forgot Password ?</p>
          
        
        </div>

        
        <button type='submit' id='Fbtn'>Log in</button>

        <br />
        <hr />

    
    </div>
    </form>
    
    </>
  )
}

export default Login