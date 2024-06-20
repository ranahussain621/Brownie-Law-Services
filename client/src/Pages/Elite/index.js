import React from 'react'
import Banner from "../../assets/images/dark-rec.png";
import Profile from "../../assets/images/profile-avatar.png";
import { Divider, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Bannercard from "../../assets/images/statrer-banner.png";
import vamAavatar  from "../../assets/images/vam-avatar.png";
import vamAavatar2  from "../../assets/images/vam-avatar2.png";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import "./elite.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Indexx = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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
      <Rating name="half-rating" defaultValue={3} precision={0.5} />
     
    </Stack>
    <Typography className='recom-text'>40 recomended</Typography>
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
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Introduction" {...a11yProps(0)} />
          <Tab label="About Firm" {...a11yProps(1)} />
          <Tab label="Documents" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
    
      
          <div className='gray-box' >
            <div className='row mb-4 mt-4'>
              <div className='col-md-4'>
                <Typography style={{fontSize:"13px", fontWeight:"400"}}>Total No. Attorneys</Typography>
                <Typography style={{fontSize:"13px", fontWeight:"600"}}>250-260</Typography>
              </div>
              <div className='col-md-4'>
               <Typography style={{fontSize:"13px", fontWeight:"400"}}> Major Practice Areas</Typography>
               <Typography style={{fontSize:"13px", fontWeight:"600"}}> <ControlPointIcon sx={{color:"#03A9F4"}}/> Corporate</Typography>
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
             <Typography style={{fontSize:"13px", fontWeight:"700"}}>Cravath represented Johnson & <br/> Johnson in its $16.6 billion...</Typography>
           </div>
           <div className='col-md-4'>
           <Typography style={{fontSize:"13px", fontWeight:"400"}}>Notable Awards</Typography>
             <Typography style={{fontSize:"13px", fontWeight:"600"}}>Litigation Department of the Year,” <br/> 2022— New York Law Journal</Typography>
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
          <br/>
Since its founding, Shimin has always believed in the highest level of integrity, followed a people-oriented approach, and given back to the society whenever possible. We continue to follow the principle of “client first” in providing reliable and highly effective services.
          </Typography>
          <br/>
          <br/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
   <></>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <></>
      </CustomTabPanel>
    </Box>
       
        
        
            </div>
          </div>
          </div>
      </div>
      </div>
  )
}

export default Indexx