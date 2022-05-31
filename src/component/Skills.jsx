import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import style from '../constant/style'
import Tooltip from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';

export default function Skills({data}) {
  
  return (
    <>
      <div name="skills" id="skills" style={style.AboutMe}>
        <Typography gutterBottom variant="h3" sx={{my:5}} align='center' component="div">
            Skills
          </Typography>
        <Box sx={{display:'flex',flexWrap: 'wrap',m:'auto',gap: '2%',}}>
           
             {data.map((e,i)=>(
     <Tooltip key={i} title={e.name}>
      <Avatar key={i} sx={{width:'5rem',m:2,height:'5rem'}} alt="skill" src={e.logo} />
           </Tooltip>
      ))}
</Box>
        <Typography gutterBottom variant="h5" sx={{my:5}} align='center' component="div">
            Scores
          </Typography>
        <Box sx={{p:3}} >
          {data.map((e,i)=>(
           <Box display='flex'>
              <Avatar sx={{width:'4rem',m:1,height:'4rem'}} alt="skill" src={e.logo} />
              <Typography gutterBottom variant="h7" sx={{m:'auto'}} align='center'>
                {e.name}
          </Typography>
             <Slider disabled sx={{width:"50%",color:`${e.color} !important`,m:5}}  valueLabelDisplay="on" defaultValue={e.value} />
            </Box>
      ))}
          </Box>
        </div>
      </>
  );
}
