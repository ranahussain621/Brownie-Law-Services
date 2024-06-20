import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesByID } from '../../../_redux/features/firm/firmSlice';




export default function Services({firmData}) {




  const { isLoading } = useSelector((state) => state.firm);

     const [services,setServices] = useState([])
     console.log("🚀 ~ Services ~ services:", services)

     const dispatch = useDispatch()
   
     useEffect(()=>{
      const getData = async ()=> {
        await dispatch(getServicesByID({user_id:firmData?._id}))
        .then((res)=>{
          setServices(res?.payload?.data)
        })
      }
      getData()
     },[firmData?._id,dispatch])


   


 
      


    

  return (
 <>
 
 <div className="row">

{
  isLoading ? <p>Loading...</p> : 
   firmData?.plan_price === "17000" ?
  services?.map((item, i) => {
    return (
      <div className="col-md-4 col-sm-4 my-3" key={i}>
        <div style={{
          backgroundImage: `url(${item.image})`,
          borderRadius: '10px',
          backgroundSize: 'cover',

          backgroundRepeat: 'no-repeat',
          height: '350px'
        }}>
        
          <div className='d-flex h-100 align-items-end justify-content-center'>
            <div className=' d-flex text-center p-3  rounded-3 w-100 p-2'
            style={{backgroundColor:'#000000a1'}}

           
            > 
            {/* <p  
               style={{
                color:'white',
                fontWeight:"semi bold",
                fontSize:"24px"
                
              }}
              className='poppins-300'>{item.type} : </p> */}
              <p className=' h5 poppins-500'
              style={{
                color:'white',
                fontWeight:"semi bold",
                fontSize:"24px",
                fontFamily
                :'poppins'

              }}
              > { item.title?.slice(0, 20)}</p>
             

             

            </div>

          </div>


        </div>



      </div>
    )
  }) : firmData?.plan_price === "10000" ?
  services?.slice(0, 3)?.map((item, i) => {
    return (
      <div className="col-md-4 col-sm-4 my-3">


        <div style={{
          backgroundImage: `url(${item.image})`,
          borderRadius: '10px',
          backgroundSize: 'cover',

          backgroundRepeat: 'no-repeat',
          height: '350px'
        }}>
        
          <div className='d-flex h-100 align-items-end justify-content-center'>
            <div className=' d-flex text-center p-3  rounded-3 w-100 p-2'
            style={{backgroundColor:'#000000a1'}}

           
            > 
            {/* <p  
               style={{
                color:'white',
                fontWeight:"semi bold",
                fontSize:"24px"
                
              }}
              className='poppins-300'>{item.type} : </p> */}
              <p className=' h5 poppins-300'
              style={{
                color:'white',
                fontWeight:"semi bold",
                fontSize:"24px"

              }}
              > { item.title?.slice(0, 20)}</p>
             

             

            </div>

          </div>


        </div>



      </div>
    )
  }) :firmData?.plan_price === "5000" ?
  services?.slice(0, 1)?.map((item, i) => {
    return (
      <div className="col-md-4 col-sm-4 my-3">


        <div style={{
          backgroundImage: `url(${item.image})`,
          borderRadius: '10px',
          backgroundSize: 'cover',

          backgroundRepeat: 'no-repeat',
          height: '350px'
        }}>
        
          <div className='d-flex h-100 align-items-end justify-content-center'>
            <div className=' d-flex text-center p-3  rounded-3 w-100 p-2'
            style={{backgroundColor:'#000000a1'}}

           
            > 
            {/* <p  
               style={{
                color:'white',
                fontWeight:"semi bold",
                fontSize:"24px"
                
              }}
              className='poppins-300'>{item.type} : </p> */}
              <p className=' h5 poppins-300'
              style={{
                color:'white',
                fontWeight:"semi bold",
                fontSize:"24px"

              }}
              > { item.title?.slice(0, 20)}</p>
             

             

            </div>

          </div>


        </div>



      </div>
    )
  }) :<h2 className='p-5 text-danger poppins-500 d-flex justify-content-center' style={{textTransform:'capitalize',fontSize:'18px'}}>We will provide shortly</h2>
}
</div>


 </>
  )
}
