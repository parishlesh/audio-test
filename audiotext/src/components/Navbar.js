import React, { useState } from 'react';
import LoginForm from './Loginform';

export default function Navbar() {
    const[btnlogin, setBtnlogin] = useState(false);

    // const openLoginForm=()=>{
    //     setBtnlogin(true);
    // };

    // const closeLoginForm=()=>{
    //     setBtnlogin(false);
    // };

    // const toggleLoginForm=()=>{
    //     if (btnlogin) {
    //         closeLoginForm();
    //     } else {
    //         openLoginForm();
    //     }
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                        </ul>
                        <ul className='signuplist'>
                            <li>

                                <button className='Loginbutton' onClick={() => setBtnlogin(!btnlogin) }>
                                {/* <button className="Loginbutton" onClick={toggleLoginForm}> */}
                                    <span>Login</span>
                                </button>
                                
                                    {btnlogin && <LoginForm setBtnlogin={setBtnlogin} btnLogin={btnlogin}/>}
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
