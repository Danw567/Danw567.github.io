import React, { useEffect } from 'react';
import Navigation from "./components/nav/Navigation";
import Footer from './components/nav/nav/nav_bottom';
import Button from "./components/atoms/cta_button.jsx"; 
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
        description_paragraphs: [
            "This was a theme created while I was working for Freewebstore.",
            "The design was made to adhere to modern SEO strategies and design patterns with Javascript powered horizontal sliders to coincide with more modern mobile-first ideologies.",
            "Within the first week of launching the theme on the platform, over 1000 stores chose to build their stores on it. The image of the design you see here is of the base design I created, there are some product names that may look as they have been created for testing purposes, because they were."
        ], 
        techUsed: ["HTML", "CSS", "Javascript", "JQuery"]
    },
    {
        name: "Crafty - Store Template Defrag Design", 
        image: "/images/project_images/crafty-design-defrag.webp", 
        url: "https://www.defrag.lt/", 
        description_paragraphs: [
            "This project was helping a personal friend set up their store on Freewebstore using the theme I created.",
            "Now, I don't agree with guns, but my friend resides in Lithuania where guns are plentiful and he works to secure them with specialised gun safes. So I might not agree with guns being available, however, I can work to keep them safe, in safes.... HA.",
            "With this project, I designed his logo and created the banner content in between the banner sections whilst also adding some further functionality using Javascript.",
            "This was a project for someone who was seeking to start their personal business journey. As a result of setting the store up, my friend has seen his business flourish with his new online store."
        ], 
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
            <img src={imageSrc} alt={`screenshot of ${name}`} />
            <div className="hover-secondary-container">
                <Button type="secondary" cta="View Project" linkTo={url} title={`View ${name}`} />
            </div>
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
                            <div className="project-section-text">
                                {proj.description_paragraphs.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                                <Button type="primary" cta="View Project" linkTo={proj.url} title={`View ${proj.name}`} />
                            </div>
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