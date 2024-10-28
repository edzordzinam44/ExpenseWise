import React from 'react';
import './Homepage.css';
import logo from '../../images/logo.png';
import Login from '../Register/Login/login';
import video from '../../images/background-vid.mp4';

function Homepage() {
    return (
        <div>
            <header className='header'>
                <div className='brand'>
                    <a href='/'><img src={logo} alt='ExpenseWise Logo' /></a>
                </div>
                <ul className='nav'>
                    <li><a href='/Login' src={Login}>Login</a></li>
                    <li><a href='/aboutus'>About Us</a></li>
                    <li><a href='/contactus'>Contact Us</a></li>
                    <li><a href='/logout'>Log Out</a></li>
                </ul>
            </header>
            <main className='main section'>
                <video src={video} autoPlay loop muted />
                <h1>Welcome! Your reliable App for tracking expenses...</h1>
            </main>
            <footer className='footer'>
                <p>&copy; 2024 ExpenseWise. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Homepage;
