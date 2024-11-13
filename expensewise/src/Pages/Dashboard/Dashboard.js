import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';

// Theme configuration
const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#1e293b',
    borderColor: '#e2e8f0',
    success: '#22c55e',
    danger: '#ef4444',
    warning: '#f59e0b'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  }
};

// Styled Components
const DashboardContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MainContent = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthSection = styled.div`
  grid-column: 1 / -1;
`;

// Header Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Overview Components
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

// Transaction Components
const TransactionCard = styled(OverviewCard)``;

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

// Chart Components
const ChartCard = styled(OverviewCard)`
  height: 400px;
`;

// Budget Components
const BudgetCard = styled(OverviewCard)``;

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

// Component Functions
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="ExpenseWise" />
      <Nav>
        <NavItem href="/dashboard">
          <i className="fas fa-chart-line"></i> Overview
        </NavItem>
        <NavItem href="/profile">
          <i className="fas fa-user"></i> Profile
        </NavItem>
        <NavItem onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const Overview = () => (
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

// Main Dashboard Component
const Dashboard = () => {
    console.log('Dashboard is rendering');

  return (
    <ThemeProvider theme={theme}>
      <DashboardContainer>
        <Header />
        <MainContent>
          <FullWidthSection>
            <Overview />
          </FullWidthSection>
          <Charts />
          <Budgeting />
          <FullWidthSection>
            <TransactionHistory />
          </FullWidthSection>
        </MainContent>
      </DashboardContainer>
    </ThemeProvider>
  );
};

export default Dashboard;