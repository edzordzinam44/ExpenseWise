import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../../images/background-img.png';

function LogIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess("Login Successful!");
                setError('');
                navigate('/Home');
            } else {
                setError(data.error || 'Something went wrong...!')
            }
        } catch (err) {
            setError("Error connecting to server");
        }
    };

    return (
        <>
                <img className='page-logo' src={logo} alt='page-logo' />
            {/* <div className="overlay">
                <video src={videobg} autoPlay loop muted />
            </div> */}
            <div className='login-container'>

                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    {error && <p className="error">{error}</p>}
                    {success && <p className='success'>{success}</p>}
                    <div className='form-group'>
                        <label htmlFor="email"><i className='fas fa-envelope'></i>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='expenseWise@gmail.com'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password"><i className='fas fa-lock'></i>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="rememberMe">Remember Me</label>
                        <input type="checkbox" name="rememberMe" />
                    </div>
                    <div className='form-group'>
                        <a href='/forgotpassword'>Forgot Password?</a>
                    </div>
                    <button className='btnn' type='submit'>Submit</button>
                </form>
            </div>
            <button className='signup' onClick={() => navigate('/signup')}>SIGN Up</button>
        </>
    );
}

export default LogIn;