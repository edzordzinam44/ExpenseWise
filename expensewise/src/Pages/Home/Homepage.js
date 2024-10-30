import React from 'react';
import './Homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../images/logo.png';
import page from '../../images/background-img.png';

function Homepage() {
    return (
        <>
            <header className='header'>
                <a href='/'><img src={logo} alt='ExpenseWise Logo' /></a>
                <ul className='nav'>
                    <li><a href='/Login'><i className="fas fa-sign-in-alt"></i> Login</a></li>
                    <li><a href='/aboutus'><i className='fas fa-info-circle'></i>About Us</a></li>
                    <li><a href='/contactus'><i className='fas fa-envelope'></i>Contact Us</a></li>
                    <li><a href='/logout'><i className='fas fa-sign-out-alt'></i>Log Out</a></li>
                </ul>
            </header>
            <section className='main section'>
                <img className='img-bg' src={page} alt="Background" />
                <h1>Welcome! <br />Your reliable App for tracking expenses...</h1>
            </section>
            <footer className='footer'>
                <p>&copy; 2024 ExpenseWise. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Homepage;