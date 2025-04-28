

import { useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import './nav_top.css'
import { Link } from 'react-router-dom';

function NavLink({linkName, linkHref, isActive}) {    
    return(
        <Link className="nav-link" data-active={isActive} to={linkHref}>
            {linkName}
        </Link>
    )
}

function NavigationLinks({activePage}) {

    const navLinks = [
        {name: 'Home', href: '/'},
        {name: 'About Me', href: '/About'},
        {name: 'Contact', href: '/Contact'},
        {name: 'Projects', href: '/Projects'},
        {name: 'Playground', href: '/Playground'}
    ]

    let linkList = [];
    navLinks.forEach((link, i) => {
        let isActive = false;
        
        if (link.name == activePage){
            isActive = true;
        }

        linkList.push(
            <NavLink linkName={link.name} linkHref={link.href} isActive={isActive} key={i} />
        );
    })

    return(
        <div className="nav-link-container">
            {linkList}
        </div>
    )
}

function Logo() {
    return(
        <>
            <Link to="/" className="logo">
                <span>D.WIDDUP</span>
                <span>full-stack developer</span>
            </Link>
        </>
    )
}



function NavTop({activePage}) {
    return(      
        <nav>
            <div className="navigation-left">
                <Logo />
                <NavigationLinks activePage={activePage} />
            </div>            
            <ThemeToggle />
            
        </nav>        
    )
}

export default NavTop;