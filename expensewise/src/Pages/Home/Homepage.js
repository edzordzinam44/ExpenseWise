import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../images/logo.png';
import page from '../../images/background-img.png';

function Homepage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
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
        setErrors({ ...errors, [e.target.name]: '' }); // Clear error for the current field on change
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
            return;
        }

        const requestData = JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password
        });

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5002/auth/signup', requestData, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.status === 201) {
                alert('User registered successfully!');
                navigate('/login');
            } else {
                setErrors({ general: response.data.error || 'Something went wrong. Please try again.' });
            }
        } catch (err) {
            setErrors({ general: 'Failed to connect to server. Please try again later...' });
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

        // console.log('Login request data:', requestData);

        try {
            setLoading(true);
            const response = await axios.post(
                'http://localhost:5002/auth/login',
                requestData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (response.status === 200) {
                alert('Login Successful!');
                navigate('/dashboard');
            } else {
                setErrors({ general: response.data.error || 'Something went wrong. Please try again.' });
            }
        } catch (err) {
            setErrors({ general: 'Failed to connect to server. Refresh the browser...!' });
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
                        {errors.general && <p className='error'>{errors.general}</p>}

                        {/* {showSignup && (
                            <div className='form-group'>
                                <input
                                    type="text"
                                    id="Username"
                                    name="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="firstName">Username</label>
                                {errors.firstName && <p className='error'>{errors.firstName}</p>}
                            </div>
                        )} */}

                        {(showSignup && (
                            <div className='form-group'>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                                {errors.email && <p className='error'>{errors.email}</p>}
                            </div>
                        ))}

                        {(showSignup || showLogin) && (
                            <div className='form-group'>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="username">Username</label>
                                {errors.username && <p className='error'>{errors.username}</p>}
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
                                {errors.password && <p className='error'>{errors.password}</p>}
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
                                {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                            </div>
                        )}

                        {showForgotPassword && (
                            <div className='form-group'>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor='email'>Reset Password</label>
                            <button className='btnn'>Reset Password</button>
                            </div>
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