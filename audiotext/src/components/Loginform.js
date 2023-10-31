import React, { useState } from 'react'
import '../styles/loginform.css'
import axios from 'axios';

export default function LoginForm({ btnLogin, setBtnlogin }) {
    const [isLogin, setIsLogin] = useState(true)
    const [isFormOpen, setIsFormOpen] = useState(btnLogin);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newConfirmPassword, setNewConfirmPassword] = useState('')
    // const setBtnlogin = {props}


    const handleSwitchClick = () => {
        setIsLogin(!isLogin);
    };
    const handleCloseClick = () => {
        // setIsFormOpen(false);
        setBtnlogin(false);
    };

    if (!isFormOpen) {
        return null;
    };

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        if (newPassword === newConfirmPassword) {
            console.log(newEmail)
            console.log(newPassword)
            console.log(newConfirmPassword)
            try {
                const response = await axios.post('localhost:8000/signup/', {
                    newEmail,
                    newPassword,
                });

                // Handle the successful login here, e.g., set a token in local storage and redirect to another page.
                console.log('Signup successful', response.data);
            } catch (error) {
                // Handle login failure, e.g., show an error message.
                console.error('Signup failed', error);
            }
        } else {
            window.alert("Enter Same Passwords")
        }
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className='closeButton' >
                    <button style={{ all: "unset", cursor: "pointer ", backgroundColor: "white", border: "none", borderRadius: "15px" }} onClick={handleCloseClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>

                <div className='form'>
                    <div className={`cover ${isLogin ? 'toRight' : 'toLeft'}`}>
                        <div className="row">
                            <img className="logo" src="logo.jpg" alt="logo logo" />
                            <h1>AudioText</h1>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quia
                            nulla modi nostrum odio sequi repudiandae quasi qui possimus explicabo
                            rerum iste cupiditate, vero ab facilis quibusdam a! Molestias, quasi!
                        </p>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <form onSubmit={(e) => { handleLogin(e) }}>
                            <div className='login-section center'>
                                <h1>Login</h1>
                                <label htmlFor=''>Email:</label>
                                <input className='form-input' type='email' onChange={(e) => { setEmail(e.target.value) }} />
                                <label htmlFor=''>Password:</label>
                                <input className='form-input' type='password' onChange={(e) => { setPassword(e.target.value) }} />
                                <button style={{ zIndex: '0' }} type='submit'>Login</button>
                                <p>
                                    Don't have account yet?
                                    <span className="register-link" id="signup" onClick={handleSwitchClick}>Register</span>
                                </p>
                            </div>
                        </form>

                        <form onSubmit={(e) => { handleSignup(e) }}>
                            <div className='signup-section center'>
                                <h1>Sign Up</h1>
                                <label htmlFor=''>Email:</label>
                                <input className='form-input' type='text' onChange={(e) => { setNewEmail(e.target.value) }}></input>
                                <label htmlFor=''>Password:</label>
                                <input className='form-input' type='password' onChange={(e) => { setNewPassword(e.target.value) }}></input>
                                <label htmlFor=''>Confirm Password:</label>
                                <input className='form-input' type='password-repeat' onChange={(e) => { setNewConfirmPassword(e.target.value) }}></input>
                                <button style={{ zIndex: '0' }} type='submit'>Sign Up</button>
                                <p>
                                    Already have an account yet?
                                    <span className="register-link" id="signup" onClick={handleSwitchClick}>Login</span>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
