import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Button, Hidden, Drawer, List, ListItem, ListItemText, Box, Link } from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: '20px 0',
        transition: 'all 0.3s ease',
        '&.scrolled': {
            backgroundColor: 'rgba(10, 25, 47, 0.85)',
            backdropFilter: 'blur(10px)',
            padding: '15px 0',
            boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
        },
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 25px',
    },
    logo: {
        color: '#64ffda !important',
        fontSize: '22px',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '-0.5px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'none',
        },
        '&:before': {
            content: '""',
            display: 'block',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: '2px solid #64ffda !important',
            position: 'absolute',
            left: '-8px',
            transform: 'rotate(45deg)',
            zIndex: -1,
        },
    },
    navLinks: {
        display: 'flex',
        alignItems: 'center',
    },
    navLink: {
        color: 'var(--lightest-slate) !important',
        margin: theme.spacing(0, 2),
        fontSize: '16px',
        fontFamily: "'NTR', sans-serif",
        transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        cursor: 'pointer',
        '&:hover': {
            color: '#64ffda !important',
            textDecoration: 'none',
        },
    },
    navLinkNumber: {
        color: '#64ffda !important',
        marginRight: '5px',
        fontWeight: 500,
    },
    resumeButton: {
        marginLeft: '15px',
        background: 'transparent',
        color: '#64ffda !important',
        border: '1px solid #64ffda !important',
        borderRadius: '4px',
        padding: '10px 16px',
        fontSize: '14px',
        fontFamily: "'Poppins', sans-serif",
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'rgba(100, 255, 218, 0.1)',
            transform: 'translateY(-2px)',
        },
    },
    menuButton: {
        color: theme.palette.secondary.main,
    },
    drawer: {
        width: 240,
    },
    drawerPaper: {
        width: 240,
        backgroundColor: theme.palette.background.paper,
    },
    drawerHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: theme.spacing(1, 2),
    },
    drawerLink: {
        color: theme.palette.text.primary,
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const scrollToSection = (sectionId) => {
        // If on the link page and clicking anything but "Link", go to main page first
        const isOnLinkPage = window.location.pathname === '/link';

        if (sectionId === 'link') {
            if (!isOnLinkPage) {
                window.location.href = '/link';
            }
            return;
        }

        if (isOnLinkPage) {
            window.location.href = `/#${sectionId}`;
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Offset for the navbar height
                behavior: 'smooth'
            });
            handleDrawerClose();
        }
    };

    const navItems = [
        { name: 'Home', path: 'home', number: '01' },
        { name: 'About', path: 'about', number: '02' },
        { name: 'Experience', path: 'experience', number: '03' },
        { name: 'Projects', path: 'projects', number: '04' },
        { name: 'Contact', path: 'contact', number: '05' },
    ];

    return (
        <AppBar position="fixed" className={`${classes.appBar} ${scrolled ? 'scrolled' : ''}`}>
            <Toolbar className={classes.toolbar}>
                <Link
                    component="a"
                    onClick={() => scrollToSection('home')}
                    className={classes.logo}
                >
                    Samonide
                </Link>

                <Hidden smDown>
                    <Box className={classes.navLinks}>
                        {navItems.map((item) => (
                            <Link
                                component="a"
                                key={item.number}
                                className={classes.navLink}
                                onClick={() => scrollToSection(item.path)}
                            >
                                <span className={classes.navLinkNumber}>{item.number}.</span> {item.name}
                            </Link>
                        ))}
                        <Button
                            className={classes.resumeButton}
                            variant="outlined"
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </Button>
                    </Box>
                </Hidden>

                <Hidden mdUp>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>

            <Drawer
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose} className={classes.menuButton}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <List>
                    {navItems.map((item) => (
                        <ListItem
                            button
                            key={item.number}
                            onClick={() => scrollToSection(item.path)}
                        >
                            <ListItemText
                                primary={
                                    <div className={classes.drawerLink}>
                                        <div className={classes.navLinkNumber}>{item.number}.</div>
                                        {item.name}
                                    </div>
                                }
                            />
                        </ListItem>
                    ))}
                    <ListItem>
                        <Button
                            className={classes.resumeButton}
                            variant="outlined"
                            fullWidth
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar; 