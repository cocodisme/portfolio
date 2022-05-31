import React from 'react';
import './App.css';
import {AppBar,Home,AboutMe,Skills,Contact,Projects,ScrollToTop} from './component/index'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-animate-on-scroll'
import {BrowserRouter as Router } from 'react-router-dom'
import Data from './Data.json'

function App() {

  console.log(Data)
  const darkTheme = createTheme({
    typography: {
    allVariants: {
      fontFamily: "'Roboto Mono', monospace",
    },
  },
  palette: {
    mode: 'dark',
  },
});
  
  return (
    <>
      <Router>
       <ThemeProvider theme={darkTheme}>
      <AppBar data={Data.AppBar}/>
      <CssBaseline />
         <ScrollAnimation animateIn='fadeIn'>
         <Home/>
         <ScrollToTop/>
         <AboutMe data={Data.AboutMe}/>
         <Skills data={Data.Skill}/>
         <Projects data={Data.Projects}/>
         <Contact/>
           </ScrollAnimation>
         </ThemeProvider>
        </Router>
    </>
  );
}

export default App;