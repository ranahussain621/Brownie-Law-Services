import React from "react";
import law from "../../assets/Law-assets/MainImg.png";
import './Law.css'

import LawTabs from "./LawTabs/LawTabs";
import { Typography } from "@mui/material";
import MainNews from "../Home/MainNews";
const Law = () => {
  return (
    <>
      <br></br>
      <div className="font mt-sm-4" >
        <div className="background-rectangle bg-cover bg mx-auto img-main" style={{
          backgroundImage: `url(${law})`,
          objectFit:'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxHeight:700
       
        }}> </div>
        <br>
        </br>

        <div className="ps-0 mx-md-5 mx-4 mt-4" >
        <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "30px",
                lg: "50px",
              },
              fontWeight: "600",
              marginBottom: "30px",
              fontFamily:'poppins',
            }}
          >
           Introduction To Laws
          </Typography>
          <p className="poppins-500 text-dark  leading-7" style={{textAlign:'justify',fontSize:'18px'}}>
          Laws are the system of rules and regulations created and enforced by governmental or social institutions to regulate behavior. It provides a framework within which societies operate, defining rights, duties, and obligations for individuals, organizations, and governments
          </p>
          
        </div>

        <div className="container"   style={{ margin: "40px auto" }}>
        

          <LawTabs  />
        </div>




      


        {/* <h2 className="text-center my-5 poppins-600 fw-bold h4">Practice Attorneys</h2>
        <div className="row justify-content-center mx-12 my-5"  >
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className=" col-md-6">
                <img className=" img-fluid" src={law5} alt="img law-4" />
                <div className="text-center my-2">
                  <p>john Harts</p>
                  <p className="fs-4">Finance & Banking</p>
                  <h2>Read Profile</h2>
                </div>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src={law6} alt="img law-5" />
                <div className="text-center my-2">
                  <h2>Laura Griffin</h2>
                  <p className="fs-4">Finance & Banking</p>
                  <h2>Read Profile</h2>
                </div>
              </div>
            </div>
          </div>

        </div> */}


<div className="div">
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "30px",
            lg: "50px",
          },
          textAlign: "center",
          fontWeight: "800",
          mb: {
            xs: "30px",
            lg: "60px",
          },
          fontFamily:'poppins,sans-serif'
        }}
      >
      
        News & Events
      </Typography>
     {/* <MainNews /> */}
      </div>

      </div>
    </>
  );
}
export default Law;