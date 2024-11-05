import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import logo from '../../../images/background-img.png';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5002/api/signup', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            });

            if (response.ok) {
                alert('User Register Successfully!');
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

    return (
        <>
            <img className='page-logo' src={logo} alt='page-logo' />
            <div className='signup-container'>
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    {error && <p className='error'>{error}</p>}
                    <div className='form-group'>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            placeholder='First Name'
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            placeholder='Last Name'
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email"><i className='fas fa-envelope'></i>Email</label>
                        <input
                            type="email"
                            placeholder='eg.expenseWise@gmail.com'
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password"><i className='fas fa-lock'></i>Password</label>
                        <input
                            type="password"
                            placeholder='Password'
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="confirmPassword"><i className='fas fa-lock'></i>Confirm Password</label>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='btnn' type="submit" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Uggggggggp'}
                    </button>
                    <p className='login-link'>Already have an account? <Link to='/login'>Log In</Link></p>
                </form>
            </div>
        </>
    );
}

export default SignUp;
