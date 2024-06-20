import { Box, Container, TextField,Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {FormButton,FormNavigateText,FormTitle,FormWrapper,} from "../../GlobalStyle/globalStyle";
import FormSlider from "../../Components/FormSlider/FormSlider";
import '../Register/register.css'
import {loginUser} from '../../_redux/features/auth/authSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import loginImg from '../../assets/login.jpg'



const Login = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate();
 
  const {isLoading} = useSelector((state)=>state.auth)
   
  const sliderData = [
    {
      img: "https://i.ibb.co/wJ8FVCC/pexels-veeterzy-38136-1.png",
     
    },
    {
      img: "https://i.ibb.co/KXBmqNJ/pexels-veeterzy-38136.png",
     
    },
    {
      img: "https://i.ibb.co/JrbSPH4/pexels-veeterzy-38136-3.png",
     
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
   
    try { 
      const response = await dispatch(loginUser(data));
       console.log(response.payload?.user?.plan_id )

    
       if (response.payload.success === true) {
           if(response.payload?.user?.plan_id === null && (response.payload.Role?.title === 'firm' || response.payload.Role?.title === 'lawyer')){
            toast.success("Buy Subscription Plan!",{autoClose:2000})
            navigate('/subscriptions-plans/:id/*') 
            return 
           }


           if(response.payload?.user?.plan_id?.length > 0){
       if(response.payload.Role?.title === 'firm'){
        localStorage.setItem("user", JSON.stringify(response.payload)); // Update the key to "user"
        navigate('/dashboard/Firm', { replace: true });
        
        toast('Logged in', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
       }

       else if(response.payload.Role?.title === 'lawyer'){
        localStorage.setItem("user", JSON.stringify(response.payload)); // Update the key to "user"
        navigate('/dashboard/Lawyer', { replace: true });
        
        toast.success('Logged in', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
       }

           }

           if(response.payload.Role?.title === 'client'){
            localStorage.setItem("user", JSON.stringify(response.payload)); // Update the key to "user"
            navigate('/dashboard/Client', { replace: true });
            
            toast('Logged in', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            return
           }


       if(response.payload.Role?.title === 'superAdmin'){
        localStorage.setItem("user", JSON.stringify(response.payload)); // Update the key to "user"
        navigate('/dashboard/Admin', { replace: true });  
        toast('Logged in', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return
       }
      }

      else if(response.payload.success === false){
       toast.error(response.payload.message,{
        autoClose:1000
       })
      }

      else {
        toast.error('invalid credentials',{autoClose:1000})
      }
    } catch (error) {
      toast.error(error)
    }
  };
  
  


  return (
    <>
    <br/>
   
        <FormWrapper className="container">
          <Grid container spacing={10} alignContent="center" justifyContent="center">
            <Grid item xs={12} md={6} >
              <Box sx={{ my: "20px" }} className="px-md-4 px-4">
                <FormTitle style={{ fontWeight: "bold", fontFamily: "poppins", fontSize: "48px" }}>Hi there!</FormTitle>
                <FormNavigateText sx={{ fontSize:'18px' ,fontFamily:'poppins'}}>
                  Don’t have an account?{" "}
                  <Link to="/auth/register" className="poppins-500 underline">
                    Sign Up
                  </Link>
                </FormNavigateText>
              </Box>

              <form onSubmit={handleSubmit(onSubmit)} className="mx-4">
                <Box sx={{ my: "5px" }}>
                  <TextField
                    type="email"
                    label="Email"
                    fullWidth
                    className="poppins-500"
                    variant="standard"
                    sx={{ marginTop: "10px", fontSize:'18px', fontFamily: 'poppins' }}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <Box sx={{ color: "red" }}>{errors.email.message}</Box>}
                </Box>
                <Box sx={{ my: "5px" }}>
                  <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    variant="standard"
                    sx={{ marginTop: "10px" }}
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <Box sx={{ color: "red" }}>{errors.password.message}</Box>}
                </Box>
                <Box sx={{ textAlign: "end", mt: "10px" }}>
                  <Link style={{ fontSize: '18px' }} to="/auth/forgot-password" className="hover:underline poppins-500">
                    Forgot Password
                  </Link>
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <FormButton type="submit" disabled={isLoading} sx={{ fontSize:'18px', padding:'7px 0px' }}>{isLoading ? "Loading..." : "Login"}</FormButton>
                </Box>
              </form>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: { xs: 'none', md: 'block' }, justifyContent: "center", alignItems: "center", height: "80vh" }}>
                {/* <FormSlider sliderData={sliderData} /> */}
                <img src={loginImg} className="img-fluid rounded" alt="register" style={{height:'600px',width:'100%'}}/>
              </Box>
            </Grid>
          </Grid>
        </FormWrapper>
     
    </>
  );
};

export default Login;
