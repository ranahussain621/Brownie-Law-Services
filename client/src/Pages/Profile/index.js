import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProfileInfo from "./ProfileInfo";
import { Divider, Typography } from '@mui/material';
import BuisnessInfo from "./BusinessInfo";
import HomeIcon from '@mui/icons-material/Home';
import AboutFirm from "./AboutFirm";
import Document from "./Documents";
import Reviews from "./Reviews"


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
const Index = () => {
  const [value, setValue] = useState(0);
  const [prviousProfile, setPrviousProfile] = useState({})
 



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [personName, setPersonName] = useState([]);

  // const handleChangee = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };



  const previousProfileData = (data) => {
    setPrviousProfile(data)
  }

  return (
    <>
    

      <div className='mx-5 mt-4'>

      <div className='poppins-600 fw-bold ' style={{fontSize:'30px'}}>
            Profile
        </div>

        {/* <div className='mt-md-5' style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
          <HomeIcon /> /<Typography sx={{ fontSize: "14px",fontWeight:500 }}>Profile</Typography>

        </div> */}
        {/* <Divider py={6} /> */}
       
          <Box className="mt-md-5">
            {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
            <Box>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                <Tab label="Personal Info"  {...a11yProps(0)} style={{fontSize:'18px',color:'rgb(13, 14, 15)',fontWeight:'600',fontFamily:'poppins',textTransform:'capitalize'}} />
                {/* <Tab label="Buisness Info" {...a11yProps(1)} /> */}
                <Tab label="About Firm"  {...a11yProps(2)}  style={{fontSize:'18px',color:'rgb(13, 14, 15)',fontWeight:'600',fontFamily:'poppins',textTransform:'capitalize'}} />
                {/* <Tab label="Documents" {...a11yProps(3)} />
                  <Tab label="Reviews" {...a11yProps(4)} /> */}
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ProfileInfo setActiveTab={setValue}  profilePreviousData={previousProfileData} />
            </CustomTabPanel>
            {/* <CustomTabPanel value={value} index={1}>
              <BuisnessInfo profileInfo={profileInfo} setActiveTab={setValue} onBusinessInfoChange={handleBusinessInfoChange} profileData={prviousProfile} previousBusinessProfile={previousBusinessProfileData}/>
            </CustomTabPanel> */}
            <CustomTabPanel value={value} index={1}>
              <AboutFirm  previousProfile={prviousProfile} setActiveTab={setValue}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Document />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <Reviews />
            </CustomTabPanel>
          </Box>
        </div>
    
  
    </>
  )
}

export default Index