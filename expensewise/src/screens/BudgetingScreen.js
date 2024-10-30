import React, { useState } from 'react';

function BudgetingScreen() {
    const [budget, setBudget] = useState({
        Food: 500,
        Transport: 200,
        // Define initial budget for categories
    });
    const [notifications, setNotifications] = useState(true);

    return (
        <div>
            <h2>Budgeting</h2>
            {Object.keys(budget).map((category, index) => (
                <div key={index}>
                    {category} Budget: ${budget[category]}
                    {/* Placeholder for progress bar */}
                </div>
            ))}
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                    />
                    Enable Budget Notifications
                </label>
            </div>
        </div>
    );
}

export default BudgetingScreen;
