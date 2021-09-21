import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from '../logo.png'
import { Navbar, NavbarBrand, NavLink, Nav } from 'shards-react';

const NavigationBar = () => {
    const active = useLocation().pathname;
    const isActive = 'text-decoration-none text-white';
    const isNotActive = 'text-decoration-none text-white-50';
    return (
        <>
            <Navbar type="dark" theme="dark" className='responsive-navbar'>
                <NavbarBrand href='/' className='position-absolute'>
                    <img alt="Logo" src={logo} height='45' width='45'/>
                    <span className='d-none d-sm-inline ms-2'>Books</span>
                </NavbarBrand>
                <Nav className='mx-auto'>
                    <NavLink><Link to='/' className={active === '/' ? isActive : isNotActive}>Home</Link></NavLink>
                    <NavLink><Link to='/about' className={active === '/about' ? isActive : isNotActive}>About</Link></NavLink>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavigationBar
