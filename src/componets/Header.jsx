import React from "react";
import { Link } from 'react-router-dom';
import Nav from "./Nav";
import '../css/header.css'
import { Typography } from "@mui/material";
export default function Header() {
    return (
        <div>
            <header className="header">
                <h1 className="title">
                    <Link to="/aboutme" className="myNameTitle">
                        Anna Thompson
                    </Link>
                    <Typography> Web Development & Design</Typography>
                </h1>
                <Nav />
            </header>
        </div>
    )
}