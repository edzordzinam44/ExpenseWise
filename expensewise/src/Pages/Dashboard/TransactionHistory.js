import React from 'react';
import styled from 'styled-components';

const TransactionCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  .transaction-info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.primary}20;
      color: ${({ theme }) => theme.colors.primary};
    }

    .details {
      h4 {
        font-weight: 500;
        margin-bottom: 0.25rem;
      }

      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .amount {
    font-weight: 600;
    &.expense { color: ${({ theme }) => theme.colors.danger}; }
    &.income { color: ${({ theme }) => theme.colors.success}; }
  }
`;

const TransactionHistory = () => {
    const transactions = [
        { id: 1, type: 'expense', title: 'Grocery Shopping', date: '2024-03-15', amount: 156.50, category: 'shopping' },
        { id: 2, type: 'income', title: 'Salary Deposit', date: '2024-03-14', amount: 3200.00, category: 'income' },
        { id: 3, type: 'expense', title: 'Netflix Subscription', date: '2024-03-13', amount: 14.99, category: 'entertainment' },
    ];

    return (
        <TransactionCard>
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <TransactionList>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id}>
                        <div className="transaction-info">
                            <div className="icon">
                                <i className={`fas fa-${transaction.type === 'expense' ? 'shopping-cart' : 'download'}`}></i>
                            </div>
                            <div className="details">
                                <h4>{transaction.title}</h4>
                                <p>{transaction.date}</p>
                            </div>
                        </div>
                        <span className={`amount ${transaction.type}`}>
                            {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toFixed(2)}
                        </span>
                    </Transaction>
                ))}
            </TransactionList>
        </TransactionCard>
    );
};