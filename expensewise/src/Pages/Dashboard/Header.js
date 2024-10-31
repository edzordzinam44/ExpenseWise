import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/logo.png';

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
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

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
                <NavItem href="#" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                </NavItem>
            </Nav>
        </HeaderContainer>
    );
};