import React from 'react'

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from "react-modal";
import { DeleteUser, getAllUsers} from '../../../_redux/features/auth/authSlice'
import { UnSubscribeUser } from '../../../_redux/features/PaymentSlice';





export default function CancelSubscriptionModal({id,closeModal,ModalIsOpen}) {



  const dispatch = useDispatch({})

 const CancelSubscription = async () => {
       await dispatch(UnSubscribeUser({user_id:id}))
       .then(async (res)=>{
       await dispatch(getAllUsers())
       toast.dark(res?.payload?.message ? res?.payload?.message : 'Subscription Cancelled',{
        autoClose:1000
       })
       closeModal()
       })
 }


 const customStyles = {

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
  },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
     padding:'4rem',
      width: "600px",
       borderRadius:'20px',
      transform: "translate(-50%, -50%)",
      
    },
  };

  return (
    <>
      
        <Modal
        isOpen={ModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >     
           <div className="card border-0 p-4">  
                <p className='poppins-600 fw-semibold text-center fs-4'>Cancel User Subscription ?</p>


             
              <div className='d-flex justify-content-center mt-md-5'>
            <div className='mx-3'><button type='button' className='btn btn-light px-5 poppins-500 border' onClick={()=>closeModal()}>Cancel</button></div>
            <div className='mx-3'><button className='btn btn-dark poppins-500' onClick={CancelSubscription} >Cancel Subscription</button></div>
              </div>
          
       
     </div>         
      </Modal>
  
   
    </>

  )
}
