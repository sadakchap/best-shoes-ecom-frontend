import React, { useState } from 'react'
import { MenuWrapper, NavbarWrapper, NavItemLink, NavList, NavListItem, NavLogoLink } from './NavbarElements';
import { BiMenuAltRight } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti'
import { isAuth, signout } from '../../auth/helpers/auth';
import { useHistory } from 'react-router-dom';



const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const history = useHistory();

    const handleSignout = (e) => {
        e.preventDefault();
        signout(() => { 
            history.push('/signin');
        })
    }
    
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
                    { isAuth() ? (
                        <NavListItem>
                            <NavItemLink to="/signout" onClick={handleSignout} >sign out</NavItemLink>
                        </NavListItem>
                    ) : (
                        <>
                            <NavListItem>
                                <NavItemLink to="/signin">signin</NavItemLink>
                            </NavListItem>
                            <NavListItem>
                                <NavItemLink to="/signup">sign up</NavItemLink>
                            </NavListItem>
                        </>
                    )}
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
