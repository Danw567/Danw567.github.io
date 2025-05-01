import React, { useEffect } from 'react';
import Navigation from "./components/nav/Navigation";
import Footer from './components/nav/nav/nav_bottom';
import { onPageLoad } from './utilites';

function ProjectsPage() {
    useEffect(() => {
        if (document.readyState === 'complete') {
        onPageLoad();
        } else {
        window.addEventListener('load', onPageLoad, false);
        return () => window.removeEventListener('load', onPageLoad);
        }    
    })

    return(
        <>
            <Navigation activePage="Projects" />
            <main>
                <h1>ProjectsPage</h1>
                <h2>Coming soon</h2>
            </main>
            <Footer />
        </>
    )
}

export default ProjectsPage;