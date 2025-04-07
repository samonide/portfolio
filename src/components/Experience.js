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
        '&.Mui-selected': {
            color: theme.palette.secondary.main,
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
    role: {
        marginBottom: theme.spacing(1),
        fontSize: '18px',
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
    },
    responsibilities: {
        paddingLeft: 0,
        marginBottom: 0,
    },
    responsibilityItem: {
        display: 'flex',
        marginBottom: theme.spacing(2),
        fontSize: '15px',
        '&:before': {
            content: '"▹"',
            color: theme.palette.secondary.main,
            marginRight: theme.spacing(2),
            fontSize: '14px',
            lineHeight: 2,
        },
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
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
                <span className="section-title">/ experience</span>
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