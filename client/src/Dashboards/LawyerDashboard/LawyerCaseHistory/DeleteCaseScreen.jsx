import React from 'react'
import { DeleteCase,ListofAllCases } from '../../../_redux/features/firm/firmSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function DeleteCases({Id,closeWindow}) {



  const dispatch = useDispatch()

 const DeleteNewz = async () => {
       await dispatch(DeleteCase(Id))
       .then(async ()=>{
        closeWindow()
       await dispatch(ListofAllCases())

       toast.dark('Case Deleted Successfully',{
        autoClose:1000
       })
       })
 }



  return (
    <>
        <div className="card border-0">       
         
            <div className="card-body px-5">
   
    
           
            <div>
                <p className='poppins-600 fw-semibold text-center fs-4'>Are You Sure to Delete Case ?</p>


             
              <div className='d-flex justify-content-center mt-3'>
            <div className='mx-3'><button type='button' className='btn btn-light' onClick={()=>closeWindow()}>Cancel</button></div>
            <div className='mx-3'><button className='btn btn-dark' onClick={DeleteNewz} >Delete</button></div>
              </div>
            </div>
            </div>
            
      
    </div>
   
    </>

  )
}
