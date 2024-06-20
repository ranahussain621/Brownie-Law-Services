import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function LogOut(props) {

  const navigate = useNavigate()

  const logout = ()=>{
    localStorage.clear()
    toast.success('Successfully logged out!', {
      autoClose: 1000,
      });
    navigate('/')
  }

  return (
    <>
        <div className="card border-0 p-5 px-sm-0 px-0">       
         
            <div className="card-body px-md-5 p-sm-0 p-0">
   
            <div>
                <p className='poppins-600 fw-semibold text-center fs-md-5'>Are You Sure Log Out ?</p>

              <div className='d-flex justify-content-center mt-md-5 mt-2'>
            <div className='mx-3'><button type='button' className='btn btn-light border fw-bold fs-md-5 btn-cus'  onClick={props.closeWindow}>Cancel</button></div>
            <div className='mx-3'><button className='btn btn-dark border  fw-bold fs-md-5 btn-cus'  onClick={logout}>Log Out</button></div>
              </div>
            </div>
            </div>
            
      
    </div>
   
    </>

  )
}
