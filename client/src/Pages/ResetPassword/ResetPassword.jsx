import { Box, Container, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link,useNavigate,useParams } from "react-router-dom";
import {FormButton,FormNavigateText,FormTitle,FormWrapper,} from "../../GlobalStyle/globalStyle";
import logo from "../../assets/images/Logo.png";
import FormSlider from "../../Components/FormSlider/FormSlider";



import { toast } from "react-toastify";
import { instance } from "../../_redux/axios/axios";
import { useActiveItem } from "../../ActiveItemContext";



const ResetPassword = () => {

   
 
  const navigate = useNavigate()
  const param = useParams()
  const id = param.id

  const sliderData = [
    {
      img: "https://i.ibb.co/JrbSPH4/pexels-veeterzy-38136-3.png",
      
    },
    {
      img: "https://i.ibb.co/KXBmqNJ/pexels-veeterzy-38136.png",
      
    },
    {
      img: "https://i.ibb.co/wJ8FVCC/pexels-veeterzy-38136-1.png",
      
    },
    {
      img: "https://i.ibb.co/njPZhQ3/pexels-veeterzy-38136-2.png",
      
    },
  ];


  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await instance.post('/auth/changePassword',{
      ...data,
      id
    })
   if(res.status === 200){
    navigate('/auth/login')
    toast.success('Password changed successfully',{
      autoClose:1000
    })
   }
  };

  const {resetActive} = useActiveItem()

  return (
    <Container>
      <FormWrapper>
        <Box sx={{ width: "100%" }}>
          {/* <img src={logo} alt="" /> */}
          <Box sx={{ mt: "60px" }}>
            <FormTitle>Enter New Password</FormTitle>
            <FormNavigateText>
              Your new password must be different to previously used passwords.
            </FormNavigateText>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: "35px" }}
          >
            <Box sx={{ my: "5px" }}>
              <TextField
                type="password"
                label="Password"
                id="outlined-basic"
                fullWidth
                variant="standard"
                sx={{ marginTop: "10px" }}
                {...register("newpassword", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <Box sx={{ color: "red" }}>{errors.password.message}</Box>
              )}
            </Box>

            <Box sx={{ my: "5px" }}>
              <TextField
                type="password"
                label="Confirm Password"
                id="outlined-basic"
                fullWidth
                variant="standard"
                sx={{ marginTop: "10px" }}
                {...register("confirmpassword", {
                  required: "Confirm Password is required",
                })}
              />
              {errors.confirmPassword && (
                <Box sx={{ color: "red" }}>
                  {errors.confirmPassword.message}
                </Box>
              )}
            </Box>

            <Box sx={{ mt: "40px" }}>
              <FormButton type="submit">Reset Password</FormButton>
            </Box>
            <Box sx={{ mt: "36px" }}>
              <FormNavigateText>
                By Sign Up I agree to
                <Link to="/" className="font-medium underline" onClick={()=>resetActive(null)}>
                  Privacy Policy
                </Link>
              </FormNavigateText>
            </Box>
          </Box>
        </Box>
        <Box sx={{
            width: {
              xs: "100%",
              sm:"80%",
              lg: "45%",
            },
          }}>
          {/* <img
            src="https://i.ibb.co/JrbSPH4/pexels-veeterzy-38136-3.png"
            alt=""
          /> */}

          <FormSlider sliderData={sliderData}/>
        </Box>
      </FormWrapper>
    </Container>
  );
};

export default ResetPassword;
