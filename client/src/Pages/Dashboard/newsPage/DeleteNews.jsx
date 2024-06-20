import React from 'react'
import { Deletenews, getNews, getTeamMember } from '../../../_redux/features/firm/firmSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function DeleteNews({selectedNewsId,closeWindow}) {


  const dispatch = useDispatch()

 const DeleteNewz = async () => {
       await dispatch(Deletenews(selectedNewsId))
       .then(async ()=>{
        closeWindow()
       await dispatch(getNews())
       await dispatch(getTeamMember())

       toast.dark('News Deleted Successfully',{
        autoClose:1000
       })
       })
 }



  return (
    <>
        <div className="card border-0">       
         
            <div className="card-body px-5">
   
    
           
            <div>
                <p className='poppins-600 fw-semibold text-center fs-4'>Are You Sure to Delete News ?</p>


             
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
