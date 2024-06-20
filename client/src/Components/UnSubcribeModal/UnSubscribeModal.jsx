import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UnSubscribeUser } from '../../_redux/features/PaymentSlice';
import { useDispatch } from 'react-redux';
import { UpdateClientProfileDetails } from '../../_redux/features/auth/authSlice';

export default function UnSubscribe(props) {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))
  console.log("🚀 ~ SubScriptionScreen ~ id:", user.user.plan_id)

     const dispatch = useDispatch()

  const disableSubcription = async () => {
    await dispatch(UnSubscribeUser({user_id:user?.user?._id}))
    .then(async (res)=>{ 
  toast.success('Membership UnSubscribed',{autoClose:2000})
  
   // Update the local storage to set plan_id as null
   const updatedUser = { ...user, user: { ...user.user, plan_id: null } };
   localStorage.setItem('user', JSON.stringify(updatedUser));

  await dispatch(UpdateClientProfileDetails({id:user?.user?._id}))
  props.closeWindow()
    })
  }
  

  return (
    <>
        <div className="card border-0 p-5 px-0">       
         
            <div className="card-bod my-3">
   
            <div>
                <p className='poppins-600 fw-semibold text-center fs-md-4'>Are You Sure to UnSubscribe Membership ?</p>

              <div className='d-flex justify-content-center mt-md-5'>
            <div className='mx-3'><button type='button' className='btn btn-light border px-md-5 poppins-500' onClick={props.closeWindow}>Cancel</button></div>
            <div className='mx-3'><button className='btn btn-dark px-md-4 poppins-500' onClick={disableSubcription}>Unsubscribe</button></div>
              </div>
            </div>
            </div>
            
      
    </div>
   
    </>

  )
}
