import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Container } from '@material-ui/core';
import '../styles/About.css';

// Placeholder for profile image - you'll need to add your own image
const profileImage = '/images/image.png';

const useStyles = makeStyles((theme) => ({
    aboutSection: {
        padding: '40px 0',
    },
    content: {
        color: theme.palette.text.secondary,
        fontSize: '18px',
        lineHeight: 1.6,
        marginBottom: theme.spacing(3),
    },
    profileImageContainer: {
        position: 'relative',
        maxWidth: '300px',
        marginLeft: 'auto',
        marginTop: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
            marginTop: theme.spacing(4),
        },
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: `2px solid ${theme.palette.secondary.main}`,
            top: 20,
            left: 20,
            zIndex: -1,
            transition: 'all 0.25s ease',
        },
        '&:hover:after': {
            top: 15,
            left: 15,
        },
    },
    profileImage: {
        maxWidth: '100%',
        borderRadius: theme.spacing(1),
        position: 'relative',
        filter: 'grayscale(100%)',
        transition: 'all 0.25s ease',
        '&:hover': {
            filter: 'grayscale(0%)',
        },
    },
    skillsHeading: {
        color: theme.palette.text.primary,
        fontSize: '18px',
        marginBottom: theme.spacing(2),
        fontWeight: 500,
    },
    skillsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    skillItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
        color: theme.palette.text.secondary,
        '&:before': {
            content: '"▹"',
            color: theme.palette.secondary.main,
            marginRight: theme.spacing(1),
            fontSize: '14px',
        },
    },
    skillText: {
        fontSize: '16px',
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <section id="about" className={classes.aboutSection}>
            <Container>
                <div className="section-header">
                    <span className="section-title"><span>/</span> about me</span>
                </div>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.content}>
                            Hello! My name is Samonide and I enjoy creating things that live on the internet.
                            My interest in web development started back in 2012 when I decided to try editing custom
                            Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </Typography>

                        <Typography className={classes.content}>
                            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up,
                            a huge corporation, and a student-led design studio. My main focus these days is building accessible,
                            inclusive products and digital experiences for a variety of clients.
                        </Typography>

                        <Typography className={classes.content}>
                            I also recently launched a course that covers everything you need to build a web app with the
                            MERN stack.
                        </Typography>

                        <Typography className={classes.skillsHeading}>
                            Here are some technologies I've been working with:
                        </Typography>

                        <Box component="ul" style={{ paddingLeft: 0, listStyle: 'none' }}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>C/C++</Typography>
                                    </Box>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>Rust</Typography>
                                    </Box>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>JavaScript</Typography>
                                    </Box>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>TypeScript</Typography>
                                    </Box>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>Python</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>Node.js</Typography>
                                    </Box>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>Next.js</Typography>
                                    </Box>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>React</Typography>
                                    </Box>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>Git</Typography>
                                    </Box>
                                    <Box component="li" className={classes.skillItem}>
                                        <Typography className={classes.skillText}>MongoDB</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={`${classes.profileImageContainer} profile-image-container`}>
                            <img
                                src={profileImage}
                                alt="Profile"
                                className={classes.profileImage}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default About; 