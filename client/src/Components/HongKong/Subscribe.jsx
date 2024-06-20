import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { SubsCribeWrapper } from "./footer.style";

const Subscribe = () => {
  return (
    <SubsCribeWrapper>
      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              lg: "25px",
            },
            fontWeight: "600",
            marginBottom: {
              xs: "10px",
              lg: "20px",
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              lg: "25px",
            },
            fontWeight: "600",
            color: "#03A9F4",
          }}
        >
          Call Us Right Now
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
          }}
        >
          Get Started
        </Button>
      </Box>
    </SubsCribeWrapper>
  );
};

export default Subscribe;
