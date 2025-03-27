import { Typography } from "@mui/material";
import React from "react";
import { SocialIcon } from 'react-social-icons'
import '../css/footer.css'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="social-icons">
                    <SocialIcon target="_blank"  url="https://github.com/annamanrodt" className="footerIcon" />
                    <SocialIcon target="_blank"  url="https://www.linkedin.com/in/anna-thompson-515184307/" className="footerIcon" />
                    <SocialIcon target="_blank"  url="https://stackoverflow.com/users/25394561/annathompson" className="footerIcon" />
                </div>
                <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                    Anna Thompson – Web Developer & Designer
                </Typography>
            </footer>
        </div>
    )
}