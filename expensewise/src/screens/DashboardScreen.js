import React, { useState } from 'react';

function DashboardScreen() {
    const [balance, setBalance] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [income, setIncome] = useState(0);

    return (
        <div>
            <h2>Dashboard</h2>
            <div>Total Balance: ${balance}</div>
            <div>Total Expenses: ${expenses}</div>
            <div>Total Income: ${income}</div>
            <button>Add Expense</button>
            <button>Add Income</button>
            {/* Visualization component can go here */}
            {/* Recent transactions list can go here */}
        </div>
    );
}

export default DashboardScreen;
