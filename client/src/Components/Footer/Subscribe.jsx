import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { SubsCribeWrapper } from "./footer.style";
import { Link } from "react-router-dom";
import { useActiveItem } from "../../ActiveItemContext";

const Subscribe = () => {

  const { resetActive } = useActiveItem();

  return (
    <SubsCribeWrapper sx={{minWidth:'80%',position:'relative'}}>
      <Box>
       
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              lg: "30px",
            },
            fontWeight: "600",
            color: "#03A9F4",
            fontFamily:'poppins'
          }}
        >
          Call Us Right Now
        </Typography>
         <Typography
          sx={{
            fontSize: {
              xs: "20px",
              lg: "18px",
            },
            fontWeight: "600",
            fontFamily:'poppins',
            marginTop: {
              xs: "10px",
              lg: "20px",
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: {
            xs: "15px",
            lg: "0px",
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#2E2829",
            borderRadius: "15px",
            padding: "12px 30px",
            "&:hover": {
              background: "#2E2829",
            },
            fontFamily:'poppins',
            textTransform:'capitalize',
            wordSpacing:'0.9px'
          }}
        >
        <Link to='/auth/register' onClick={()=> resetActive(null)}>Get Started</Link>  
        </Button>
      </Box>
    </SubsCribeWrapper>
  );
};

export default Subscribe;
