
import { useState } from 'react';
import { ThemeToggle } from './Toggles.jsx'
import { MenuToggle } from './Toggles.jsx'
import { Link } from 'react-router-dom';
import './nav_top.css'

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

function DesktopNav({activePage}) {
    return(
        <>
            <div className="navigation-left">
                <Logo />
                <NavigationLinks activePage={activePage} />
            </div>            
            <ThemeToggle />            
        </>
    )
}

function MobileMenu({isActive}) {
    var menuToBeShown = isActive;
    var menuClassNames = "side-menu";
    if (menuToBeShown == true)
        menuClassNames += " side-menu-active";

    return(
        <aside className={menuClassNames} id="sideMenu">
            <div className='side-menu-outer'>
                <div className="side-menu-inner">
                    <NavigationLinks />                
                </div>
                <ThemeToggle /> 
            </div>
        </aside>
    )
}

function MobileNav({buttonClass, menuToggle}) {   
    return(
        <>
            <div className="navigation-left">
                <Logo />                
            </div>            
            <MenuToggle buttonClass={buttonClass} handleClick={menuToggle} />                        
        </>
    )
}

function MenuOverlay({isActive}) {
    return(
        <div className={isActive ? "menu-overlay" : ""}></div>
    )
}

function NavTop({activePage}) {
    const [buttonActive, setMenuClass] = useState("menu-toggle-outer");
    const [isMenuActive, setMenuActive] = useState(false);

    function menuToggle() {
        buttonActive == "menu-toggle-outer" 
        ? setMenuClass("menu-toggle-outer menu-toggle-active") 
        : setMenuClass("menu-toggle-outer");
        setMenuActive(!isMenuActive);
    }

    const viewWidth = document.body.clientWidth;
    let navigationView = viewWidth <= 950 
        ? <MobileNav buttonClass={buttonActive} menuToggle={menuToggle} /> 
        : <DesktopNav activePage={activePage} />
   
    return(      
        <>
            <nav>
                {navigationView}    
                <MobileMenu isActive={isMenuActive} />    
            </nav>  
            <MenuOverlay isActive={isMenuActive} /> 
        </>                 
    )
}

export default NavTop;