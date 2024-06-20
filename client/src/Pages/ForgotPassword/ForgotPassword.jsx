import { Box, Container, TextField,Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormButton,
  FormNavigateText,
  FormTitle,
  FormWrapper,
} from "../../GlobalStyle/globalStyle";
import resetImg from '../../assets/reset.jpg'

import FormSlider from "../../Components/FormSlider/FormSlider";

import { ForgetPassword } from "../../_redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isLoading} = useSelector((state)=>state.auth)

  const sliderData = [
    {
      img: "https://i.ibb.co/njPZhQ3/pexels-veeterzy-38136-2.png",
     
    },
    {
      img: "https://i.ibb.co/KXBmqNJ/pexels-veeterzy-38136.png",
     
    },
    {
      img: "https://i.ibb.co/JrbSPH4/pexels-veeterzy-38136-3.png",
     
    },
    {
      img: "https://i.ibb.co/wJ8FVCC/pexels-veeterzy-38136-1.png",
     
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = async (data) => {
    const Data = JSON.stringify(data);
    const res = await dispatch(ForgetPassword(Data));
    if (res.payload.success === true) {
      toast.info("Link Sent", {
        autoClose: 1000,
      });
      navigate("/auth/login");
    }
  };

  return (
    <>
      <br />
    
     
        <FormWrapper className="container mx-md-4 mt-5" >
  
      <Box sx={{ width: "80%",marginLeft:{xl:'10rem'} }} > 
          
            <Box sx={{ marginTop: { lg: "60px" } }} className="px-md-0 px-4">
              <FormTitle sx={{fontSize: '48px',}}>Forgot Password</FormTitle>
              <FormNavigateText  sx={{ fontFamily:'poppins' }}>
                No Worries, we’ll send you reset instructions
              </FormNavigateText>
            </Box>

            <Box
            className="mx-4"
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                mt: {
                  xs: "10px",
                  lg: "35px",
                },
              }}
            >
              <Box sx={{ my: "5px" }}>
                <TextField
                  type="email"
                  label="Email"
                  id="outlined-basic"
                  fullWidth
                  variant="standard"
                  sx={{ marginTop: "10px",fontFamily:'poppins' }}
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <Box sx={{ color: "red" }}>{errors.email.message}</Box>
                )}
              </Box>

              <Box sx={{ mt: "40px" }}>
              <FormButton type="submit" sx={{ fontSize: '18px', padding: '7px 0px' }}>{isLoading ? "Loading..." : "Submit"}</FormButton>
                
              </Box>
              {/* <Box sx={{ mt: "36px" }}>
                <FormNavigateText>
                  By Sign Up I agree to
                  <Link to="/" className="font-medium underline">
                    Privacy Policy
                  </Link>
                </FormNavigateText>
              </Box> */}
            </Box>
          </Box>
          <Box
            sx={{
              height:'400px',
              display: { xs: 'none', md: 'block' },
              width: {
                xs: "100%",
                sm: "80%",
                lg: "60%",
              },
            }}
          
          >
            {/* <FormSlider sliderData={sliderData} /> */}
            <img src={resetImg} className="img-fluid rounded" alt="register" style={{height:'600px',width:'100%'}}/>
          </Box>
     
         
        </FormWrapper>
    
    </>
  );
};

export default ForgotPassword;
