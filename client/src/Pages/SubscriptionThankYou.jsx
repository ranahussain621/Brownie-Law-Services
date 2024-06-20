import React from 'react'
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux'
// import { getUserDetails } from '../redux/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { UpdateClientProfile } from '../_redux/features/auth/authSlice';

const SubscriptionThankYou = () => {


           const user = JSON.parse(localStorage.getItem("user"));
     
        const dispatch = useDispatch()

     
         const user_id = user?.user[0]?._id

 const navigate = useNavigate()

      const move =  async() =>{  
      
            const formData = new FormData();
            
            formData.append("id",user_id);
            
            formData.append("subStatus",true)
          
            await dispatch(UpdateClientProfile(formData))
         
        

        
        localStorage.clear()
            navigate('/')
   
    }

  return (
  
    <div className="container" style={{top:0,left:0,right:0}}>
        <div className="row justify-content-center align-item-center mt-5 h-100">
            <div className="col-6">


            <div className="d-flex justify-content-center align-items-center mt-5">
            <div>
                <div className="mb-4 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75"
                        fill="currentColor" className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
                <div className="text-center">
                    <h1 style={{color:'rgb(112, 155, 165)'}}>Thank You !</h1>
                    <p style={{color:'rgb(112, 155, 165)'}}>For your subscription</p>
                    <button className="btn btn-sm px-4 text-white" style={{background:'rgb(112, 155, 165)'}} onClick={move}>Back Home</button>
                </div>
            </div>


            </div>
            </div>
        </div>
    </div>
  )
}

export default SubscriptionThankYou