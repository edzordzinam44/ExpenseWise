import React from 'react';
import styled from 'styled-components';

const BudgetCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const BudgetCategory = styled.div`
  margin-bottom: 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    h4 {
      font-weight: 500;
    }
    
    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 0.875rem;
    }
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  overflow: hidden;

  .fill {
    height: 100%;
    background: ${({ percentage }) => {
        if (percentage > 90) return ({ theme }) => theme.colors.danger;
        if (percentage > 70) return ({ theme }) => theme.colors.warning;
        return ({ theme }) => theme.colors.success;
    }};
    width: ${({ percentage }) => percentage}%;
    transition: width 0.3s ease;
  }
`;

const Budgeting = () => {
    const categories = [
        { name: 'Groceries', spent: 450, budget: 500 },
        { name: 'Transportation', spent: 180, budget: 200 },
        { name: 'Entertainment', spent: 280, budget: 300 },
        { name: 'Utilities', spent: 150, budget: 200 },
    ];

    return (
        <BudgetCard>
            <h2 className="text-xl font-semibold mb-4">Budget Tracking</h2>
            {categories.map((category, index) => {
                const percentage = (category.spent / category.budget) * 100;
                return (
                    <BudgetCategory key={index}>
                        <div className="header">
                            <h4>{category.name}</h4>
                            <span>${category.spent} / ${category.budget}</span>
                        </div>
                        <ProgressBar percentage={percentage}>
                            <div className="fill" />
                        </ProgressBar>
                    </BudgetCategory>
                );
            })}
        </BudgetCard>
    );
};