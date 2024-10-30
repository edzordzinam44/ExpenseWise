import React from 'react';
import styled from 'styled-components';

const TransactionContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBackground};
    padding: 20px;
    border-radius: 10px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: ${({ theme }) => theme.colors.text};
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background: ${({ theme }) => theme.colors.backgroundAlt};
    }
`;

const TransactionHistory = () => {
    return (
        <TransactionContainer>
            <h2>Transaction History</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow><td>01/10/2024</td><td>$100</td><td>Food</td><td>Groceries</td><td>Cash</td></TableRow>
                    {/* Additional rows here */}
                </tbody>
            </Table>
        </TransactionContainer>
    );
};

export default TransactionHistory;
