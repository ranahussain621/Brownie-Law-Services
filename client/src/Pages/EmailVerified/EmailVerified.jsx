import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import email from '../../assets/verified.svg'
import { Link } from 'react-router-dom'

const EmailVerified = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          background: '#2E2829',
          justifyContent: 'center', 
          alignItems: 'center', 
          padding:'2rem',
          margin:'2.2rem auto' ,
          flexDirection:'column'
        }}
      >
        <Grid item sx={{ textAlign: 'center' }}>
          <img src={email} alt='userverification' style={{ width: '100px', height: '100px' }} />
        </Grid>

        <Grid item>
          <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: 300, fontFamily: 'poppins,sans-serif', opacity: 0.9 }}>
            THANKS FOR VERIFICATION
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={{ fontSize: { lg: '24px', xs: '17px' }, color: 'white', fontWeight: 500, fontFamily: 'poppins,sans-serif' }}>
            Your E-mail has been Verified
          </Typography>
        </Grid>
      </Grid>
 

     <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Link  to='/auth/login'> 
     <Button
          variant="contained"
          sx={{
            background: "#2E2829",
            borderRadius: "15px",
            margin:'0px 0px 3rem 0px' ,
            padding: "12px 30px",
            "&:hover": {
              background: "#2E2829",
            },
            fontFamily:'poppins,sans-serif',
            textTransform:'capitalize',
            wordSpacing:'1px'
          }}
        >
       LOGIN TO YOUR ACCOUNT 
        </Button>
        </Link> 
     </Grid>

    </Container>
  )
}

export default EmailVerified
