import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Tabs, Tab, Box } from '@material-ui/core';
import '../styles/Experience.css';

const useStyles = makeStyles((theme) => ({
    experienceSection: {
        padding: '40px 0',
        maxWidth: '1000px',
        margin: '0 auto',
        paddingTop: '80px',
    },
    tabsContainer: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: '200px',
        [theme.breakpoints.down('sm')]: {
            borderRight: 'none',
            borderBottom: `1px solid ${theme.palette.divider}`,
            maxWidth: '100%',
        },
    },
    tab: {
        textAlign: 'left',
        padding: theme.spacing(2),
        fontFamily: "'Poppins', sans-serif",
        fontSize: '14px',
        minWidth: '180px',
        color: theme.palette.text.secondary,
        position: 'relative',
        transition: 'all 0.3s ease',
        '&.Mui-selected': {
            color: theme.palette.secondary.main,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '2px',
            height: '0',
            right: '0',
            top: '50%',
            backgroundColor: theme.palette.secondary.main,
            transform: 'translateY(-50%)',
            transition: 'height 0.3s ease-in-out',
            [theme.breakpoints.down('sm')]: {
                width: '0',
                height: '2px',
                bottom: '0',
                right: '50%',
                top: 'auto',
                transform: 'translateX(50%)',
                transition: 'width 0.3s ease-in-out',
            },
        },
        '&:hover::after': {
            height: '40%',
            [theme.breakpoints.down('sm')]: {
                width: '40%',
                height: '2px',
            },
        },
        '&.Mui-selected::after': {
            height: '70%',
            [theme.breakpoints.down('sm')]: {
                width: '70%',
                height: '2px',
            },
        },
    },
    tabContent: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
    },
    tabPanel: {
        padding: theme.spacing(3),
        paddingTop: 0,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    fadeIn: {
        animation: '$fadeIn 0.5s ease forwards',
    },
    '@keyframes fadeIn': {
        '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    role: {
        marginBottom: theme.spacing(1),
        fontSize: '18px',
        animation: '$fadeIn 0.4s ease forwards',
    },
    company: {
        color: theme.palette.secondary.main,
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    duration: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '14px',
        marginBottom: theme.spacing(2),
        animation: '$slideIn 0.4s 0.2s forwards',
        opacity: 0,
    },
    '@keyframes slideIn': {
        '0%': {
            opacity: 0,
            transform: 'translateX(-10px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateX(0)',
        },
    },
    responsibilities: {
        paddingLeft: 0,
        marginBottom: 0,
    },
    responsibilityItem: {
        display: 'flex',
        marginBottom: theme.spacing(2),
        fontSize: '15px',
        opacity: 0,
        animation: '$fadeInUp 0.5s forwards',
        '&:nth-child(1)': {
            animationDelay: '0.3s',
        },
        '&:nth-child(2)': {
            animationDelay: '0.4s',
        },
        '&:nth-child(3)': {
            animationDelay: '0.5s',
        },
        '&:nth-child(4)': {
            animationDelay: '0.6s',
        },
        '&:before': {
            content: '"▹"',
            color: theme.palette.secondary.main,
            marginRight: theme.spacing(2),
            fontSize: '14px',
            lineHeight: 2,
        },
    },
    '@keyframes fadeInUp': {
        '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className={classes.fadeIn}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Experience = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Replace with your own experience
    const experiences = [
        {
            company: 'Example Corp',
            companyUrl: 'https://example.com',
            role: 'Senior Software Engineer',
            duration: 'January 2022 - Present',
            responsibilities: [
                'Developed and maintained major features of the company\'s customer-facing web application using React and TypeScript',
                'Collaborated with a team of designers, product managers, and engineers to create high-quality user experiences',
                'Improved application performance by 35% through code optimization and implementing efficient data structures',
                'Led the implementation of a new design system that improved development velocity by 25%',
            ],
        },
        {
            company: 'Tech Innovators',
            companyUrl: 'https://example.com',
            role: 'Full Stack Developer',
            duration: 'June 2020 - December 2021',
            responsibilities: [
                'Built and shipped a RESTful API using Node.js and Express, serving data to the frontend React application',
                'Implemented authentication and authorization systems using JWT tokens',
                'Worked closely with the design team to ensure pixel-perfect implementation of UI designs',
                'Optimized MongoDB queries resulting in 50% faster page loads',
            ],
        },
        {
            company: 'Startup Inc',
            companyUrl: 'https://example.com',
            role: 'Frontend Developer',
            duration: 'August 2018 - May 2020',
            responsibilities: [
                'Developed responsive user interfaces using React and Material UI',
                'Implemented client-side form validation and error handling',
                'Collaborated with backend engineers to integrate frontend features with REST APIs',
                'Participated in code reviews and provided constructive feedback to team members',
            ],
        },
    ];

    return (
        <section id="experience">
            <div className="section-header">
                <span className="section-title"><span>/</span> experience</span>
            </div>

            <div className={classes.tabsContainer}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    className={classes.tabs}
                >
                    {experiences.map((exp, index) => (
                        <Tab key={index} label={exp.company} className={classes.tab} />
                    ))}
                </Tabs>

                {experiences.map((exp, index) => (
                    <TabPanel key={index} value={value} index={index} className={classes.tabPanel}>
                        <Typography variant="h5" className={classes.role}>
                            {exp.role}{' '}
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={classes.company}>
                                @ {exp.company}
                            </a>
                        </Typography>
                        <Typography className={classes.duration}>{exp.duration}</Typography>

                        <Box component="ul" className={classes.responsibilities}>
                            {exp.responsibilities.map((item, i) => (
                                <Box component="li" key={i} className={classes.responsibilityItem}>
                                    <Typography>{item}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </TabPanel>
                ))}
            </div>
        </section>
    );
};

export default Experience; 