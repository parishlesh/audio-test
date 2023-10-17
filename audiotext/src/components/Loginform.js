    import React, { useState } from 'react'
    import '../styles/loginform.css'



    export default function LoginForm() {
        const [isLogin, setIsLogin] = useState(true)

        const handleSwitchClick = () => {
            setIsLogin(!isLogin);
        };

        return (

            <div className='form'>
                <div className='cover'>
                    <div className="row">
                        <img className="logo" src="logo.jpg" alt="logo logo"/>
                            <h1>AppName</h1>
                    </div>
                    <h3>What's new?</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quia
                        nulla modi nostrum odio sequi repudiandae quasi qui possimus explicabo
                        rerum iste cupiditate, vero ab facilis quibusdam a! Molestias, quasi!
                    </p>
                </div>


                <div className='login-section center'>

                    <h1>Login</h1>
                    <label htmlFor=''>Email:</label>
                    <input className='form-input' type='text'></input>
                    <label htmlFor=''>Password:</label>
                    <input className='form-input' type='password'></input>
                    <button>Login</button>
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
                    <button>Sign Up</button>
                    <p>
                        Already have an account yet?
                        <span class="register-link" id="signup" onClick={handleSwitchClick}>Login</span>
                    </p>

                </div>

            </div>
        )
    }
