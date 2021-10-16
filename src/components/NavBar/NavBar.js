import React, { useEffect, useState } from 'react'
import { Hamburger, Nav, NavBarContainer, NavBtnItem, NavBtnLink,  NavItem, NavLink, NavLogo, NavLogoIcon, NavMenu } from './NavBar.elements'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setOpenMenu(!openMenu);
    const showButton = () => {
        console.log('inner width:',window.innerWidth <= 960);
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();    
    }, [])

    window.onresize = () => {
        showButton();
    }

    return (
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="" onClick={() => setOpenMenu(false)}>
                        <NavLogoIcon />
                        ULTRA
                    </NavLogo>
                    <Hamburger onClick={handleClick}>
                        {openMenu ? <FaTimes /> : <FaBars /> }
                    </Hamburger>
                    <NavMenu openMenu={openMenu} onClick={handleClick}>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/products">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/services">Services</NavLink>
                        </NavItem>
                        <NavBtnItem>
                            <NavBtnLink to="/signup">
                                <Button primary fontBig={button ? false : true}>SIGNUP</Button>
                            </NavBtnLink>
                        </NavBtnItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default NavBar;