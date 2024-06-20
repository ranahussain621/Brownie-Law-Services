import React from 'react'
import Banner from "../../../assets/images/dark-rec.png";
import Profile from "../../../assets/images/profile-avatar.png";
import { Divider, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Bannercard from "../../../assets/images/statrer-banner.png";
import vamAavatar  from "../../../assets/images/vam-avatar.png";
import vamAavatar2  from "../../../assets/images/vam-avatar2.png";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./advance.css"
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
          <div className='blue-box'>
           <Typography className='tex-blue'>
          Phone
           </Typography>
           
           <Typography className='text-gray'>
           (408) 265-4510 5649
            </Typography>
            <br/>
            <Typography className='tex-blue'>
        Email
           </Typography>
         
           <Typography className='text-gray'>
           info@.xyz.com
            </Typography>
            <br/>
            <Typography className='tex-blue'>
       Website
           </Typography>
       
           <Typography className='text-gray'>
           www.xyz.com
            </Typography>
          </div>
          </div>
          <div  className='col-md-8' >
          <Typography className='address-text1'>About Cravath, Swaine & Moore LLP</Typography>
          <br/>
          <div className='gray-box' >
            <div className='row mb-4 mt-4'>
              <div className='col-md-4'>
                <Typography style={{fontSize:"13px", fontWeight:"400"}}>Total No. Attorneys</Typography>
                <Typography style={{fontSize:"13px", fontWeight:"600"}}>250-260</Typography>
              </div>
              <div className='col-md-4'>
               <Typography style={{fontSize:"13px", fontWeight:"400"}}> Major Practice Areas</Typography>
                <Typography style={{fontSize:"13px", fontWeight:"600"}}>Concrete</Typography>
              </div>
              <div className='col-md-4'>
              <Typography style={{fontSize:"13px", fontWeight:"400"}}>Presiding Partner</Typography>
                <Typography style={{fontSize:"13px", fontWeight:"600"}}>Faiza J. Saeed</Typography>
              </div>
            </div>
            <Divider style={{marginY:"4px", backgroundColor:"black"}}/>
            <div className='row mb-4 mt-4'>
           
              <div className='col-md-4'>
              <Typography style={{fontSize:"13px", fontWeight:"400"}}>No. of Offices</Typography>
                <Typography style={{fontSize:"13px", fontWeight:"600"}}>4</Typography>
              </div>
              <div className='col-md-4'>
              <Typography style={{fontSize:"13px", fontWeight:"400"}}>Major Office Locations</Typography>
                <Typography style={{fontSize:"13px", fontWeight:"600"}}>New York, NY (HQ)</Typography>
              </div>
              <div className='col-md-4'>
             
              </div>
            </div>
            <Divider style={{marginY:"4px", backgroundColor:"black"}}/>
            <div className='row mb-2 mt-4'>
           
           <div className='col-md-4'>
           <Typography style={{fontSize:"13px", fontWeight:"400"}}>Notable Cases</Typography>
             <Typography style={{fontSize:"13px", fontWeight:"700"}}>Cravath represented Johnson & Johnson in its $16.6 billion...</Typography>
           </div>
           <div className='col-md-4'>
           <Typography style={{fontSize:"13px", fontWeight:"400"}}>Notable Awards</Typography>
             <Typography style={{fontSize:"13px", fontWeight:"600"}}>Litigation Department of the Year,” 2022— New York Law Journal</Typography>
           </div>
           <div className='col-md-4'>
          
           </div>
         </div>
            </div>
          <br/>
          <Typography style={{fontSize:"16px", fontWeight:"600"}}>Introduction</Typography>
          <Typography className='addressfull-text2'>
          Shimin Law Offices is a partnership law firm founded in 1999. It is a full-service law firm with a strong focus on foreign-related legal matters. Our practical knowledge and rich experiences allow us to provide omprehensive legal services to our Chinese and foreign corporate clients.
          <br/>
Since its founding, Shimin has always believed in the highest level of integrity, followed a people-oriented approach, and given back to the society whenever possible. We continue to follow the principle of “client first” in providing reliable and highly effective services.
          </Typography>
          <br/>
          <br/>
          <Typography style={{fontSize:"16px", fontWeight:"600"}}>Vaut Verdict</Typography>
          <Typography className='addressfull-text2'>
          ravath is the most prestigious law firm in the United States, and its hiring standards reflect that. The culture is polite, professional, and noticeably more focused on the work than anything else. Associates say hours are very demanding as a direct result of the work required to complete assignments (the firm has no billable hour requirement). Partners treat associates well, but the firm is opaque regarding decision-making. Formal training is strong and highly encouraged; informal training is also excellent due to the firm’s small size and resulting close working relationships across seniority levels. Work is substantive and generally appropriate to and above an associate’s level. The firm reportedly embraced remote work and possesses an excellent, helpful IT department. Compensation is equal to the market and is lockstep based on seniority. The firm provides wellness offerings, including meditation and fitness resources, though some associates feel there is room for improvement in the firm’s well-being initiatives. The firm receives high marks for its diversity efforts, and associates report being strongly encouraged to take on pro bono work. It is understood that associates’ likelihood of making partner at Cravath is low, but the consensus is that the exit opportunities (including quick elevation to partner at other firms) makes up for this.
          </Typography>
          <div className='gray-box' >
<Typography sx={{fontSize:"16px", fontWeight:"600", marginBottom:"10px"}}> Messages</Typography>
<div className='row mb-2' style={{alignItems:"center"}}>
  <div className='col-md-1'>
<img src={vamAavatar} alt="" width={40} style={{textAlign:"center"}} />
  </div>
  <div className='col-md-11'>
    <Typography sx={{fontSize:"16px", fontWeight:"600"}}>Kayn Vampyr:</Typography>
    <Typography sx={{fontSize:"16px", fontWeight:"400"}}>Meu brother mais vampiro de todos, te considero pakas.</Typography>
  </div>
</div>
<Divider style={{marginY:"4px", backgroundColor:"black"}}/>
<div className='row mt-2' style={{alignItems:"center"}} >
  <div className='col-md-1'>
<img src={vamAavatar2} alt="" width={40} style={{textAlign:"center"}} />
  </div>
  <div className='col-md-11'>
    <Typography sx={{fontSize:"16px", fontWeight:"600"}}>Kayn Vampyr:</Typography>
    <Typography sx={{fontSize:"16px", fontWeight:"400"}}>Meu brother mais vampiro de todos, te considero pakas.</Typography>
  </div>
</div>
          </div>
            </div>
          </div>
          </div>
      </div>
      </div>
  )
}

export default index