import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function OurMission() {
  const location = useLocation();
  const cardInfo = location?.state && location?.state?.cardInfo;

  return (
    <div className="row justify-content-center" >
      <div className="col-md-12 mb-5">
        {cardInfo?.plan_price === '5000' || cardInfo?.plan_price ===  null ? (
         <Typography className='ps-0' sx={{fontSize: { xs: "18px", md:'24px'},fontWeight:600,fontFamily:'poppins,sans-serif'}}>
            {cardInfo?.ourMission ? cardInfo?.ourMission?.slice(0, 700) : 
            <h2 className='p-5 text-danger poppins-500 d-flex justify-content-center align-items-center' style={{textTransform:'capitalize',fontSize:'18px',height:'80vh'}}>We will provide shortly</h2>}
          </Typography>
        ) : cardInfo?.plan_price === '10000' ? 
        <Typography className='ps-0' sx={{fontSize: { xs: "18px", md:'24px'},fontWeight:600,fontFamily:'poppins,sans-serif'}}>
        {cardInfo?.ourMission ? cardInfo?.ourMission?.slice(0, 1500) :
         <h2 className='p-5 text-danger poppins-500 d-flex justify-content-center align-items-center ' style={{textTransform:'capitalize',fontSize:'18px',height:'80vh'}}>We will provide shortly</h2>}
      </Typography> :  <Typography className='ps-0' sx={{fontSize: { xs: "18px", md:'24px'},fontWeight:600,fontFamily:'poppins,sans-serif'}}>
        {cardInfo?.ourMission ? cardInfo?.ourMission :
         <h2 className='p-5 text-danger poppins-500 d-flex justify-content-center align-items-center' style={{textTransform:'capitalize',fontSize:'18px',height:'80vh'}}>We will provide shortly</h2>}
      </Typography>
        
        }
      </div>
    </div>
  );
}
