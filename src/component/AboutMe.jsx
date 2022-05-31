import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import style from '../constant/style'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function AboutMe({data,avatar}){
  
  return(
    <>
      <div name="aboutme" id="aboutme" style={style.AboutMe}>
   <Typography gutterBottom variant="h3" sx={{my:5}} align='center' component="div">
            About Me
          </Typography>
        <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
          {data.map((e,i)=>(
      
             <Card key={i}
               sx={{  
              m:'auto',
              my:2,
                        transition: 'transform .2s',
                       
              maxWidth: 500,
                        '&:hover': {
         transform:'scale(1.02)',
                          boxShadow: 
           `0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #bc13fe,
            0 0 0.8rem #bc13fe,
            0 0 2.8rem #bc13fe,
            inset 0 0 1.3rem #bc13fe`, 
      },
                       }}>
    
        <CardContent>
        <Avatar sx={{p:2,height:90,width:90}} alt="avatar" src={avatar} />
      
          <Typography gutterBottom variant="h5" component="div">
            {e.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {e.desc}
          </Typography>
        </CardContent>
               {e.link &&
        <CardActions>
        <Button size="small" href={e.link}target="_blank">Open</Button>
      </CardActions>
               }
    </Card>
      
      )
          )}     
            </Carousel>
        
      </div>
    </>
  )
}

