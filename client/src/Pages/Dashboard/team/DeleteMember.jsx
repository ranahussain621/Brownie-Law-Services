import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getTeamMember,DeleteTeamMember, getNews } from '../../../_redux/features/firm/firmSlice';

export default function DeleteNews({Id,closeWindow}) {
  





  const dispatch = useDispatch()

 const DeleteUser = async () => {
       await dispatch(DeleteTeamMember(Id))
       .then(async ()=>{
        closeWindow()
       await dispatch(getTeamMember())

       toast.dark('User Removed Successfully',{
        autoClose:1000
       })
       })
       .then(async () =>{
        await dispatch(getNews())
       })
 }





  return (
    <>
        <div className="card border-0">       
         
            <div className="card-body px-5">
   
    
           
            <div>
                <p className='poppins-600 fw-semibold text-center fs-4'>Are You Sure to Remove User ?</p>


             
              <div className='d-flex justify-content-center mt-3'>
            <div className='mx-3'><button type='button' className='btn btn-light' onClick={()=>closeWindow()}>Cancel</button></div>
            <div className='mx-3'><button className='btn btn-dark' onClick={DeleteUser} >Delete</button></div>
              </div>
            </div>
            </div>
            
      
    </div>
   
    </>

  )
}
