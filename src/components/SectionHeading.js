import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sectionHeadingContainer: {
        position: 'relative',
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(2),
        width: '100%',
    },
    sectionTitle: {
        color: 'var(--lightest-slate)',
        fontFamily: "'NTR', sans-serif",
        fontSize: '36px',
        fontWeight: 'bold',
        textTransform: 'lowercase',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        '&:before': {
            content: '"/"',
            marginRight: theme.spacing(1),
            color: 'var(--green-bright)',
            fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
        },
        '&:after': {
            content: '""',
            display: 'block',
            position: 'relative',
            width: '300px',
            height: '1px',
            marginLeft: theme.spacing(2),
            backgroundColor: 'var(--lightest-navy)',
        },
    },
}));

const SectionHeading = ({ title }) => {
    const classes = useStyles();

    return (
        <Box className={classes.sectionHeadingContainer}>
            <Typography variant="h2" className={classes.sectionTitle}>
                {title}
            </Typography>
        </Box>
    );
};

export default SectionHeading; 