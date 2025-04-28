import Navigation from "./components/nav/Navigation";
import Button from "./components/atoms/cta_button.jsx"
import { InlineLink } from "./components/atoms/cta_button.jsx";
import React from 'react';

function Image() {


    return(
        <div className="image-with-border">
            <div className="inner">
                <img src="https://plus.unsplash.com/premium_photo-1676299910876-747eeb0c11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fHww" alt="tast image" />
            </div>
        </div>
    )
}

function HomePage() {
    return (
        <>
            <Navigation activePage="Home" />

            <h1>d.widdup</h1>
            <section style={{ margin: 20 }}>
                <Image />


                {/* <Button type="primary" cta="Call To Action" onclick="" linkTo="" titleText="I am a call to action title" />
                <Button type="secondary" cta="Call To Action" onclick="" linkTo="" titleText="I am a call to action title" />
                <Button type="link" cta="Call To Action" onclick="" linkTo="" titleText="I am a call to action title" />

                <p>This is a random sentence with a <InlineLink text="random" link="" titleText="I am a call to action title" /> link inside of it</p> */}
            </section>

        </>
    )
}

export default HomePage;