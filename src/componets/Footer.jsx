import React from "react";
import { SocialIcon } from 'react-social-icons'

export default function Footer(){
    return(
        <div>
            <footer className="footer">
            <SocialIcon url="https://github.com/annamanrodt"  className="footerIcon"/>
            <SocialIcon url="https://www.linkedin.com/in/anna-thompson-515184307/" className="footerIcon"/>
            <SocialIcon url="https://stackoverflow.com/users/25394561/annathompson" className="footerIcon"/>
            </footer>
        </div>
    )
}