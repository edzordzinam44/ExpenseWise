import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: 400px;
`;

const Charts = () => {
    const data = [
        { month: 'Jan', expenses: 2400, income: 4000 },
        { month: 'Feb', expenses: 1398, income: 3000 },
        { month: 'Mar', expenses: 9800, income: 2000 },
        { month: 'Apr', expenses: 3908, income: 2780 },
        { month: 'May', expenses: 4800, income: 1890 },
        { month: 'Jun', expenses: 3800, income: 2390 },
    ];

    return (
        <ChartCard>
            <h2 className="text-xl font-semibold mb-4">Spending Overview</h2>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
                    <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
    );
};