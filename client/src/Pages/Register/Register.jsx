import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Box, Container, Grid, TextField } from "@mui/material";
import { FormButton, FormNavigateText, FormTitle, FormWrapper } from "../../GlobalStyle/globalStyle";
import FormSlider from "../../Components/FormSlider/FormSlider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './register.css'
import { InvitedLawyerInfoApi, UpdateClientProfileDetails, registerUser } from "../../_redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useActiveItem } from "../../ActiveItemContext";
import registerImg from '../../assets/register.jpg'

const Register = () => {
  const [role, setRole] = useState('')
  const [initialValues, setInitialValues] = useState({
    firmName:'',
    email:'',
    firm_id:'',
    plan_id:'',
    plan_price:''
  });


  
  const { isLoading } = useSelector((state) => state.auth);
  const param = useParams();
  const lawyerId = param.id;
 

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     const getData = async () => {
        const value = await dispatch(UpdateClientProfileDetails({ id: lawyerId }));
        const data = value.payload.user;
        setInitialValues((prev) => ({
          ...prev,
          firmName: data?.name,
          // email: data?.email,
          firm_id: data?._id,
          plan_id:data?.plan_id,
          plan_price:data.plan_price


        }));
      }
    if (lawyerId) { 
      getData();
    }
  }, [lawyerId, dispatch]);

  const sliderData = [
    {
      img: "https://i.ibb.co/KXBmqNJ/pexels-veeterzy-38136.png",
     
    },
    {
      img: "https://i.ibb.co/wJ8FVCC/pexels-veeterzy-38136-1.png",
     
    },
    {
      img: "https://i.ibb.co/JrbSPH4/pexels-veeterzy-38136-3.png",
     
    },
    {
      img: "https://i.ibb.co/njPZhQ3/pexels-veeterzy-38136-2.png",
     
    },
  ];

  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = async (data) => {

    const res = await dispatch(registerUser({ ...data, role, firm_id: initialValues.firm_id,plan_id:initialValues.plan_id,plan_price:initialValues.plan_price }));

    try {
      if (res.payload.success === true) {
        toast.success(res.payload.message, { autoClose: 1000 });
        navigate("/auth/login");
      }
      if (res.error.message === "Rejected") {
        toast.warn(res.payload, { autoClose: 1000 });
      }
    } catch (error) {
      toast.error(error);
    }
  };


    const {resetActive} = useActiveItem()

  return (
    <>
      <br />
    
        <FormWrapper className=" container">
          <Grid container spacing={3} alignContent="center" justifyContent="center">
           
              <Grid item xs={12} md={6} >
              <Box className="px-md-4 px-4">
                <FormTitle style={{ fontWeight: "bold", fontFamily: "poppins", fontSize: "48px" }}>Get Started</FormTitle>
                <FormNavigateText style={{ fontSize: "18px", fontFamily: "poppins" }} className="poppins-500">
                  Already have an account?
                  <Link to="/auth/login" className="font-semibold underline">Sign In</Link>
                </FormNavigateText>
              </Box>

              <form onSubmit={handleSubmit(onSubmit)} className="mx-4">
                <Box my={3}>
                  <TextField
                    type="text"
                    label="Name"
                    fullWidth
                    variant="standard"
                    sx={{ fontSize: '18px', fontWeight: 900 }}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <Box sx={{ color: "red" }}>{errors.name.message}</Box>}
                </Box>

                <Box my={3}>
                  <TextField
                    type="email"
                    label="Email"
                    fullWidth
                    variant="standard"
                    //  aria-readonly={initialValues?.email} 
                    // value={initialValues?.email}
                    sx={{ fontSize: '18px', fontWeight: 900 }}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <Box sx={{ color: "red" }}>{errors.email.message}</Box>}
                </Box>

                <Box my={3}>
                  <TextField
                    type="text"
                    label="Address"
                    fullWidth
                    variant="standard"
                    sx={{ fontSize: '18px', fontWeight: 900 }}
                    {...register("address", { required: "Address is required" })}
                  />
                  {errors.address && <Box sx={{ color: "red" }}>{errors.address.message}</Box>}
                </Box>

                <Box my={3}>
                  <TextField
                    type="number"
                    label="Phone"
                    fullWidth
                    variant="standard"
                    sx={{ fontSize: '18px', fontWeight: 900 }}
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && <Box sx={{ color: "red" }}>{errors.phone.message}</Box>}
                </Box>

                <Box my={3}>
                  <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    variant="standard"
                    sx={{ fontSize: '18px', fontWeight: 900 }}
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <Box sx={{ color: "red" }}>{errors.password.message}</Box>}
                </Box>

                {initialValues?.firmName &&
                  <Box my={3}>
                    <TextField
                      type="text"
                      label="Firm Name"
                      fullWidth
                      variant="standard"
                      value={initialValues?.firmName}
                      aria-readonly
                      sx={{ fontSize: '18px', fontWeight: 900 }}
                    />
                  </Box>
                }

                <div className="row">
                  <div className="col">
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        disabled={lawyerId?.length > 0}
                        type="radio"
                        name="role"
                        value="firm"
                        checked={role === 'firm'}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label className="form-check-label" style={{ color: '#rgb(87 108 111);', letterSpacing: '1px', fontSize: "18px", fontFamily: "poppins" }}>Firm</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="lawyer"
                        checked={role === 'lawyer'}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label className="form-check-label" style={{ color: '#rgb(87 108 111);', letterSpacing: '1px', fontSize: "18px", fontFamily: "poppins" }}>Lawyer</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check mt-3">
                      <input
                        disabled={lawyerId?.length > 0}
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="client"
                        checked={role === 'client'}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <label className="form-check-label" style={{ color: '#rgb(87 108 111);', letterSpacing: '1px', fontSize: "18px", fontFamily: "poppins" }}>Client</label>
                    </div>
                  </div>
                </div>

                <Box my={3}>
                  <FormButton type="submit" sx={{ fontSize: '18px', padding: '7px 0px' }}>{isLoading ? "Loading..." : "Sign Up"}</FormButton>
                </Box>

                <Box my={3}>
                  <FormNavigateText style={{ fontFamily: "Poppins", fontSize: "14px" }}>
                    By Sign Up I agree to <Link to="/" className="font-medium underline" onClick={()=>resetActive(null)}>Privacy Policy</Link>
                  </FormNavigateText>
                </Box>
              </form>
            </Grid>

            <Grid item xs={12} md={5}> 
              <Box sx={{display: { xs: 'none', md: 'block' }}}>
                {/* <FormSlider sliderData={sliderData} /> */}
                <img src={registerImg} className="img-fluid rounded" alt="register" style={{height:'600px',width:'100%'}}/>
              </Box>
            </Grid>  
           
          
          </Grid>
        </FormWrapper>
     
    </>
  );
};

export default Register;
