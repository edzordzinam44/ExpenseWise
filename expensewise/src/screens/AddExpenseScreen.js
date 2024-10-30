import React, { useState } from 'react';

function AddExpenseScreen() {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');

    const handleSave = () => {
        // Logic for saving the expense
    };

    return (
        <div>
            <h2>Add Expense</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                {/* Add more categories as needed */}
            </select>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <textarea
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <button onClick={handleSave}>Save</button>
            <button>Cancel</button>
        </div>
    );
}

export default AddExpenseScreen;
