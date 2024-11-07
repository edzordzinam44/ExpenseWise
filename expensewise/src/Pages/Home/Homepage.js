import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../images/logo.png';
import page from '../../images/background-img.png';
// import AboutUs from '../About/aboutus';

function Homepage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const requestData = JSON.stringify({
             firstName: formData.firstName,
             lastName: formData.lastName,
             email: formData.email,
             password: formData.password
        });

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5002/auth/signup', requestData, {
            });

            if (response.status === 201) {
                alert('User registered successfully!');
                navigate('/login');
            } else {
                setError(response.data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to connect to server. Please try again later...');
        } finally {
            setLoading(false);
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const requestData = JSON.stringify({
            username: formData.username,
            password: formData.password
        });
        try {
            setLoading(true);
            const response = await axios.post(
                'http://localhost:5002/auth/signup',
                requestData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (response.status === 200) {
                alert('Login Successful!');
                navigate('/dashboard');
            } else {
                setError(response.data.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to connect to server. Please try again later...');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {showLogin || showSignup || showForgotPassword ? (
                <div className='auth-container'>
                    <img className='page-logo' src={page} alt="Background" />
                    <div className='form-content'>
                        <h2>{showLogin ? 'Login' : showSignup ? 'Sign Up' : 'Forgot Password'}</h2>
                        {error && <p className='error'>{error}</p>}
                        {showSignup && (
                            <div className='form-group'>
                                <input
                                    type="text"
                                    id="username"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                        )}

                        {(showLogin || showSignup || showForgotPassword) && (
                            <div className='form-group'>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        )}

                        {(showLogin || showSignup) && (
                            <div className='form-group'>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        )}

                        {showSignup && (
                            <div className='form-group'>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="confirm-password">Confirm Password</label>
                            </div>
                        )}

                        {showForgotPassword && (
                            <button className='btnn'>Reset Password</button>
                        )}

                        {!showForgotPassword && (
                            <>
                                <button
                                    className='btnn'
                                    onClick={showSignup ? handleSignupSubmit : handleLoginSubmit}
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : showLogin ? 'Login' : 'Sign Up'}
                                </button>
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
                            <li><a href='#' onClick={() => navigate('/dashboard')}><i className="fas fa-chart-line"></i> Dashboard</a></li>
                            <li><a href='/AboutUs'><i className='fas fa-info-circle'></i> About Us</a></li>
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
