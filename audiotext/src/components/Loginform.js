import React from 'react'
import '../styles/loginform.css'


export default function Loginform() {

    return (
        <>
            <div className="form-section">
                <div className="switch" id="switch">
                    <div className="row">
                        <img className="logo" src="logo.jpg" alt="logo logo" />
                        <h1>AppName</h1>
                    </div>
                    <h3>What's new?</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quia
                        nulla modi nostrum odio sequi repudiandae quasi qui possimus explicabo
                        rerum iste cupiditate, vero ab facilis quibusdam a! Molestias, quasi!
                    </p>
                </div>
                <div className="login-form center">
                    <h1>Sign Up</h1>
                    <label htmlFor="">Email:</label>
                    <input className="form-input" type="text" />
                    <label htmlFor="">Password:</label>
                    <input className="form-input" type="password" />
                    <label htmlFor="">Password repeat:</label>
                    <input className="form-input" type="password" />
                    <button className="btn-switch green">Sign Up</button>
                    <p>
                        Already have an account?<span className="register-link" id="login">Login</span>
                    </p>
                </div>
                <div className="signup-form center">
                    <h1>Login</h1>
                    <label htmlFor="">Email:</label>
                    <input className="form-input" type="text" />
                    <label htmlFor="">Password:</label>
                    <input className="form-input" type="password" />
                    <button className="btn-switch">Login</button>
                    <p>
                        Don't have account yet?<span className="register-link" id="signup">Register</span>
                    </p>
                </div>
            </div>
            <script src="script.js"></script>
        </>
    )
}
