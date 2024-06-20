import React from 'react'
import { Deletenews, getNews } from '../../../_redux/features/firm/firmSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from "react-modal";




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
     borderRadius:'20px',
    transform: "translate(-50%, -50%)",
  },
};

export default function DeleteNews({dltId,closeModal,ModalIsOpen}) {


 const user = JSON.parse(localStorage.getItem('user')) 
  const dispatch = useDispatch()

 const DeleteNewz = async () => {
       await dispatch(Deletenews(dltId))
       .then(async (res)=>{
      
        await dispatch(getNews({id:user?.user?._id}))
       toast.success(res?.payload?.message,{
        autoClose:1000
       })
         closeModal()
       })
 }



  return (
    <>

<Modal
       
       isOpen={ModalIsOpen}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal"
     >

   <div className="card border-0 p-4">       

                <p className='poppins-600 fw-semibold text-center fs-md-4 pt-0 mt-0'>Are You Sure Delete News ?</p>

              <div className='d-flex justify-content-center mt-md-5'>
            <div className='mx-3'><button type='button' className='btn btn-light px-4 border poppins-500' onClick={()=>closeModal()}>Cancel</button></div>
            <div className='mx-3'><button className='btn btn-dark px-4 poppins-500' onClick={DeleteNewz} >Delete</button></div>
              </div>
            </div>

    
     </Modal>

     
   
    </>

  )
}
