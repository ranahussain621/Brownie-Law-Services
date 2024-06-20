import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React,{useState} from "react";
import ReviewImg from "../../assets/images/review.png";
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import {useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SubscribeUser } from "../../_redux/features/PaymentSlice";
import { UpdateClientProfileDetails } from "../../_redux/features/auth/authSlice";


const Form = () => {

 
  const stripe = useStripe();
  const elements = useElements();

  const { state } = useLocation();
  const user_id = state ? state?.user_id : null;
  const planId = state ? state?.planId : null;

      const {isLoading} = useSelector((state)=>state.payment)



     
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ Form ~ user:", user_id)

 
  

  const [data, setData] = useState({
    user_id: user?.user[0]?._id,
    card_number: "",
    card_expiry: "",
    card_cvc: "",
    user_name: "",
    
  });

  

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e, field) => {
    let value = e.target ? e.target.value : e;
    setData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };
 
  const submit = async (e) => {
    e.preventDefault();
  

  
// Perform form validation
let formValid = true;
const newErrors = {};


if (data.user_name === '') {
  newErrors.user_name = 'Name is required';
  formValid = false;
}



if (!formValid) {
  setErrors(newErrors);
  return; // Stop execution if form is not valid
}
  
 
   if(formValid){

   await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement,CardExpiryElement,CardCvcElement),
      billing_details: {
        name: data.user_name, 
      },
    })
   .then(async (resp)=>{
        await dispatch(SubscribeUser({
            user_id,
            planId,
            paymentMethodId:resp?.paymentMethod?.id
        }))
        .then(async (res)=>{
       
         toast.success(res?.payload?.success === true ? 'Subscribed Successfully!' : res?.payload?.message,{autoClose:2000}) 
            // Update the local storage to set plan_id as null
            if(user){
 const res = await dispatch(UpdateClientProfileDetails({id:user?.user?._id})) 
 const updatedUser = { ...user, user: { ...user.user, plan_id: res.payload.user.plan_id } };
 localStorage.setItem('user', JSON.stringify(updatedUser));
  navigate('/')
  return
            }
         navigate('/auth/login')
        }) 
        setData({
        card_number: "",
        card_expiry: "",
        card_cvc: "",
        user_name: "",
        
      });
    })
   

   
    } 
    
  };


  return (
   
   
      <Box className="my-5">
        <Container className="">

          {
            isLoading ? ( <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div> ) : (
            <Grid
            container className="my-3"
            alignItems="center"
            sx={{
              background: "#fff",
              borderRadius: "8px",
              border: "3px solid #9f9f9f",
              boxShadow:'2px solid red',
              padding: {
                xs: "20px",
                lg: "20px 50px",
              },
              
            }}
          >
            <Grid item xs={12} md={6}>
              <Box  sx={{ mt: "30px", }} >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#1A1F36",
                  }}
                >
                  Credit/Debit Card Details
                </Typography>

                <Box component="form">
                  <Box sx={{ mt: "20px" }}>
                    <label className="fw-semibold mb-2">
                      Name (as it appears on your card) (required)
                    </label>
                    <input type="text" 
                    className="w-100 px-3  p-2 rounded border"
                    name="cardName"
                    value={data.user_name}
                    onChange={(e) => handleChange(e, "user_name")}
                    autoComplete="none"
                    placeholder = "Name"
                    />
                   
                     {errors.user_name && (
                <span
                  className="error text-danger mt-1"
                  style={{ fontSize: "14px" }}
                >
                  {errors.user_name}
                </span>
              )}
                  </Box>

                  <Box sx={{ mt: "20px" }}>
                    <label className="fw-semibold mb-2">
                      Card number (required)
                    </label>
                 

              <CardNumberElement
             
                id="card_number"
                name="card_number"
                value={data.card_number}
                className="payment-input border rounded-2 p-2  px-3"
                onChange={(e) => handleChange(e, 'cardNo')}
                options={{ placeholder: '#' }}
              />
                   
                  </Box>

                  <Box sx={{ mt: "20px" }}>
                    <label className="fw-semibold mb-2">
                      Expiration date (required)
                    </label>
                  

<CardExpiryElement
                    
                    id="account_expire"
                    autoComplete="none"
                    name="card_expiry"
                    value={data.card_expiry}
                    className="payment-input py-2 px-3 p-2 border rounded"
                    onChange={(e) => handleChange(e, 'cardDate')}
                    options={{ placeholder: 'MM/YYYY' }}
                   
                   />

                {/* {errors.card_expiry && (
                    <span
                      className="error text-danger mt-1"
                      style={{ fontSize: "14px" }}
                    >
                      {errors.card_expiry}
                    </span>
                  )} */}
                  </Box>

                  <Box sx={{ mt: "20px" }}>
                    <label className="fw-semibold mb-2">
                      Security code (required)
                    </label>
                    {/* <input type="text" className="form-control"
                    maxLength={3}
                    onChange={(e) => handleChange(e, "card_cvc")}
                    placeholder ="CVC" 
                    onInput={(e) => {
                      e.target.value = e.target.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 3);
                    }}
                    value={data.card_cvc}
                    /> */}

<CardCvcElement
                    id="account_CVC"
                    name="card_cvc"
                    value={data.card_cvc}
                    className="payment-input py-2 px-3 p-2 border rounded"
                    onChange={(e) => handleChange(e, 'cardCVC')}
                    options={{ placeholder: 'CVC' }}
                  />
                     {/* {errors.card_cvc && (
                    <span
                      className="error text-danger mt-1"
                      style={{ fontSize: "14px" }}
                    >
                      {errors.card_cvc}
                    </span>
                  )} */}
                  </Box>
               

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: "25px",
                    }}
                  >
                    <Button
                      variant="contained"
                     type="button"
                      fullWidth
                      onClick={submit}
                      sx={{
                        color: "#fff",
                        background: "#709AA4",
                        borderRadius: "8px",
                        textTransform: "capitalize",
                        "&:hover": {
                          background: "#709AA4",
                        },
                      }}
                    >
                      Pay
                    </Button> 
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item  xs={12} md={6} sx={{ paddingLeft: { xs: "0px",lg: "80px",  }, }}   >
              <Box
               
              >
                <img className="img-fluid" src={ReviewImg} alt="" />
              </Box>
            </Grid>
          </Grid>
          )
          }
       

          
        </Container>
      </Box>
  

  );
};

export default Form;
