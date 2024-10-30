import React, { useState } from 'react';
import './Homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../images/logo.png';
import page from '../../images/background-img.png';

function Homepage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleShowSignup = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    const handleBack = () => {
        setShowLogin(false);
        setShowSignup(false);
    };

    return (
        <>
            {showLogin || showSignup ? (
                <div className='auth-container'>
                    <img className='page-logo' src={page} alt="Background" />
                    <div className='form-content'>
                        <h2>{showLogin ? 'Login' : 'Sign Up'}</h2>
                        {showSignup && (
                            <div className='form-group'>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="Enter your username" />
                            </div>
                        )}
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" />
                        </div>
                        {showSignup && (
                            <div className='form-group'>
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="password" id="confirm-password" placeholder="Confirm your password" />
                            </div>
                        )}
                        <button className='btnn'>{showLogin ? 'Login' : 'Sign Up'}</button>
                        <p className='or'>or</p>
                        <button className='social-btn google-btn'>Sign {showLogin ? 'in' : 'up'} with Google</button>
                        <div className='back-container'>
                            <button className='back-btn' onClick={handleBack}>Back</button>
                            <button
                                className='toggle-btn'
                                onClick={showLogin ? handleShowSignup : handleShowLogin}>
                                {showLogin ? 'Need an account? Sign Up' : 'Have an account? Log In'}
                            </button>
                        </div>
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
