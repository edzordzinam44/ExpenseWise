import React from 'react';
import styled from 'styled-components';

const OverviewContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 10px;
    padding: 20px;
`;

const Stat = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
`;

const ProgressBar = styled.div`
    height: 10px;
    background: ${({ theme }) => theme.colors.progressBackground};
    border-radius: 5px;
    margin-top: 10px;
`;

const Progress = styled.div`
    width: ${({ progress }) => progress}%;
    background: ${({ theme }) => theme.colors.progress};
    height: 100%;
    border-radius: 5px;
`;

const Overview = () => {
    return (
        <OverviewContainer>
            <h2>Overview</h2>
            <Stat><span>Total Income:</span> <span>$10,000</span></Stat>
            <Stat><span>Total Expenses:</span> <span>$5,500</span></Stat>
            <Stat><span>Net Worth:</span> <span>$4,500</span></Stat>
            <h4>Budget Utilization</h4>
            <ProgressBar>
                <Progress progress={55} />
            </ProgressBar>
        </OverviewContainer>
    );
};

export default Overview;
