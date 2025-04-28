import Navigation from "./components/nav/Navigation";
import Button from "./components/atoms/cta_button.jsx"
import { InlineLink } from "./components/atoms/cta_button.jsx";
import React from 'react';

function Image() {
    return(
        <div className="image-with-border">
            <div className="inner">
                <img height="500px" width="500px" src="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww" alt="tast image" />
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
                    <p>Hey, I am a full stack Developer from Colne, yadaydaydaydya</p>
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