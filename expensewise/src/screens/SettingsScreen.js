import React, { useState } from 'react';

function SettingsScreen() {
    const [currency, setCurrency] = useState('USD');
    const [language, setLanguage] = useState('English');
    const [notifications, setNotifications] = useState(true);

    return (
        <div>
            <h2>Settings</h2>
            <div>
                <label>
                    Currency:
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        {/* Add more currency options as needed */}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Language:
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        {/* Add more language options as needed */}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                    />
                    Enable Notifications
                </label>
            </div>
        </div>
    );
}

export default SettingsScreen;
