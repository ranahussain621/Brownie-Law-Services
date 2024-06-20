import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../../assets/brownieee assets/image-1.png";
import image2 from "../../assets/brownieee assets/image-2.png";
import image3 from "../../assets/brownieee assets/image-3.png";
import image4 from "../../assets/brownieee assets/image-4.png";
import image5 from "../../assets/brownieee assets/image-5.png";
import image6 from "../../assets/brownieee assets/image-6.png";
import image7 from "../../assets/brownieee assets/image-7.png";
import image8 from "../../assets/brownieee assets/image-8.png";
import image9 from "../../assets/brownieee assets/image-9.png";
import image10 from "../../assets/brownieee assets/image-10.png";
import {  Link, } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Firms = () => {
  const firmsData = [
    {
      img: image1,
      name: "Criminal Defense",
    },
    {
      img: image2,
      name: "Personal Injury",
    },
    {
      img: image3,
      name: "Family Law",
    },
    {
      img: image4,
      name: "Immigration",
    },
    {
      img: image5,
      name: "Bankruptcy Law",
    },
    {
      img: image6,
      name: "Employement law",
    },
    {
      img: image7,
      name: "Corporate law",
    },
    {
      img: image8,
      name: "SSDI",
    },
    {
      img: image9,
      name: "Medical Malpractice",
    },
    {
      img: image10,
      name: "Taxes",
    },
  ];

  return (
    <>
      <br></br>
      <Container
        sx={{
          margin: {
            xs: "30px auto",
            lg: "70px auto",
          },
          width: "100%",
        }}
      >
        <Grid container columnSpacing={{ xs: "30px", lg: "80px" }}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "40px",
                  lg: "56px",
                },
                mb: {
                  xs: "20px",
                  lg: "0px",
                },
                fontWeight: "600",
                width: {
                  xs: "auto",
                  lg: "440px",
                },
              }}
            >
              Firms where affordable legal help
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="p"
              sx={{
                fontSize: {
                  xs: "18px",
                  lg: "24px",
                },
                color: "#63666A",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr 1fr",
            },
            placeItems: "center",
            gap: "40px",
            marginTop: {
              xs: "30px",
              lg: "90px",
            },
          }}
        >
          {firmsData.map((data, i) => (
            <Box
              key={i}
              sx={{
                backgroundImage: `url(${data.img})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "74vh",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  color: "#fff",
                  background: "rgba(46, 40, 41, 0.5)",
                  padding: "55px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  width: "100%",
                }}
              >
                <IoIosArrowForward className="text-xl font-bold" />
                <Link
                  to={`/${encodeURIComponent(
                    data.name.toLowerCase().replace(/\s+/g, "-")
                  )}/details`}
                  className="block text-xl font-medium"
                >
                  {data.name}
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

    
   


    </>
  );
};

export default Firms;
