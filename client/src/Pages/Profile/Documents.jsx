import { Grid, Typography } from '@mui/material'
import { Button } from '@material-tailwind/react'
import React from 'react'
import Docs from "../../assets/images/Doc.png"
const Documents = () => {
    const buttonStyle = {
        backgroundColor: '#2E2829',
        padding: '50px',
        color: 'white', // Text color
        borderRadius:"8px"
    };

    const backButton = {
        borderRadius:"8px",
        padding: '50px',
        marginRight: 10,
        color: 'black', // Text color
        border: '2px solid #2E2829',
    };

  return (
    <>
    <Typography sx={{fontSize:"30px"}}>Documents</Typography>
            <div className='mt-5'>
            <Grid container spacing={2} py={4}>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
                <Grid>
                    <img src={ Docs} alt=""/>
                    <Typography sx={{fontsize:"14px", fontWeight:"600"}}>
                    Document name goes here.<br/> 
if it will goes long dow.... 
                    </Typography>
                </Grid>
            </Grid>
            <div className='mt-4'>
                <Button variant='outlined' style={backButton} >Back</Button>
                <Button style={buttonStyle}  >Next</Button>
            </div>
            </div>
            </>
  )
}

export default Documents