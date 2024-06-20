import { Grid, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/images/img.png";
import './home.css'

const ConnectSection = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center mx-md-5 mx-3">
        <div className="col-md-6 col-sm-12">
  <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "24px",
                sm:'36px',
                lg: "50px",
              },
              fontWeight: "600",
              marginBottom: "30px",
              fontFamily:'poppins',
            }}
          >
            Connect Today <br /> Connect Tomorrow
          </Typography>
          <p className=""  
            style={{
              textAlign:'justify',
              fontSize: "18px",
              color: "#000",
              fontFamily:'poppins',
              wordSpacing:'0.1px',
              fontWeight:500,
              lineHeight:"2rem"
            
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dolor sit quod laborum, soluta doloremque aspernatur eligendi?
            Omnis, autem! Voluptatibus a ullam impedit. Explicabo, praesentium
            consectetur? Amet, sunt, incidunt assumenda molestias consectetur
            dignissimos impedit totam veritatis cum unde, in enim labore
            excepturi quae quos architecto iste sed? Iste eum, ipsum molestiaeorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dolor sit quod laborum, soluta doloremque aspernatur eligendi?
            Omnis, autem! Voluptatibus a ullam impedit. Explicabo, praesentium
            consectetur? Amet, sunt, incidunt assumenda molestias consectetur
            dignissimos impedit totam veritatis cum unde, in enim labore
            excepturi quae quos architecto iste sed? Iste eum, ipsum molestiae
            
          </p>
        </div>
        <div className="col-md-6 col-sm-12 connect-img d-flex justify-content-md-end justify-content-center">
           <img src={image} alt="" className="img-fluid "/>
        </div>
      </div>
      <Grid container columnSpacing={{ xs: "20px", lg: "70px" }} className="d-flex">
        <Grid item xs={12} sm={12} md={12} lg={5}>
        
        </Grid>
      
        <Grid className="d-flex justify-content-end" item xs={12} sm={12} md={12} lg={5} sx={{
          mt:{
            xs:"30px", 
            lg:"0px"
          }
        }}>
         
        </Grid>
      </Grid>
    </div>
  );
};

export default ConnectSection;
