import React,{useEffect} from 'react'
import UserList from './UserList';
import { useDispatch } from 'react-redux';
import { getFirmTeamMember, getTeamMember } from '../../../_redux/features/firm/firmSlice';
import { useState } from 'react';
import empty from '../../../assets/trash.png'




export default function Dashboard() {


    const User = JSON.parse(localStorage.getItem('user'));

   const [data,setData] = useState()

   
   useEffect(() => {
    const getData = async () => {
      await dispatch(getFirmTeamMember({ firm_id: User?.user?._id }))
        .then((res) => {
          setData(res?.payload?.data)
        })
    }
    getData()
  }, [])


      const dispatch = useDispatch()

      useEffect(()=>{
        const getData = async () => {
           await dispatch(getTeamMember())
        }
        getData()
       },[dispatch])


   const [openServices,setOpenServices] = useState(false)

    const showOpenServices = () => {
        setOpenServices(!openServices)
    }

  return (
    <>
    <div className='mx-5 mt-5'>
    <div className='d-flex justify-content-between '>
      <div className='poppins-600 fw-bold ' style={{fontSize:'30px'}}>
            Our Team
        </div>
   
    </div>
  

   
    
         <div className="row mt-md-5">
        {   data?.length > 0 ?
            data?.map((item,i)=>{
                return(

                    <>
                       <div className="col-md-3 col-sm-3 col-xs-6 py-3 card rounded-5 mx-4" key={i}>
            
            <div className='d-flex justify-content-center mt-3' >
                <div className='px-3'>
                     <img  
                    src={item?.image ? item.image : 'https://bootdey.com/img/Content/avatar/avatar7.png'}
                     className='img-fluid rounded'
                     style={{width:'150px',height:'100px'}}
                     alt="No Pic"/>
                </div>
               
            </div>

        
            <div className=" text-center mt-3">
                <p className='poppins-500  d-flex justify-content-center mb-0'>{item.name ? item.name : 'No Name'}</p>
                <p className='poppins-500 d-flex justify-content-center pt-0 mt-0 mb-3'>{item.email ? item.email : 'No Email'}</p>
      
        </div>

        </div>
                    </>
                )
            }) : <div className='d-flex justify-content-center py-5'> 
            <div>
               <img src={empty} alt='' className='img-fluid' style={{width:70,height:80}} /> 
            <h2 className='text-center pt-md-3' style={{fontWeight:500}}>No Data</h2></div>   
            </div>
          
        }
     
    </div> 
    


    <div className="row mt-5 ">
        <div className="col-md-12">
        <div className='poppins-600 fw-bold ' style={{fontSize:'30px'}}>
            List of all Lawyers
        </div>

        </div>
<UserList/>      
    </div>     
    </div>
   
 
    </>
  )
}
