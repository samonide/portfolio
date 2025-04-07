import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: '40px',
        paddingBottom: '40px',
        textAlign: 'center',
    },
    footerText: {
        color: 'var(--slate)',
        fontSize: '16px',
        fontFamily: "'NTR', sans-serif",
    }
}));

const Footer = () => {
    const classes = useStyles();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={classes.footer}>
            <Container>
                <Typography className={classes.footerText}>
                    Built and designed by Samonide. All rights reserved. © {currentYear}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer; 