
import { useState } from 'react';
import './theme_toggle.css';

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


function ThemeToggle() {   
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

export default ThemeToggle;