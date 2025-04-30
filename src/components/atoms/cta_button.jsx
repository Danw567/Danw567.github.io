
import './atoms.css';

export function InlineLink({text, link, titleText}) {
    return(
        <a rel="noopener noreferrer" className="inline-link" href={link} title={titleText}>
            {text}
        </a>
    )
}


function Button({type, cta, onclick, linkTo, titleText}) {
    let buttonClass = "button ";
    if (type == "primary") {
        buttonClass += "button-primary";
    } else if (type == "secondary") {
        buttonClass += "button-secondary";
    } else if(type == "link") {
        buttonClass += "button-link"
    }

    return(
        <a className={buttonClass} href={linkTo} title={titleText}>{cta}</a>
    )
}

export default Button;