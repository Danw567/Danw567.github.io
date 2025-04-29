import Navigation from "./components/nav/Navigation";
import Button from "./components/atoms/cta_button.jsx"
import { InlineLink } from "./components/atoms/cta_button.jsx";
import React from 'react';

export function ImageOfMe() {
    return(
        <div className="image-with-border">
            <div className="inner">
                <img height="500" width="500" src="images/me.jpg" alt="Me on a walk with a view of the surrounding scenery in the background" />
            </div>
        </div>
    )
}

function LandingSection() {
    return(        
        <section>
            <div className="hero-section">
                <ImageOfMe />
                <div className="hero-section-text">
                    <h1>Daniel Widdup</h1>
                    <h2>Full-stack Developer</h2>
                    <p><strong>I craft intuitive, secure, and scalable web experiences.</strong></p>
                    <p>With hands-on SaaS experience and a passion for user-first design, I work across JavaScript, HTML, CSS, C# and ASP.NET to bring ideas to life through clean code and thoughtful development.</p>
                    <p>This portfolio is built as part of my journey learning React. Constantly improving, building, and pushing my skills forward.</p>
                </div>
            </div>
        </section>      
    )
}

function HomePage() {
    return (
        <>
            <Navigation activePage="Home" />  
            <main>                    
                <LandingSection />
            </main>
        </>
    )
}

export default HomePage;