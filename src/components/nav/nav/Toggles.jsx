
import { useState } from 'react';
import './toggles.css';


export function LinkedInBtn() {
    return(
        <a href='https://www.linkedin.com/in/daniel-widdup-215a16201' rel="noopener noreferrer" className="social-icon-outer" title="View my LinkedIn profile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
        </a>
    )
}

export function EmailBtn() {
    return(
        <a href="mailto:danielwiddup7@gmail.com" className="social-icon-outer" title="Email me">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>        
        </a>
    )
}

function LightModeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M480-373q44.58 0 75.79-31.21Q587-435.42 587-480q0-44.58-31.21-75.79Q524.58-587 480-587q-44.58 0-75.79 31.21Q373-524.58 373-480q0 44.58 31.21 75.79Q435.42-373 480-373Zm0 54q-68 0-114.5-46.5T319-480q0-68 46.5-114.5T480-641q68 0 114.5 46.5T641-480q0 68-46.5 114.5T480-319ZM213-453H53v-54h160v54Zm694 0H747v-54h160v54ZM453-747v-160h54v160h-54Zm0 694v-160h54v160h-54ZM275-649 174-749l36-38 100 99-35 39Zm475 475-98-96 34-40 100 99-36 37ZM649-685l100-101 38 36-99 100-39-35ZM174-211l96-97 38 34-98 101-36-38Zm306-269Z"/>
        </svg>
    )
}

function DarkModeIcon() {
    return (        
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M483-159q-133.75 0-227.38-93.62Q162-346.25 162-480q0-118.42 75.29-206.71T425-796q-5 0-7.5-.5t.5-.5q-5 29-7.5 59t-2.5 55q0 114.67 82.67 196.33Q573.33-405 689-405q25.89 0 50.95-1Q765-407 798-417v-5q-20 112.42-108.29 187.71T483-159Zm0-54q73 0 136.5-37.5T718-352q-6 0-14 .5t-14 .5q-139.62 0-237.81-97.02T354-683q0-11 .5-19t1.5-13q-65 35-102.5 98T216-480q0 110.61 78.19 188.81Q372.39-213 483-213Zm-16-251Z"/>
        </svg>
    )
}


export function ThemeToggle() {   
    let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    let storedTheme = window.localStorage.getItem("preferredTheme");
    let defaultTheme = storedTheme ?? systemTheme;
    const [colorTheme, setColorTheme] = useState(defaultTheme); 

    function handleClick() {    
        var themeToSet = colorTheme == "light" ? "dark" : "light"
        setColorTheme(themeToSet);
        window.localStorage.setItem("preferredTheme", themeToSet);
    }
    
    if (storedTheme) {
        document.querySelector("html").setAttribute("data-theme", storedTheme);
    } else {        
        document.querySelector("html").setAttribute("data-theme", colorTheme);       
    }

    let icon = colorTheme == "light" ? <DarkModeIcon /> : <LightModeIcon />;

    return (        
        <div className="theme-toggle-icon" onClick={handleClick} title="toggle light/dark theme">
            {icon}
        </div>
    )
}

export function MenuToggle({buttonClass, handleClick}) {   

    return(
        <div className={buttonClass} onClick={handleClick}>
            <div className="menu-toggle">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}

