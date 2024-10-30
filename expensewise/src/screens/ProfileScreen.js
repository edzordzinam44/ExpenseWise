import React, { useState } from 'react';

function ProfileScreen() {
    const [userEmail, setUserEmail] = useState('user@example.com');
    const [linkedAccounts, setLinkedAccounts] = useState(['Google']);

    return (
        <div>
            <h2>Profile</h2>
            <div>
                <strong>Email:</strong> {userEmail}
            </div>
            <div>
                <strong>Linked Accounts:</strong> {linkedAccounts.join(', ')}
            </div>
            {/* Placeholder for subscription options */}
            <button>Manage Subscription</button>
        </div>
    );
}

export default ProfileScreen;
