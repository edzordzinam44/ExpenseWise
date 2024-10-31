import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Overview from './Overview';
import TransactionHistory from './TransactionHistory';
import Charts from './Charts';
import Budgeting from './Budgeting';

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;

const MainContent = styled.div`
    padding: 20px;
    flex: 1;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Header />
            <MainContent>
                <Overview />
                <Charts />
                <TransactionHistory />
                <Budgeting />
            </MainContent>
        </DashboardContainer>
    );
};

export default Dashboard;
