import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define CSS variables to match Gazi's color scheme
const colors = {
  navy: '#0a192f',
  lightNavy: '#112240',
  lightestNavy: '#233554',
  slate: '#8892b0',
  lightSlate: '#a8b2d1',
  lightestSlate: '#ccd6f6',
  white: '#e6f1ff',
  green: '#64ffda',
  greenBright: '#64ffda',
};

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: colors.navy,
    },
    secondary: {
      main: colors.green,
    },
    background: {
      default: colors.navy,
      paper: colors.lightNavy,
    },
    text: {
      primary: colors.lightestSlate,
      secondary: colors.slate,
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "'NTR', 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.6rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.1rem',
    },
    body2: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          scrollBehavior: 'smooth',
        },
        ':root': {
          '--navy': colors.navy,
          '--light-navy': colors.lightNavy,
          '--lightest-navy': colors.lightestNavy,
          '--slate': colors.slate,
          '--light-slate': colors.lightSlate,
          '--lightest-slate': colors.lightestSlate,
          '--white': colors.white,
          '--green': colors.green,
          '--green-bright': colors.greenBright,
        },
        body: {
          backgroundColor: colors.navy,
          fontFamily: "'NTR', 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
