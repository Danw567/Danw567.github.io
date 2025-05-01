import './nav_bottom.css';
import { Logo } from './nav_top';
import { EmailBtn, LinkedInBtn } from './Toggles';

function Contact() {
    return(
        <div className="footer-right">
            <EmailBtn />
            <LinkedInBtn />
        </div>
    )
}

function FooterLogo() {
    return(
        <div className="footer-left">
            <Logo />
            <span className="footer-year">{new Date().getFullYear()}</span>
        </div>
    )
}
 

export default function Footer() {

    return(
        <footer>
            <div className="container">
                <FooterLogo />
                <Contact />
            </div>            
        </footer>
    )
}