import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textLight};
`;

const Nav = styled.nav`
    display: flex;
    gap: 15px;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title>ExpenseWise</Title>
            <Nav>
                <img src="/path/to/profile-image.jpg" alt="Profile" />
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
