import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bars from "../../assets/images/Bars.png";
import arrow from "../../assets/images/diagonal-arrows 1.png";
import {
  NumberAndDetailsWrapper,
  NumberText,
  NumberTitleText,
  OurMissionDetailsWrapper,
} from "./Home.style";

const OurMission = () => {
  return (
    <div className="container" >
       
      <Grid container columnSpacing={{ xs: "30px", lg: "90px" }} className="mt-0 pt-0  mx-md-0">
        <div className="mx-md-5 mx-3 row d-flex align-items-center">
 <Grid item xs={12} lg={6} md={6} sm={12} className="mx-md-0 mx-3">
         <Typography
            sx={{
              fontSize: {
                xs: "36px",
                lg: "50px",
              },
              fontWeight: "600",
              fontFamily:'poppins'
            }}
          >
            Our Mission
          </Typography>
          <img src={bars} className="img-fluid" alt="" style={{height:'500px'}} />
        </Grid>

        <Grid item  xs={12} lg={5} md={5} sm={12} 
        className="mx-md-0 mx-3"
          sx={{
            marginTop: {
              xs: "30px",
              lg: "0px",
            },
          }}
        >
          <Box className="row">
            <OurMissionDetailsWrapper className="col-md-6 col-sm-6 ">
              <NumberAndDetailsWrapper  className="col-md-6 col-sm-12">
                <h2 className="fw-semibold" style={{fontSize:'4.3rem'}}>25</h2>
                <NumberTitleText style={{fontFamily:'poppins',fontWeight:'500'}}>Years Experience</NumberTitleText>
              </NumberAndDetailsWrapper>

              {/* <Box  className="col-md-6 col-sm-12 d-flex justify-content-center">
                <img className="w-[100px] h-[100px]" src={arrow} alt="" />
              </Box> */}
            </OurMissionDetailsWrapper>

            <OurMissionDetailsWrapper className="col-md-6 col-sm-6"
              sx={{
                justifyContent: "space-between",
               
              }}
            >
              <NumberAndDetailsWrapper  className="d-flex align-items-center">
              <h2 className="fw-semibold" style={{fontSize:'4.3rem'}}>1M</h2>
                <NumberTitleText sx={{ marginLeft:"10px",fontFamily:'poppins',fontWeight:'500'}}>Clients Satisfaction</NumberTitleText>
              </NumberAndDetailsWrapper>
              <Box>
                <NumberAndDetailsWrapper  className=" align-items-center">
                {/* <h2 className="fw-semibold ps-5" style={{fontSize:'4.3rem'}}>10k</h2> */}
                  {/* <span  sx={{ marginLeft:"10px",fontFamily:'poppins',fontWeight:'500'}}>Verified Lawyers</span> */}
               </NumberAndDetailsWrapper>
              </Box>
            </OurMissionDetailsWrapper>
          </Box>

          <Box
            sx={{
              marginTop: {
                xs: "10px",
                lg: "50px",
              },
            }}
          >
            <Typography    style={{
              textAlign:'justify',
              fontSize: "18px",
              color: "#000",
              fontFamily:'poppins',
              wordSpacing:'0.1px',
              fontWeight:500,
            
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography
                 style={{
                  textAlign:'justify',
                  fontSize: "20px",
                  color: "#000",
                  fontFamily:'poppins',
                  wordSpacing:'0.1px',
                  fontWeight:600,
                  marginTop:'18px'
                
                }}
            >
              Interesting to hire us?
            </Typography>
          </Box>
        </Grid>
        </div>
       
      </Grid>
    </div>
  );
};

export default OurMission;
