import React, { useState } from 'react';

function CategoryBreakdownScreen() {
    const [categoryData, setCategoryData] = useState([
        { category: 'Food', amount: 200 },
        { category: 'Transport', amount: 100 },
        // Add more categories with amounts as needed
    ]);

    return (
        <div>
            <h2>Category Breakdown</h2>
            {/* Placeholder for pie chart visualization */}
            <div>
                {categoryData.map((item, index) => (
                    <div key={index}>
                        {item.category}: ${item.amount}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryBreakdownScreen;
