import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../images/logo.png';
import page from '../../images/background-img.png';

function Homepage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const navigate = useNavigate();

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowSignup(false);
        setShowForgotPassword(false);
    };

    const handleShowSignup = () => {
        setShowSignup(true);
        setShowLogin(false);
        setShowForgotPassword(false);
    };

    const handleShowForgotPassword = () => {
        setShowForgotPassword(true);
        setShowLogin(false);
        setShowSignup(false);
    };

    const handleBack = () => {
        setShowLogin(false);
        setShowSignup(false);
        setShowForgotPassword(false);
    };

    const handleDashboardAccess = () => {
        const isAuthenticated = localStorage.getItem('user') !== null;
        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            handleShowLogin();
        }
    };

    return (
        <>
            {showLogin || showSignup || showForgotPassword ? (
                <div className='auth-container'>
                    <img className='page-logo' src={page} alt="Background" />
                    <div className='form-content'>
                        <h2>{showLogin ? 'Login' : showSignup ? 'Sign Up' : 'Forgot Password'}</h2>

                        {showSignup && (
                            <div className='form-group'>
                                <input type="text" id="username" required />
                                <label htmlFor="username">Username</label>
                            </div>
                        )}

                        {(showLogin || showSignup || showForgotPassword) && (
                            <div className='form-group'>
                                <input type="email" id="email" required />
                                <label htmlFor="email">Email</label>
                            </div>
                        )}

                        {(showLogin || showSignup) && (
                            <div className='form-group'>
                                <input type="password" id="password" required />
                                <label htmlFor="password">Password</label>
                            </div>
                        )}

                        {showSignup && (
                            <div className='form-group'>
                                <input type="password" id="confirm-password" required />
                                <label htmlFor="confirm-password">Confirm Password</label>
                            </div>
                        )}

                        {showForgotPassword && (
                            <button className='btnn'>Reset Password</button>
                        )}

                        {!showForgotPassword && (
                            <>
                                <button className='btnn'>{showLogin ? 'Login' : 'Sign Up'}</button>
                                {showLogin && (
                                    <p className='forgot-password' onClick={handleShowForgotPassword}>
                                        Forgot Password?
                                    </p>
                                )}
                                <p className='or'>or</p>
                                <button className='social-btn google-btn'>Sign {showLogin ? 'in' : 'up'} with Google</button>
                            </>
                        )}

                        <div className='back-container'>
                            <button className='back-btn' onClick={handleBack}>Back</button>
                            {!showForgotPassword && (
                                <button className='toggle-btn' onClick={showLogin ? handleShowSignup : handleShowLogin}>
                                    {showLogin ? 'Need an account? Sign Up' : 'Have an account? Log In'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <header className='header'>
                        <a href='/'><img src={logo} alt='ExpenseWise Logo' /></a>
                        <ul className='nav'>
                            <li><a href='#' onClick={handleShowLogin}><i className="fas fa-sign-in-alt"></i> Login</a></li>
                            <li><a href='#' onClick={handleDashboardAccess}><i className="fas fa-chart-line"></i> Dashboard</a></li>
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
