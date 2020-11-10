import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    margin: 0 auto;
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLogoLink = styled(Link)`
    height: 80px;
    font-size: 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        padding-top: 1rem;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 80%;
        background: white;
        position: absolute;
        min-height: 100vh;
        justify-content: flex-start;
        align-items: flex-start;
        transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 300ms ease-in-out;
        transform-origin: left;
        box-shadow: 2px 0 5px rgba(0,0,0,.2);
    }

`;

export const NavListItem = styled.li`
    list-style: none;
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const NavItemLink = styled(Link)`
    font-size: .9rem;
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 1rem;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    color: grey;
    letter-spacing: 1px;

    @media screen and (max-width: 768px){
        justify-content: flex-start;
        padding: 0 2rem;
    }
`;

export const MenuWrapper = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    height: 60px;

    @media screen and (max-width: 768px){
        display: flex;
    }
`;