import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { FaMagento } from 'react-icons/fa';

export const Nav = styled.nav`
    height:80px;
    position: sticky;
    background-color: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    z-index: 999;
    top: 0;
`;

export const NavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    
    ${Container}
`;

export const NavLogo = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    color: #fff;
    font-size: 2rem;
`;

export const NavLogoIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width:960px) {
        display: block;
        position: absolute;
        /* 
            Instead of here, the color is mentioned in <IconContext.Provider> in NavBar component 
            So that no need to mention the same color:#fff in other places.
        */
        /* color: #fff; */
        right: 0;
        top: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }    
`;

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width:960px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 90vh;
        top: 80px;
        position: absolute;
        left: ${(props) => (props.openMenu ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background-color: #101522;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    /* border-bottom: 4px solid transparent; */

    &:hover {
        border-bottom: 4px solid #4b59f7;
    }
    
    @media screen and (max-width:960px) {
        width: 100%;
        border-bottom: 4px solid transparent;

        &:hover {
            border: none;
        }
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width:960px) {
        display: flex;
        width: 100%;
        text-align: center;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

export const NavBtnItem = styled.li`

    list-style: none;
    height: 80px;
    display: flex;
    align-items: center;
    /* border-bottom: 4px solid transparent; */


    @media screen and (max-width:960px) {
        width: 100%;
        height: 80px;
        border-bottom: 4px solid transparent;

        &:hover {
            border-bottom: none;
        }
    }
`;

export const NavBtnLink = styled(Link)`
    padding: 8px 16px;

    &:hover {
        border-bottom: 4px solid transparent;
    }
    
    @media screen and (max-width:960px) {
        width: 100%;
        transition: all 0.3s ease;
    }
`;
