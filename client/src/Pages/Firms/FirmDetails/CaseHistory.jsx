import React, { useEffect, useState } from 'react';
import Case from '../../../assets/firmsDetail-assets/case.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { allCasesbyUser } from '../../../_redux/features/firm/firmSlice';
export default function CaseHistory({firmData}) {


  const [allcases, setallcases] = useState()


const dispatch = useDispatch()


  const getData =async () =>{
 await dispatch(allCasesbyUser({user_id:firmData?._id}))
  .then(async (res)=>{
        setallcases(res?.payload?.data);  
  })
  
  }
useEffect(()=>{
  if(firmData?._id){
       getData() 
  }
   },[])


   const [open,setOpen] = useState(false)
   const [FileData,setFileData] = useState([])

   const openModal = (item) => {
    setFileData(item)
    setOpen(!open)
   }

  return (

    <>


      <div className="row mb-4">

        { firmData?.plan_price === '17000' ?
          allcases?.map((item, i) => {
            return (
              <div className="col-md-6 col-sm-6 mt-3" key={i} style={{minHeight:'300px'}}>
              <div style={{
                  backgroundImage: `url(${Case})`,
                  borderRadius: '10px',
                  backgroundSize: 'cover',

                  backgroundRepeat: 'no-repeat',
                   height: '100%'
                }}>

                  <div className='d-flex h-100  justify-content-center'>
                  <div className='position-relative text-center p-3 rounded-3 w-100' style={{ backgroundColor: '#000000a1', }}>
  <p className='h5 fw-bold poppins-300' style={{ color: 'white', textTransform: 'capitalize', fontSize: "24px", fontFamily: 'poppins' }}>{item.title?.slice(0, 20)}</p>

  {/* Description */}
  <p style={{ color: 'white', textTransform: 'capitalize', fontSize: "19px", textAlign: 'justify', fontFamily: 'poppins' }} className='poppins-200 mt-md-4 mt-sm-2 mt-5'>{item.description?.slice(0, 250)}</p>

  {/* Category */}
  <h2 className='mt-md-3 fs-2 text-white fw-semibold' style={{ fontFamily: 'poppins' }}>{item?.service_id?.title}</h2>

  {/* Icons */}
  <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
    <div className='p-2'>
      <FontAwesomeIcon style={{ cursor: 'pointer',color:'white' }} onClick={() => openModal(item)} icon={faDownload} />
    </div>
  </div>
</div>


                  </div>


                </div>



              </div>

              
            )
          }) : firmData?.plan_price === '10000' ?  allcases?.slice(0, 3)?.map((item, i) => {
            return (
              <div className="col-md-6 col-sm-6 mt-3" key={i} style={{minHeight:'300px'}}>


                <div style={{
                  backgroundImage: `url(${Case})`,
                  borderRadius: '10px',
                  backgroundSize: 'cover',

                  backgroundRepeat: 'no-repeat',
                   height: '100%'
                }}>

                  <div className='d-flex h-100  justify-content-center'>
                               <div className='position-relative text-center p-3 rounded-3 w-100' style={{ backgroundColor: '#000000a1', }}>
  <p className='h5 fw-bold poppins-300' style={{ color: 'white', textTransform: 'capitalize', fontSize: "24px", fontFamily: 'poppins' }}>{item.title?.slice(0, 20)}</p>

  {/* Description */}
  <p style={{ color: 'white', textTransform: 'capitalize', fontSize: "19px", textAlign: 'justify', fontFamily: 'poppins' }} className='poppins-200 mt-md-4 mt-sm-2 mt-5'>{item.description?.slice(0, 250)}</p>

  {/* Category */}
  <h2 className='mt-md-3 fs-2 text-white fw-semibold' style={{ fontFamily: 'poppins' }}>{item?.service_id?.title}</h2>

  {/* Icons */}
  <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
    <div className='p-2'>
      <FontAwesomeIcon style={{ cursor: 'pointer',color:'white' }} onClick={() => openModal(item)} icon={faDownload} />
    </div>
  </div>
</div>

                  </div>


                </div>



              </div>

              
            )
          }) : firmData?.plan_price === '5000' ? allcases?.slice(0, 1)?.map((item, i) => {
            return (
              <div className="col-md-6 col-sm-6 mt-3" key={i} style={{minHeight:'300px'}}>


                <div style={{
                  backgroundImage: `url(${Case})`,
                  borderRadius: '10px',
                  backgroundSize: 'cover',

                  backgroundRepeat: 'no-repeat',
                   height: '100%'
                }}>

                  <div className='d-flex h-100  justify-content-center'>
                               <div className='position-relative text-center p-3 rounded-3 w-100' style={{ backgroundColor: '#000000a1', }}>
  <p className='h5 fw-bold poppins-300' style={{ color: 'white', textTransform: 'capitalize', fontSize: "24px", fontFamily: 'poppins' }}>{item.title?.slice(0, 20)}</p>

  {/* Description */}
  <p style={{ color: 'white', textTransform: 'capitalize', fontSize: "19px", textAlign: 'justify', fontFamily: 'poppins' }} className='poppins-200 mt-md-4 mt-sm-2 mt-5'>{item.description?.slice(0, 250)}</p>

  {/* Category */}
  <h2 className='mt-md-3 fs-2 text-white fw-semibold' style={{ fontFamily: 'poppins' }}>{item?.service_id?.title}</h2>

  {/* Icons */}
  <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
    <div className='p-2'>
      <FontAwesomeIcon style={{ cursor: 'pointer',color:'white' }} onClick={() => openModal(item)} icon={faDownload} />
    </div>
  </div>
</div>

                  </div>


                </div>



              </div>

              
            )
          }) : <h2 className='p-5 text-danger poppins-500 d-flex justify-content-center' style={{textTransform:'capitalize',fontSize:'18px'}}>We will provide shortly</h2>
        }
      </div>

      {
        open &&  <iframe 
        src={`${FileData?.file}`} 
        title='File'
         frameborder="0"
         ></iframe>
      }

    </>

  )
}
