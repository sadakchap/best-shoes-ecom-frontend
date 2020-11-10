import React, { useState } from 'react'
import { MenuWrapper, NavbarWrapper, NavItemLink, NavList, NavListItem, NavLogoLink } from './NavbarElements';
import { BiMenuAltRight } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti'


const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <>
            <NavbarWrapper>
                <NavLogoLink to="/" >Logo</NavLogoLink>
                <NavList isOpen={isNavOpen}>
                    <NavListItem>
                        <NavItemLink to="/">Home</NavItemLink>
                    </NavListItem>
                    <NavListItem>
                        <NavItemLink to="/cart">Cart</NavItemLink>
                    </NavListItem>
                    <NavListItem>
                        <NavItemLink to="/signin">signin</NavItemLink>
                    </NavListItem>
                    <NavListItem>
                        <NavItemLink to="/signup">sign up</NavItemLink>
                    </NavListItem>
                    <NavListItem>
                        <NavItemLink to="/signout">sign out</NavItemLink>
                    </NavListItem>
                </NavList>
                <MenuWrapper>
                    { isNavOpen ? (
                        <TiTimes size="1.5rem" style={{ cursor: "pointer" }} onClick={toggleNav} />
                    ) : (
                        <BiMenuAltRight size="1.5rem" style={{ cursor: "pointer" }} onClick={toggleNav} />
                    )}
                    
                </MenuWrapper>
            </NavbarWrapper>
        </>
    )
}

export default Navbar
