import React, { useEffect } from 'react';
import Navigation from "./components/nav/Navigation";
import { InlineLink } from './components/atoms/cta_button';  
import { ImageOfMe } from './Home';
import Footer from './components/nav/nav/nav_bottom';
import { onPageLoad } from './utilites';

const uniStarted = 2019; // uni started in 2019
let thisYear = new Date().getFullYear();
let yearsDiff = thisYear - uniStarted;

function CourseBadges() {
    return(
        <aside className='about-badges-cont'>
            <img src="images/code_for_data.webp" alt="Badge for 'Learn to code for data analysis'" />
            <img src="images/Intro_Cybersec_badge.webp" alt="Badge for 'Introduction to cyber security stay safe online'" />
            <img src="images/Discovering_comp_networks_badge.webp" alt="Badge for 'Discovering computer networks'" />
        </aside>
    )
}

function MyTechStack() {
    
    const techStack = [
        {tech: "HTML", key: 0, image: "/images/html-5.webp"},
        {tech: "CSS", key: 1, image: "/images/CSS.webp"},
        {tech: "JavaScript", key: 2, image: "/images/js.webp"},
        {tech: "JQuery", key: 3, image: "/images/jquery.webp"},
        {tech: "C#", key: 4, image: "/images/c.webp"},
        {tech: "Asp.NET", key: 5, image: "/images/aspnet.webp"},
        {tech: "AWS", key: 6, image: "/images/AWS.webp"},
        {tech: "MySQL", key: 7, image: "/images/MySQL.webp"},
        {tech: "Git", key: 8, image: "/images/git.webp"}
    ]
    
    const listStack = techStack.map(item => 
        <li key={item.key}>
            <img loading='lazy' src={item.image} alt={item.tech} />
        </li>
    )

    return(
        <ul className="tech-stack">{listStack}</ul>
    )
}

function AboutPage() {
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
            <Navigation activePage="About Me" />
            <main>
                <section className='about'>
                    <h1>My Story</h1>
                    <article className="sticky-content">
                        <div className="about-image-cont">
                            <ImageOfMe />
                        </div> 
                        <div className="content-wbg">
                            <p>Hey, I'm Dan, or Danny, or Daniel, whichever feels right. I honestly don’t mind!</p>
                            
                            <p>For over a decade, I worked as a fishmonger, most recently at AO Seafoods Ltd. It was honest, hands-on work... but waking up at 2am every day? Not exactly a long-term dream.</p>
                            <p>About {yearsDiff} years ago, one of those early mornings hit differently. I decided I needed a change — something that didn't involve fish scales before sunrise. So I dove into a bunch of free online courses through the Open University’s <InlineLink text="OpenLearn" link="https://www.open.edu/openlearn/" titleText="View courses for the Open University" /> platform.</p>

                            <CourseBadges />

                            <p>That’s where things clicked. I discovered a real passion for coding, building things from scratch, and digging into Cyber Security case studies that totally fascinated me.</p>
                            <p>Fast forward a bit, and I took the leap into a BSc (Hons) degree in Cyber Security with the Open University. A couple of years, and a lot of job applications, later, freewebstore took a chance on me: an adult student eager to learn, ready to throw himself into tech.</p>

                            <p><strong>And just like that, my journey as a web developer began!</strong></p>

                            <p>My tech stack includes:</p>
                            <MyTechStack />
                            {/* <aside>ANOTHER GOOD OP FOR SOME BADGES?</aside>    */}
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage;