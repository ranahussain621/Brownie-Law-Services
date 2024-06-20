import { Box, Typography } from "@mui/material";
import React from "react";
import { HeroButton, HeroContentWrapper, HeroSectionWrapper, HeroTitle } from "./Home.style";
import rightArrow from "../../assets/images/right.png";
import { useNavigate } from "react-router-dom";
import main from '../../assets/main.png'
import arrow from '../../assets/arrow.png'
import snake from '../../assets/snake.png'
import './home.css'

const HeroSection = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/firms')
  }

  return (
    <>
      {/* <HeroSectionWrapper> */}
        <div className="hero-wrapper">
          
          <div className="hero-text">
            <div className="hero-first-text">   
           
             <p className="first-text-main">Choose Best <br/>Option For<br/> Your Problem</p>
             <button onClick={handleClick} className="hero-button">   <span >Get a Consult</span>
                <img src={rightArrow} alt="" className="img-fluid" style={{ marginLeft: '10px' }} />
                </button>

            </div>

            <div className="hero-second-text">
             
            
              <Typography className="fs-2 poppins fw-bolder coma" sx={{ fontWeight: '900', fontFamily: 'poppins' }}>
                ,,
              </Typography>
              <Typography
                sx={{
                  width: {
                    xs: "auto",
                    lg: "290px",
                  },
                  color: 'black',
                  fontSize: { xs: "12px", lg: "18px", xl: "20px",md:'16px' },
                  fontWeight: "500",
                  fontFamily: 'poppins',
                  mt: {
                    xs: "20px",
                    lg: "0px",
                  },
                }}
              >
                Everything you need to build, <br/> launch, and scale your <br/> applications
              </Typography>
            </div>
          </div>
          <div className="girl-image ">
             <img src={main} className="img-fluid girl-image-main" alt="" style={{objectFit:'cover' }} />
          </div>

        </div>
     
      {/* </HeroSectionWrapper> */}
      <div className="down-div"></div>
    </>
  );
};

export default HeroSection;
