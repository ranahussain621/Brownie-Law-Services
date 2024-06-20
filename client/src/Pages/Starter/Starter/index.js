import React from 'react'
import Banner from "../../../assets/images/dark-rec.png";
import Profile from "../../../assets/images/profile-avatar.png";
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Bannercard from "../../../assets/images/statrer-banner.png";
import "./starter.css"
const index = () => {
  return (
    <div className="container mt-4">

    <div className="row mt-5 mb-5">
      <img src={Banner} alt='' />
      <div className="container " style={{padding:"20px"}}>
      <div className="row" style={{alignItems:"center"}}>
      <div   style={{marginTop:"-92px", marginLeft:"22px"}}>
        <img src={Profile} alt='' />
        </div>
      <div  className='col-md-4 px-8' >
      
       <Typography className='head1'>Cravath, Swaine & Moore LLP</Typography>
       <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={1} precision={0.5} />
     
    </Stack>
    <Typography className='recom-text'>0 recomended</Typography>
        </div>
        <div  className='col-md-8'>
        <img src={Bannercard} alt='' />
          </div>
        </div>
        <div className="row" style={{marginTop:"30px"}}>
        <div  className='col-md-4 px-8' >
          <Typography className='address-text'>Address</Typography>
          <br/>
          <Typography className='addressfull-text'>
          1607 PARKMOOR AVE, SAN JOSE, <br/> CA 95128-2437, USA | California 
          <br/>
United States
          </Typography>
          </div>
          <div  className='col-md-8' >
          <Typography className='address-text1'>About Cravath, Swaine & Moore LLP</Typography>
          <br/>
          <Typography className='addressfull-text2'>
          Shimin Law Offices is a partnership law firm founded in 1999. It is a full-service law firm with a strong focus on foreign-related legal matters. Our practical knowledge and rich experiences allow us to provide omprehensive legal services to our Chinese and foreign corporate clients.
<br/>
Since its founding, Shimin has always believed in the highest level of integrity, followed a people-oriented approach, and given back to the society whenever possible. We continue to follow the principle of “client first” in providing reliable and highly effective services.
          </Typography>
            </div>
          </div>
          </div>
      </div>
      </div>
  )
}

export default index