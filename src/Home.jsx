import Navigation from "./components/nav/Navigation";
import Button from "./components/atoms/cta_button.jsx"
import { InlineLink } from "./components/atoms/cta_button.jsx";
import React from 'react';

function Image() {
    return(
        <div className="image-with-border">
            <div className="inner">
                <img height="500" width="500" src="src/assets/images/me.jpg" alt="Me on a walk with a view of the surrounding scenery in the background" />
            </div>
        </div>
    )
}

function LandingSection() {
    return(        
        <section>
            <div className="hero-section">
                <Image />
                <div className="hero-section-text">
                    <h1>Daniel Widdup</h1>
                    <h2>Full-stack Developer</h2>
                    <p><strong>I craft intuitive, secure, and scalable web experiences.</strong></p>
                    <p>With hands-on SaaS experience and a passion for user-first design, I work across JavaScript, C#, ASP.NET, AWS, and SQL to bring ideas to life through clean code and thoughtful development.</p>
                    <p>This portfolio is built as part of my journey learning React — constantly improving, building, and pushing my skills forward.</p>
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