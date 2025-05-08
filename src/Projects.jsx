import React, { useEffect } from 'react';
import Navigation from "./components/nav/Navigation";
import Footer from './components/nav/nav/nav_bottom';
import { onPageLoad } from './utilites';

const myProjects = [
    // image dimensions = 480 x 400
    {
        name: "some url", 
        image: "/images/project_images/dpw-portfolio-screenshot.webp", 
        url: "youtube.com", 
        description: "some description", 
        techUsed: ["HTML", "CSS", "Javascript", "React", "Typescript"]
    },
    {
        name: "some url", 
        image: "/images/project_images/crafty-base-design.webp", 
        url: "youtube.com", 
        description: "some description", 
        techUsed: ["HTML", "CSS", "Javascript", "React", "Typescript"]
    },
    {
        name: "some url", 
        image: "/images/project_images/crafty-design-defrag.webp", 
        url: "youtube.com", 
        description: "some description", 
        techUsed: ["HTML", "CSS", "Javascript", "React", "Typescript"]
    }
]

function TechStackPill({techName}) {
    return(
        <a className='' title={`filter by projects that use ${techName}`}>{techName}</a>
    )
}

function MyProjects() {
    return(
        <>
            {myProjects.map((proj, i) => (
                <section key={i}>
                    <div className="project-section">
                        <div className='project-section-image'>
                            <img src={proj.image} alt={`screenshot of ${proj.name}`} />
                        </div>
                        <div className='project-section-info'>
                            <h2>{proj.name}</h2>
                            <div className='stack-usage'>
                                {proj.techUsed.map(tech => (
                                    <TechStackPill techName={tech} />
                                ))}
                            </div>
                            <p>{proj.description}</p>
                        </div>  
                    </div>
                </section>
            ))}
        </>
    );
}

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
                <section>
                    <h1>My Projects</h1>
                    <p>This section of my portfolio lists the things I have worked on, both personally and professionally.</p>
                </section>
                <MyProjects />
                
            </main>
            <Footer />
        </>
    )
}

export default ProjectsPage;