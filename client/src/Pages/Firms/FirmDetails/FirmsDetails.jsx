import React from 'react'
import image1 from "../../../assets/brownieee assets/img1.png";
import FirmDetailsTabs from './FirmDetailsTabs/FirmDetailsTabs';
import { useLocation } from 'react-router-dom';

const FirmsDetails = () => {
   
  const location = useLocation();
  const { cardInfo,firmData,outsiderFirmId } = location.state;
  return (
    <>
    <br />
      <div className="background-rectangle bg">
          <img
            src={cardInfo?.image?.length > 0 ? cardInfo?.image : image1}
            alt=""
            style={{ maxHeight: "70vh", width: "100%" ,objectFit:'cover'}}
            className="img-fluid rounded-5"
          />
         
        </div>
        <div className="conatiner">
            <h1 className='p-5 fs-1 fw-bold pb-4' style={{fontFamily:'poppins'}}>{cardInfo?.name}</h1>
            <FirmDetailsTabs  firmData={firmData} outsiderFirmId={outsiderFirmId} />
        </div>
    </>
  )
}

export default FirmsDetails