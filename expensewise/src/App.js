import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Pages/Home/Homepage';
import ForgotPass from './Pages/Register/ForgotPass/fortgotPass';
import Dashboard from './Pages/Dashboard/Dashboard';
import AboutUs from './Pages/About/aboutus';

// Simple auth check - you'll want to replace this with your actual auth logic
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('user') !== null; // Replace with your auth check
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/forgot-password' element={<ForgotPass />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;