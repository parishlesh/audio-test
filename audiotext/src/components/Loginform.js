import React, { useState } from 'react'
import '../styles/loginform.css'



export default function LoginForm() {
    const [isLogin, setIsLogin] = useState(true)

    const handleSwitchClick = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='form'>

           
           {/* <div className='cover' style={isLogin ? {left: '15px'} :{ right: "15px"}}> */}
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
    )
}
