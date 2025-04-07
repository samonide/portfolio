import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Link as MuiLink, Divider } from '@material-ui/core';
import { GitHub, LinkedIn, Twitter, Instagram, Code, Forum } from '@material-ui/icons';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Link.css';

const useStyles = makeStyles((theme) => ({
    linkSection: {
        padding: '20px 0',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '100px auto 0',
    },
    linkItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 30px',
        margin: '12px',
        backgroundColor: 'var(--light-navy)',
        color: 'var(--lightest-slate)',
        borderRadius: '2px',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        textDecoration: 'none',
        cursor: 'pointer',
        border: '1px solid rgba(100, 255, 218, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        width: 'calc(50% - 30px)',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(100, 255, 218, 0.03), transparent)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
        },
        '&:hover': {
            transform: 'translateY(-5px) scale(1.02)',
            backgroundColor: 'var(--lightest-navy)',
            borderColor: '#64ffda',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 10px rgba(100, 255, 218, 0.2)',
            '&:before': {
                opacity: 1,
            },
        },
    },
    icon: {
        color: '#64ffda',
        marginRight: theme.spacing(3),
        fontSize: '24px',
        transition: 'transform 0.3s ease',
        '.MuiLink-root:hover &': {
            transform: 'scale(1.1)',
        }
    },
    linkText: {
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
        transition: 'color 0.3s ease',
        whiteSpace: 'nowrap',
        '.MuiLink-root:hover &': {
            color: '#64ffda',
        }
    },
    linksContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        position: 'relative',
    },
    verticalDivider: {
        position: 'absolute',
        top: '12px',
        bottom: '12px',
        left: '50%',
        width: '1px',
        backgroundColor: 'rgba(100, 255, 218, 0.2)',
        transform: 'translateX(-50%)',
        zIndex: 1,
    },
    rowContainer: {
        width: '100%',
        marginBottom: '16px',
        position: 'relative',
    }
}));

const LinkPage = () => {
    const classes = useStyles();

    const links = [
        {
            name: 'GitHub',
            icon: <GitHub className={classes.icon} />,
            url: 'https://github.com/samonide',
        },
        {
            name: 'LinkedIn',
            icon: <LinkedIn className={classes.icon} />,
            url: 'https://linkedin.com/in/samonide',
        },
        {
            name: 'X',
            icon: <Twitter className={classes.icon} />,
            url: 'https://twitter.com/samonide',
        },
        {
            name: 'Instagram',
            icon: <Instagram className={classes.icon} />,
            url: 'https://instagram.com/samonide',
        },
        {
            name: 'Reddit',
            icon: <Forum className={classes.icon} />,
            url: 'https://reddit.com/user/samonide',
        },
        {
            name: 'Codeforces',
            icon: <Code className={classes.icon} />,
            url: 'https://codeforces.com/profile/samonide',
        },
        {
            name: 'Vjudge',
            icon: <Code className={classes.icon} />,
            url: 'https://vjudge.net/user/samonide',
        },
        {
            name: 'HackerRank',
            icon: <Code className={classes.icon} />,
            url: 'https://hackerrank.com/samonide',
        },
        {
            name: 'AtCoder',
            icon: <Code className={classes.icon} />,
            url: 'https://atcoder.jp/users/samonide',
        },
        {
            name: 'MonkeyType',
            icon: <Code className={classes.icon} />,
            url: 'https://monkeytype.com/profile/samonide',
        },
    ];

    // Split links into pairs
    const splitLinks = () => {
        const result = [];
        for (let i = 0; i < links.length; i += 2) {
            const pair = links.slice(i, i + 2);
            result.push(pair);
        }
        return result;
    };

    const linkPairs = splitLinks();

    return (
        <div className="link-page">
            <Navbar />

            <section id="link">
                <Box className={classes.linkSection}>
                    {linkPairs.map((pair, rowIndex) => (
                        <div key={rowIndex} className={classes.rowContainer}>
                            <div className={classes.linksContainer}>
                                <div className={classes.verticalDivider}></div>
                                {pair.map((link, index) => (
                                    <MuiLink
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.linkItem}
                                    >
                                        {link.icon}
                                        <Typography className={classes.linkText}>{link.name}</Typography>
                                    </MuiLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </Box>
            </section>

            <Footer />
        </div>
    );
};

export default LinkPage; 