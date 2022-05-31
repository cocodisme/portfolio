import React,{ useEffect } from "react";
import style from '../constant/style'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

export default function ScrollToTop() {
  const [scroll, setScroll] = React.useState(false)
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 900) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  React.useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })
  
  
  return (
      <>
        {scroll &&
        <div id="scrolltotop" style={{position:'fixed',bottom:'2rem',zIndex:1,right:'1rem',}}>
          <IconButton 
            onClick={()=>window.scrollTo({
  top: 0,
  behavior: 'smooth',
})} 
            sx={{background:'#cc66ff','&:hover': {
         background:'#b31aff',
      },}}>
            <ExpandLessIcon sx={{height:40,width:40,}}/>
          </IconButton>
          </div>
        }
      </>
    );
}