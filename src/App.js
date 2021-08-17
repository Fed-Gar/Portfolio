import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme/index';

import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import Presentation from './components/Presentation/Presentation';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar /> 
      <Title /> 
      <Presentation /> 
      <Skills /> 
      <Footer /> 
    </ThemeProvider>
  );
};

export default App;