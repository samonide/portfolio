import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box, Grid, Hidden } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import '../styles/Home.css';

const useStyles = makeStyles((theme) => ({
    heroSection: {
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '0',
        marginBottom: '-60px',
    },
    greeting: {
        color: theme.palette.secondary.main,
        fontFamily: "'Poppins', sans-serif",
        fontSize: '14px',
        marginBottom: theme.spacing(2),
        letterSpacing: '1px',
    },
    name: {
        fontSize: '64px',
        fontWeight: 'bold',
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
        letterSpacing: '-1px',
    },
    tagline: {
        fontSize: '44px',
        fontWeight: 'bold',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        },
        letterSpacing: '-1px',
        lineHeight: 1.1,
    },
    description: {
        color: theme.palette.text.secondary,
        fontSize: '16px',
        maxWidth: '600px',
        marginBottom: theme.spacing(4),
        lineHeight: 1.7,
    },
    ctaButton: {
        marginTop: theme.spacing(2),
        padding: '16px 28px',
        fontSize: '16px',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        color: '#64ffda !important',
        borderColor: '#64ffda !important',
        textTransform: 'none !important',
        '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor: 'rgba(100, 255, 218, 0.1) !important',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '12px 20px',
            fontSize: '14px',
        },
    },
    primaryButton: {
        backgroundColor: 'rgba(100, 255, 218, 0.1)',
        '&:hover': {
            backgroundColor: 'rgba(100, 255, 218, 0.2)',
            transform: 'translateY(-3px)',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        },
    },
    buttonIcon: {
        marginLeft: theme.spacing(1),
    },
    buttonsContainer: {
        display: 'flex',
        gap: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(2),
            width: '100%',
            justifyContent: 'flex-start',
        },
    },
    highlight: {
        color: theme.palette.secondary.main,
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '8px',
            left: '0',
            width: '100%',
            height: '8px',
            background: 'rgba(100, 255, 218, 0.1)',
            zIndex: -1,
        },
    },
    fadeIn: {
        opacity: 0,
        animation: '$fadeInAnimation 0.5s ease forwards',
    },
    '@keyframes fadeInAnimation': {
        '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    animationContainer: {
        position: 'relative',
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    minimalistFrame: {
        position: 'relative',
        width: '260px',
        height: '260px',
        borderRadius: '4px',
        backgroundColor: 'transparent',
        border: `2px solid ${theme.palette.secondary.main}`,
        boxShadow: '0 0 20px rgba(100, 255, 218, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 0 30px rgba(100, 255, 218, 0.2)',
        },
    },
    minimalistCircle: {
        position: 'absolute',
        width: '90px',
        height: '90px',
        borderRadius: '50%',
        border: `1.5px solid ${theme.palette.secondary.main}`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: '$rotate 18s linear infinite',
        opacity: 0.85,
        transition: 'all 0.5s ease',
        '$minimalistFrame:hover &': {
            animation: '$rotate 8s linear infinite',
            width: '100px',
            height: '100px',
            opacity: 1,
        },
    },
    innerCircle: {
        position: 'absolute',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.secondary.main}`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: '$rotateReverse 12s linear infinite',
        opacity: 0.6,
        transition: 'all 0.5s ease',
        '$minimalistFrame:hover &': {
            animation: '$rotateReverse 6s linear infinite',
            width: '50px',
            height: '50px',
            opacity: 0.85,
        },
    },
    minimalistDot: {
        position: 'absolute',
        width: '6px',
        height: '6px',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '50%',
        animation: '$pulse 4s ease-in-out infinite',
        transition: 'all 0.5s ease',
        '$minimalistFrame:hover &': {
            animation: '$pulse 2.5s ease-in-out infinite',
            backgroundColor: theme.palette.secondary.light,
        },
    },
    smallDot: {
        position: 'absolute',
        width: '3px',
        height: '3px',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '50%',
        opacity: 0.7,
        transition: 'all 0.5s ease',
        '$minimalistFrame:hover &': {
            opacity: 1,
            transform: 'scale(1.3)',
        },
    },
    minimalistLine: {
        position: 'absolute',
        width: '50px',
        height: '1px',
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.5,
        transition: 'all 0.5s ease',
        '$minimalistFrame:hover &': {
            width: '60px',
            opacity: 0.7,
        },
    },
    '@keyframes rotate': {
        '0%': {
            transform: 'translate(-50%, -50%) rotate(0deg)',
        },
        '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg)',
        },
    },
    '@keyframes rotateReverse': {
        '0%': {
            transform: 'translate(-50%, -50%) rotate(0deg)',
        },
        '100%': {
            transform: 'translate(-50%, -50%) rotate(-360deg)',
        },
    },
    '@keyframes pulse': {
        '0%': {
            transform: 'scale(1)',
            opacity: 0.7,
        },
        '50%': {
            transform: 'scale(1.5)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1)',
            opacity: 0.7,
        },
    },
    '@keyframes bounce': {
        '0%': {
            transform: 'translateY(0)',
        },
        '50%': {
            transform: 'translateY(-8px)',
        },
        '100%': {
            transform: 'translateY(0)',
        },
    },
    cursorBlink: {
        display: 'inline-block',
        width: '3px',
        height: '56px',
        backgroundColor: theme.palette.secondary.main,
        marginLeft: '5px',
        verticalAlign: 'middle',
        animation: '$blink 1s step-end infinite',
        [theme.breakpoints.down('sm')]: {
            height: '36px',
        },
    },
    '@keyframes blink': {
        '0%': {
            opacity: 1,
        },
        '50%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        },
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <section id="home">
            <Grid container spacing={4} className={classes.heroSection}>
                <Grid item xs={12} md={7}>
                    <Box className={classes.fadeIn} style={{ animationDelay: '100ms' }}>
                        <Typography className={classes.greeting}>HI THERE, I'M</Typography>
                    </Box>

                    <Box className={classes.fadeIn} style={{ animationDelay: '200ms' }}>
                        <Typography variant="h1" className={classes.name}>
                            Samonide.
                        </Typography>
                    </Box>

                    <Box className={classes.fadeIn} style={{ animationDelay: '300ms' }}>
                        <Typography variant="h2" className={classes.tagline}>
                            Just a <span className={classes.highlight}>cyber janitor</span> sweeping through the web.
                            <span className={classes.cursorBlink}></span>
                        </Typography>
                    </Box>

                    <Box className={classes.fadeIn} style={{ animationDelay: '400ms' }}>
                        <Typography className={classes.description}>
                            I'm a software engineer specializing in building exceptional digital products
                            that are both beautiful and functional. Currently, I'm focused on creating
                            accessible, user-centered applications that solve real problems.
                        </Typography>
                    </Box>

                    <Box className={classes.fadeIn} style={{ animationDelay: '500ms' }}>
                        <Box className={classes.buttonsContainer}>
                            <Button
                                component="a"
                                href="mailto:samonide@fmb.im"
                                variant="outlined"
                                color="secondary"
                                size="large"
                                className={`btn-primary ${classes.ctaButton}`}
                                style={{ 
                                    color: '#64ffda', 
                                    borderColor: '#64ffda',
                                    textTransform: 'none'
                                }}
                            >
                                Get In Touch <Email className={classes.buttonIcon} fontSize="small" />
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Hidden smDown>
                    <Grid item md={5} className={classes.fadeIn} style={{ animationDelay: '600ms' }}>
                        <div className={classes.animationContainer}>
                            <div className={classes.minimalistFrame}>
                                <div className={classes.minimalistCircle}></div>
                                <div className={classes.innerCircle}></div>

                                <div className={classes.minimalistDot} style={{ top: '30%', left: '30%', animationDelay: '0s' }}></div>
                                <div className={classes.minimalistDot} style={{ top: '70%', left: '75%', animationDelay: '1.2s' }}></div>
                                <div className={classes.minimalistDot} style={{ top: '25%', left: '65%', animationDelay: '0.8s' }}></div>
                                <div className={classes.minimalistDot} style={{ top: '60%', left: '25%', animationDelay: '1.6s' }}></div>

                                <div className={classes.smallDot} style={{ top: '15%', left: '85%' }}></div>
                                <div className={classes.smallDot} style={{ top: '85%', left: '15%' }}></div>
                                <div className={classes.smallDot} style={{ top: '45%', left: '12%' }}></div>
                                <div className={classes.smallDot} style={{ top: '78%', left: '55%' }}></div>
                                <div className={classes.smallDot} style={{ top: '22%', left: '40%' }}></div>

                                <div className={classes.minimalistLine} style={{ top: '40%', left: '50%', transform: 'translateX(-50%) rotate(30deg)' }}></div>
                                <div className={classes.minimalistLine} style={{ top: '60%', left: '50%', transform: 'translateX(-50%) rotate(-30deg)' }}></div>
                                <div className={classes.minimalistLine} style={{ top: '50%', left: '25%', transform: 'translateY(-50%) rotate(90deg)' }}></div>
                            </div>
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        </section>
    );
};

export default Home; 