import React from "react";
import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as InstagranIcon} from './instagram.svg'
function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante projeto Uninassau
            <div className="footer-icons">
                <a href="https://www.youtube.com/watch?v=8zIezHuu8SM" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/uninassau/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/uninassau/?hl=en" target="_new">
                    <InstagranIcon />
                </a>
            </div>
        </footer>
    )
    
}

export default Footer;