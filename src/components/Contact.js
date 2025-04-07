import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/Contact.css';

const useStyles = makeStyles((theme) => ({
    contactSection: {
        padding: '40px 0',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
    },
    contactTitle: {
        fontSize: '40px',
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
        },
    },
    contactDescription: {
        color: theme.palette.text.secondary,
        fontSize: '16px',
        lineHeight: 1.6,
        marginBottom: theme.spacing(4),
    },
    contactButton: {
        marginTop: theme.spacing(2),
        padding: '16px 28px',
        fontSize: '16px',
        color: '#64ffda !important',
        borderColor: '#64ffda !important',
        '&:visited': {
            color: '#64ffda !important',
            borderColor: '#64ffda !important',
        },
        '&:hover': {
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
            color: '#64ffda !important',
        },
    },
    emailLink: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    whatsNextText: {
        color: theme.palette.secondary.main,
        fontSize: '16px',
        marginBottom: theme.spacing(1),
        fontFamily: "'Poppins', sans-serif",
    },
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <section id="contact">
            <div className="contact-content">
                <Typography className={classes.whatsNextText}>What's Next?</Typography>

                <Typography variant="h2" className={classes.contactTitle}>
                    Get In Touch
                </Typography>

                <Typography className={classes.contactDescription}>
                    I'm currently looking for new opportunities, and my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </Typography>

                <Button
                    component={RouterLink}
                    to="/link"
                    variant="outlined"
                    color="secondary"
                    size="large"
                    className={classes.contactButton}
                >
                    Link
                </Button>
            </div>
        </section>
    );
};

export default Contact; 