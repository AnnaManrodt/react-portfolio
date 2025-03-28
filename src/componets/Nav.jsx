import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../css/nav.css'

export default function Nav() {
    const [open, setOpen] = useState(false); // State to control drawer visibility
    const [currentSection, setCurrentSection] = useState('');

    // Handle section highlighting on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const id = section.id;
                const offset = section.getBoundingClientRect().top;
                if (offset < window.innerHeight / 2) {
                    setCurrentSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle the drawer open/close
    const toggleDrawer = () => {
        setOpen(!open);
    };

    // Close the drawer when a link is clicked
    const closeDrawer = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline />

            {/* AppBar (Navigation Bar) */}
            <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    {/* Hamburger Menu Icon */}
                    <IconButton edge="start" color="alarm" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer (Side Navigation) */}
            <Drawer anchor="left" open={open} onClose={closeDrawer}>
                <List>
                    <ListItem button onClick={closeDrawer}>
                        <NavLink to="/aboutme" activeClassName="active-link">
                            <ListItemText primary="About Me" />
                        </NavLink>
                    </ListItem>
                    <ListItem button onClick={closeDrawer}>
                        <NavLink to="/contact" activeClassName="active-link">
                            <ListItemText primary="Contact" />
                        </NavLink>
                    </ListItem>
                    <ListItem button onClick={closeDrawer}>
                        <NavLink to="/portfolio" activeClassName="active-link">
                            <ListItemText primary="Portfolio" />
                        </NavLink>
                    </ListItem>
                    <ListItem button onClick={closeDrawer}>
                        <NavLink to="/resume" activeClassName="active-link">
                            <ListItemText primary="Resume" />
                        </NavLink>
                    </ListItem>
                </List>
            </Drawer>

        </div>
    );
}
