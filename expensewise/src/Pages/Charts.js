import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartsContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 10px;
    padding: 20px;
`;

const data = [
    { name: 'Jan', income: 400, expenses: 240 },
    { name: 'Feb', income: 300, expenses: 139 },
    // Other months...
];

const pieData = [
    { name: 'Food', value: 400 },
    { name: 'Utilities', value: 300 },
    // Other categories...
];

const Charts = () => {
    return (
        <ChartsContainer>
            <h2>Charts</h2>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="income" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="expenses" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie data={pieData} dataKey="value" outerRadius={80}>
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={['#ff7300', '#0088FE'][index % 2]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </ChartsContainer>
    );
};

export default Charts;
