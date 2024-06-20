import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from "react-modal";
import { DeleteUser, getAllUsers} from '../../../_redux/features/auth/authSlice'



export default function DeleteNews({dltId,closeModal,ModalIsOpen}) {

     const {isLoading} = useSelector((state)=>state.auth)

  const dispatch = useDispatch({})

 const DeleteUseR = async () => {
       await dispatch(DeleteUser({id:dltId}))
       .then(async (res)=>{
       await dispatch(getAllUsers())
       toast.success(res?.payload?.message,{
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
      width:{
        xs:"300px",
        sm:"500px",
        lg:"600px"
      },
       borderRadius:'20px',
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
        <div className="card border-0">  
        <Modal
       
        isOpen={ModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >     
         
            <div className="p-4">
   
    
           
            <div>
                <p className='poppins-600 fw-semibold text-center fs-4 pt-0'>Are You Sure to Delete User ?</p>


             
              <div className='d-flex justify-content-center mt-md-5'>
            <div className='mx-3'><button type='button' className='btn btn-light px-4 border poppins-500' onClick={()=>closeModal()}>Cancel</button></div>
            <div className='mx-3'><button className='btn btn-dark px-4 poppins-500' onClick={DeleteUseR} >{isLoading ? "loading" : "Delete"}</button></div>
              </div>
            </div>
            </div>
            
      </Modal>
    </div>
   
    </>

  )
}
