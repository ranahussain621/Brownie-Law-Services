import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import group from "../../assets/images/team 1.svg";
import question from "../../assets/images/question 1.svg";
import help from "../../assets/images/help 1.svg";
import { AboutSectionWrapper } from "./Home.style";

const AboutSection = () => {
 

  return (
    <div className="container mt-5">
      
      <AboutSectionWrapper className="mx-md-5  mx-3">
        <Box
          sx={{ background: "#E7E9FA", borderRadius: "15px", padding: "35px" }}
        >
          <img src={group} alt="" style={{width:50,hegiht:50}}/>
          <Typography 
            sx={{ fontSize: { xs: "24px", sm: "36px" }, fontWeight: "600", marginBottom: "10px" ,fontFamily:'poppins'}}
          >
            Who are we
          </Typography>
          <Typography style={{fontFamily:'poppins',fontSize:'18px',color:'black',fontWeight:500, wordSpacing: '2px', 
    letterSpacing: '-1px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
        </Box>
        <Box
          sx={{ background: "#EAFFED", borderRadius: "15px", padding: "35px",fontFamily:'poppins' }}
        >
          <img src={question} alt="" style={{width:50,hegiht:50}} />
          <Typography
            sx={{ fontSize: { xs: "24px", sm: "36px" }, fontWeight: "600", marginBottom: "10px",fontFamily:'poppins' }}
          >
            What we do
          </Typography>
          <Typography style={{fontFamily:'poppins',fontSize:'18px',color:'black',fontWeight:500, wordSpacing: '2px', // Adjust word spacing as needed
    letterSpacing: '-1px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
        </Box>
        <Box
          sx={{ background: "#EDF7FF", borderRadius: "15px", padding: "35px" }}
        >
          <img src={help} alt="" style={{width:50,hegiht:50}}/>
          <Typography
            sx={{ fontSize: { xs: "24px", sm: "36px" }, fontWeight: "600", marginBottom: "10px" ,fontFamily:'poppins'}}
          >
            Help you
          </Typography>
          <Typography style={{fontFamily:'poppins',fontSize:'18px',color:'black',fontWeight:500, wordSpacing: '2px', // Adjust word spacing as needed
    letterSpacing: '-1px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
        </Box>
      </AboutSectionWrapper>
    </div>
  );
};

export default AboutSection;
