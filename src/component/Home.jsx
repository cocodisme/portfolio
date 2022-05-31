import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from '../constant/style'
import Typewriter from "typewriter-effect";

export default function Home() {
  
  
  return(
    <>
      <div name="home" id="home" style={style.home} >
        <Box sx={{ml:13,mt:15}}>
      <Typography component='div' variant ='h4'>
        Hello,
      </Typography>
        <Typography component='div' variant ='h4'>
        <Typewriter
       onInit={(typewriter)=> {
       typewriter  
       .typeString("I'm Sundar ...")
       .changeDelay(1)
       .start();
       }}
       />
      </Typography>
          </Box>

        
        
        </div>
      
    </>
  )
}