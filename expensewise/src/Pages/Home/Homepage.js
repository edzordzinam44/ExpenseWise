import React from 'react';
import './Homepage.css';
import logo from '../../images/logo.png';

function Homepage() {
    return (
        <div>
            <header className='header'>
                <div className='brand'>
                    <a href='/'><img src={logo} alt='ExpenseWise Logo' /></a>
                </div>
                <div className='header-links'>
                    <a href='/signin'>Sign In</a>
                    <a href='/signup'>Sign Up</a>
                </div>
            </header>
            <main className='main section'>
                <h1>Welcome, This is your Reliable App for Finances..</h1>
            </main>
        </div>
    );
}

export default Homepage;