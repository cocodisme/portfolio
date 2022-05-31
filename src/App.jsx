import React from 'react';
import './App.css';
import {AppBar,Home,AboutMe,Skills,Contact,Projects,ScrollToTop} from './component/index'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-animate-on-scroll'
import {BrowserRouter as Router } from 'react-router-dom'
import ReactLoading from "react-loading";

function App() {

  const [Data,setData] = React.useState({})
   const [isLoading, setLoading] = React.useState(true)
  React.useEffect(()=>{
    const url = 'https://raw.githubusercontent.com/cocodisme/portfolio/master/src/Data.json'
   fetch(url)
  .then(response => response.json())
  .then(data => {setData(data);setLoading(false)}); 
    
  },[])
  
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
        {isLoading ? <div style={{position:'fixed',top:'45%',left:'45%'}}><ReactLoading type="spin" color="#0000FF"
        height={50} width={50} /></div> :
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
        }
        </Router>
    </>
  );
}

export default App;