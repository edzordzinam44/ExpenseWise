import React, { useState } from 'react';
import './Homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../images/logo.png';
import page from '../../images/background-img.png';

function Homepage() {
    const [showLogin, setShowLogin] = useState(false);

    const handleShowLogin = () => setShowLogin(true);

    return (
        <>
            {showLogin ? (
                <div className='login-container'>
                    <img className='page-logo' src={page} alt="Background" />
                    <div className='form-content'>
                        <h2>Login</h2>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" />
                        </div>
                        <button className='btnn'>Login</button>
                        <a href="#" className='form-group'>Forgot Password?</a>
                        <button className='signup' onClick={() => setShowLogin(false)}>Back</button>
                    </div>
                </div>
            ) : (
                <>
                    <header className='header'>
                        <a href='/'><img src={logo} alt='ExpenseWise Logo' /></a>
                        <ul className='nav'>
                            <li><a href='#' onClick={handleShowLogin}><i className="fas fa-sign-in-alt"></i> Login</a></li>
                            <li><a href='/aboutus'><i className='fas fa-info-circle'></i> About Us</a></li>
                            <li><a href='/contactus'><i className='fas fa-envelope'></i> Contact Us</a></li>
                            <li><a href='/logout'><i className='fas fa-sign-out-alt'></i> Log Out</a></li>
                        </ul>
                    </header>
                    <section className='main section'>
                        <img className='img-bg' src={page} alt="Background" />
                        <h1>Welcome! <br />Your reliable app for tracking expenses...</h1>
                    </section>
                    <footer className='footer'>
                        <p>&copy; 2024 ExpenseWise. All rights reserved.</p>
                    </footer>
                </>
            )}
        </>
    );
}

export default Homepage;