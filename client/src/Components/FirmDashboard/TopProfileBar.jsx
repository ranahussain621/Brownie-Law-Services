import React,{useEffect} from 'react'

import { useDispatch,useSelector } from 'react-redux';
import { UpdateClientProfileDetails } from '../../_redux/features/auth/authSlice';





export default function TopProfileBar() {

  const user = JSON.parse(localStorage.getItem('user'));

  const userID= user?.user?._id

  const USER = useSelector((state)=>state.auth.user)

  const dispatch = useDispatch()

      useEffect(()=>{
       dispatch(UpdateClientProfileDetails({
        id:userID
       }))
      },[userID,dispatch])

 
  

  return (
    <>
    
    <div className="col-md-12 p-0">
                <div className="card mb-4 border-0 ">
                <div className="card-body ">
                  <div className="row p-0 m-0">
                   
                   <div className="col-md-8">

                   </div>

                   <div className=" col-md-4 p-0 d-flex align-items-center ps-md-5 ">
                    <div className="ps-md-4 pe-md-2">
                          

<img  src={USER?.user?.image ? USER?.user?.image : 'https://bootdey.com/img/Content/avatar/avatar2.png' }
   className='avatar img-circle img-fluid  rounded-circle'
   style={{width:'60px',height:'60px'}}
   alt="No Pic"
/>
                    </div>
                    <div className="">
                        <p className='fw-bold poppins-500 d-flex'>Welcome, <p className='poppins-300 fw-semibold ps-1'>{user ? user.user?.name : 'User'}</p></p>
                 
                    </div>
                 
                   </div>
              
    
                  </div>
                  
                </div>
              </div>
              </div>
    </>
  )
}
