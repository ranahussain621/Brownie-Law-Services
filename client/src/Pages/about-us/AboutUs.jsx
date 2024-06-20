import React from 'react'
import mainImg from '../../assets/about-assets/main-img.png'
// import advice from '../../assets/about-assets/advice.svg'
import Section1 from './Section1'
// import Section2 from './Section2'
// import Section3 from './Section3'
// import Section4 from './Section4'
// import NewsEvent from '../Home/NewsEvent'
import Section5 from './Section5'
import './about.css'
import { Typography } from '@mui/material'
import MainNews from '../Home/MainNews'
export default function AboutUs() {
  return (
    <>
      <br></br>

      <div className="div mt-sm-4">
      <img src={mainImg} className='w-100 img-fluid hero_img' alt="" style={{ maxHeight: '700px' }} />
      <Section1 />
      <Section5 />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      <div className="" >
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "30px",
            lg: "50px",
          },
          textAlign: "center",
          fontWeight: "600",
          mb: {
            xs: "30px",
            lg: "60px",
          },
          fontFamily:'poppins,sans-serif'
        }}
      >
        News & Events
      </Typography>
         <MainNews />
      </div>   
      </div>
     
   



    </>
  )
}
