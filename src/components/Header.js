// import React from 'react'
//this only needs to be done if using class components

import React from "react";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

const Header = () => {
    return (
        <header>
            <Navbar className = "header">
                <NavbarBrand href="/">React Library</NavbarBrand>
                <Nav className = "ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/jesnadolski/react_fundamentals">Github</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
        
    )
};

export default Header;