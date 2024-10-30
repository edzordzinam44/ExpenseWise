import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import screens
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import CategoryBreakdownScreen from './screens/CategoryBreakdownScreen';
import BudgetingScreen from './screens/BudgetingScreen';
import ReportsScreen from './screens/ReportsScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginScreen />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/add-expense" element={<AddExpenseScreen />} />
          <Route path="/category-breakdown" element={<CategoryBreakdownScreen />} />
          <Route path="/budgeting" element={<BudgetingScreen />} />
          <Route path="/reports" element={<ReportsScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;