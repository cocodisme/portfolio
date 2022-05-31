import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';
import emailjs from 'emailjs-com'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Sundar - Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignInSide() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value && e.target[2].value && e.target[4].value) {
      emailjs .sendForm('service_6h1qubg','template_gf35ifo',e.target,'BiiZUsIHBaGVxRtSj')
    .then(res => {alert ("Mail Sent Succussfully")})
    .catch(err=> {alert ("Server Error")})
    document.getElementById("contactform").reset();
      
    } else {
      alert ("Please Fill all inputs")
      document.getElementById("contactform").reset();
    }
    
    
  };

  return (
    <div name="contact" id="contact">
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://lystloc-landing-page.s3.ap-south-1.amazonaws.com/images/others/contact-us.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PhoneIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact Me
            </Typography>
            <Box id="contactform" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoComplete="off"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                multiline
                name="message"
                label="message"
                type="text"
                id="message"
                autoComplete="off"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Say Hi !
              </Button>
              
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}