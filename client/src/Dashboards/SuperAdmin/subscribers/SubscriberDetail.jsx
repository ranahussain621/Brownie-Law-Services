
import React, { useEffect, useState } from "react";
import Modal from "react-modal";


import { Box, IconButton,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from 'react-redux'
// import { AddEvent, GetAllEvents } from "../../../redux/features/EventSlice";
import { toast } from "react-toastify";
import { CancelSubscriptionApi, SubscribedList, SubscriberDetailApi, UpdateUser } from "../../../_redux/features/PaymentSlice";
import { UpdateClientProfile } from "../../../_redux/features/auth/authSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: '15px',
    boxShadow: '5px 5px 5px 5px #00000052',
    width: "60%",
   
    transform: "translate(-50%, -50%)",
  },
};



const SubscriberDetail = ({ closeModal, ModalIsOpen,val }) => {

  const [detail, setdetail] = useState([]);

  const dispatch = useDispatch()
  useEffect(()=>{
    const getValues = async()=>{
        const value = await dispatch(SubscriberDetailApi(val?.id))
        const getData = value.payload
     
        setdetail(getData?.subscriptions?.data[0])
    }
getValues()
  },[val?.id,dispatch])


  

  const currentPeriodEndDate = new Date(detail?.current_period_end * 1000);
    const currentPeriodStartDate = new Date(detail?.current_period_start * 1000);

    // Format Date objects into readable strings
    const currentPeriodEndString = currentPeriodEndDate.toLocaleString(); // Adjust the format as needed
    const currentPeriodStartString = currentPeriodStartDate.toLocaleString(); // Adjust the format as needed



    const updateUserStatus = async()=>{
            //update user subscription id
 
    const formData = new FormData();
    
    formData.append("email",val?.email);
    
    
    formData.append("subStatus",false)
  
    await dispatch(UpdateClientProfile(formData))
 


    }


  const cancelSubscripton =async()=>{

await dispatch(CancelSubscriptionApi(detail?.id))

.then((res)=>{
  if(res.payload.success===true){

    toast.success(res?.payload?.message,{autoClose:1000})
    dispatch(SubscriberDetailApi(val?.id))
    updateUserStatus()
    dispatch(SubscribedList())
    closeModal()

  }else{
toast.error("someThing wrong please try later",{autoClose:1000})
  }

})
  }
  return (
    <>
      <Box className="virtualevent">
        <Modal
          isOpen={ModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Box sx={{ padding: "20px" }} >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

              }}
            >
              <div className="w-100">
                
              </div>
              <div className="d-flex justify-content-end w-100">
                <IconButton onClick={closeModal} aria-label="delete" style={{ border: '2px solid #709AA4' }} className="rounded-4">
                  <CloseIcon sx={{ color: "#0000009e" }} />
                </IconButton>
              </div>

            </Box>
           

            <div className="container-fluid ">
        <div className="p-md-4 p-sm-2 p-1">
            <div className="row poppins-500" style={{color:'#CACED8',fontWeight:'500'}}>
                <div className="col-md-9 col-lg-9 col-sm-4 fs-3 " >Subscriber Detail</div>
                <div className="col" >

                <button className='btn px-4 btn-dark' 
                onClick={cancelSubscripton}
                disabled={detail?.status==='canceled'}
                style={{fontWeight:'500'}}>Cancel Subscription</button>
                </div>
            </div>
            
            {/* General detail */}
            <div className="mt-4">
            <div className="row">
            <div className="col row justify-content-center">
                <div className="col-6 ">
                      <p className="poppins-500" style={{color:'black'}}>Name</p></div>
                </div>
              
            <div className="col"><p className="inter-300 text-muted" >
                {detail?.default_payment_method?.billing_details?.name}</p>
                </div>
         </div>

   <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Email</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 text-muted" >
                {detail?.default_payment_method?.billing_details?.email}</p>
                </div>
         </div>


       
         <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Current Period Start</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 text-muted" >
                {currentPeriodStartString}</p></div>
         </div>


         <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Current Period End</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 text-muted" >
                {currentPeriodEndString}</p></div>
         </div>



            </div>
            
      {/* plan detail */}
      <div className="row poppins-500" style={{color:'#CACED8',fontWeight:'500'}}>
                <div className="col-md-9 col-lg-9 col-sm-4 fs-5 " >Plan</div>

            </div>

              <div className="mt-4">
            <div className="row">
            <div className="col row justify-content-center">
                <div className="col-6 ">
                      <p className="poppins-500" style={{color:'black'}}>Plan Amount</p></div>
                </div>
              
            <div className="col"><p className="inter-300 text-muted" >
                {Math.floor(detail?.plan?.amount / 100)}</p>
                </div>
         </div>

   <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Currency</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 text-muted" >
                {detail?.plan?.currency}</p>
                </div>
         </div>


       
         <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Interval</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 text-muted" >
                {detail?.plan?.interval}</p></div>
         </div>


         <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Interval Count</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 text-muted" >
                {detail?.plan?.interval_count}</p></div>
         </div>
         <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Billing Scheme</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 text-muted" >
                {detail?.plan?.billing_scheme}</p></div>
         </div>

         <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Status</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 text-muted" >
                {detail?.plan?.active===true ?  "Active":"inActive"}</p></div>
         </div>


  {/* status detail */}
  <div className="row poppins-500" style={{color:'#CACED8',fontWeight:'500'}}>
                <div className="col-md-9 col-lg-9 col-sm-4 fs-5 " >Status</div>

            </div>
            <div className="mt-4">

            </div>
 <div className="row">
           <div className="col row justify-content-center">
                <div className="col-6 ">
                <p className="poppins-500" style={{color:'black'}}>Status</p>
                </div>
                </div>
            <div className="col"><p className="inter-300 " 
            style={{color:`${detail?.status==='canceled' ? 'red':'green'}`}}
            >
                {detail?.status}</p></div>
         </div>

            </div>
        

       
        </div>
    </div>

          </Box>
        </Modal>

        
      </Box>

    </>
  );
};

export default SubscriberDetail;
