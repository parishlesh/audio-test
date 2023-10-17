import React, { useState } from 'react'
import '../styles/loginform.css'



export default function LoginForm() {
    const [isLogin, setIsLogin] = useState(true)

    const handleSwitchClick = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <div className='closeButton'>
                <button style={{all:"unset"}}>


            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                </button>

            </div>

        <div className='form'>
           <div className={`cover ${isLogin ? 'toRight' : 'toLeft'}`}>
                <div className="row">
                    <img className="logo" src="logo.jpg" alt="logo logo" />
                    <h1>AppName</h1>
                </div>
                <h3>What's signup new?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quia
                    nulla modi nostrum odio sequi repudiandae quasi qui possimus explicabo
                    rerum iste cupiditate, vero ab facilis quibusdam a! Molestias, quasi!
                </p>
            </div>
           

            <div style={{ display: 'flex' }}>
                <div className='login-section center'>

                    <h1>Login</h1>
                    <label htmlFor=''>Email:</label>
                    <input className='form-input' type='text'></input>
                    <label htmlFor=''>Password:</label>
                    <input className='form-input' type='password'></input>
                    <button style={{ zIndex: '0' }}>Login</button>
                    <p>
                        Don't have account yet?
                        <span class="register-link" id="signup" onClick={handleSwitchClick}>Register</span>
                    </p>
                </div>
                <div className='signup-section center'>

                    <h1>Sign Up</h1>
                    <label htmlFor=''>Email:</label>
                    <input className='form-input' type='text'></input>
                    <label htmlFor=''>Password:</label>
                    <input className='form-input' type='password'></input>
                    <label htmlFor=''>Repeat Password:</label>
                    <input className='form-input' type='password-repeat'></input>
                    <button style={{ zIndex: '0' }}>Sign Up</button>
                    <p>
                        Already have an account yet?
                        <span class="register-link" id="signup" onClick={handleSwitchClick}>Login</span>
                    </p>

                </div>

            </div>
        </div>
        </div>
    )
}
