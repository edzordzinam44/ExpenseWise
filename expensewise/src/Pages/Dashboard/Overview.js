import React from 'react';
import styled from 'styled-components';

const OverviewCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  .trend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    
    &.up { color: ${({ theme }) => theme.colors.success}; }
    &.down { color: ${({ theme }) => theme.colors.danger}; }
  }
`;

const Overview = () => {
    return (
        <OverviewCard>
            <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
            <CardGrid>
                <StatCard>
                    <h3>Total Balance</h3>
                    <p>$12,450.00</p>
                    <div className="trend up">
                        <i className="fas fa-arrow-up"></i>
                        <span>+8.2% from last month</span>
                    </div>
                </StatCard>
                <StatCard>
                    <h3>Monthly Spending</h3>
                    <p>$3,250.00</p>
                    <div className="trend down">
                        <i className="fas fa-arrow-down"></i>
                        <span>-2.4% from last month</span>
                    </div>
                </StatCard>
                <StatCard>
                    <h3>Savings Goal</h3>
                    <p>75%</p>
                    <div className="trend up">
                        <i className="fas fa-arrow-up"></i>
                        <span>On track</span>
                    </div>
                </StatCard>
            </CardGrid>
        </OverviewCard>
    );
};