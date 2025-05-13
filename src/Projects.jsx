import React, { useEffect } from 'react';
import Navigation from "./components/nav/Navigation";
import Footer from './components/nav/nav/nav_bottom';
import { onPageLoad } from './utilites';

const myProjects = [
    // image dimensions = 480 x 400
    {
        name: "Designer Posh Watches - Store template", 
        image: "/images/project_images/dpw-portfolio-screenshot.webp", 
        url: "https://www.designerposhwatches.co.uk/", 
        description_paragraphs: [
            "This was a project I took on for a user's store on the Freewebstore platform using Freewebstore's own theme builder.",
            "They requested a more up-to-date theme that was SEO optimised and performed well for performance analysis tools.", 
            "My contact for Designer Posh Watches provided a detailed specification with some image examples for how they wanted their new store theme to look and behave. After an iterative testing process and a complete sign off, the theme went live in December of 2023.", 
            "The business has since seen a 23% increase of organic traffic and sales have been up year on year since the build."],
        techUsed: ["HTML", "CSS", "Javascript", "JQuery"]
    },
    {
        name: "Crafty - Store Template Base Design", 
        image: "/images/project_images/crafty-base-design.webp", 
        url: "https://crafty.fws.store/", 
        description_paragraphs: ["This was a "], 
        techUsed: ["HTML", "CSS", "Javascript", "JQuery"]
    },
    {
        name: "Crafty - Store Template Defrag Design", 
        image: "/images/project_images/crafty-design-defrag.webp", 
        url: "https://www.defrag.lt/", 
        description_paragraphs: ["some description"], 
        techUsed: ["HTML", "CSS", "Javascript", "JQuery"]
    }
]

function TechStackPill({techName}) {
    return(
        <a className='pill' title={`filter by projects that use ${techName}`}>{techName}</a>
    )
}

function ProjectImage({imageSrc, name, url}) {
    return(
        <a href={url} target="_blank" className='project-section-image' title={`View ${name} site`}>
            <div className="view-proj-overlay"></div>
            <img src={imageSrc} alt={`screenshot of ${name}`} />
        </a>
    )
}

function MyProjects() {
    return(
        <>
            {myProjects.map((proj, i) => (
                <section key={i}>
                    <div className="project-section">                        
                        <ProjectImage imageSrc={proj.image} name={proj.name} url={proj.url} />
                        <div className='project-section-info'>
                            <h2>{proj.name}</h2>
                            <div className='stack-usage'>
                                {proj.techUsed.map((tech, index) => (
                                    <TechStackPill key={index} techName={tech} />
                                ))}
                            </div>
                            {proj.description_paragraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
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
                    <p className="margin-bottom">This section of my portfolio lists the things I have worked on, both personally and professionally.</p>
                </section>
                <MyProjects />
                
            </main>
            <Footer />
        </>
    )
}

export default ProjectsPage;