import React ,{useEffect,useState}from 'react'
import profileImage from '../../../assets/firmsDetail-assets/profile-imag.png';
import PhoneIcon from "../../../assets/firmsDetail-assets/phone-icon.png";
import ReviewStar from '../../../Components/ReviewStar';
import {getFirmTeamMember} from '../../../_redux/features/firm/firmSlice'
import { useDispatch } from 'react-redux'
import './style.css'



export default function TeamList({outsiderFirmId,firmData}) {
  const dispatch = useDispatch()

  const ratings = [1, 2, 3, 4, 5]




  const user = JSON.parse(localStorage.getItem('user'))

  const [data, setData] = useState({})


  useEffect(() => {
    const getData = async () => {
      if(outsiderFirmId === "outsiderFirmId"){
        const res = await dispatch(getFirmTeamMember({ firm_id: firmData?._id }))
        setData(res?.payload?.data)
      }
      else {
        const res = await dispatch(getFirmTeamMember({ firm_id: user?.user?._id }))
      setData(res?.payload?.data) 
      }
    
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
      <div className="row">

       {
        data?.length > 0 ?
          data?.map((item, i) => {
            return (
              <div className="col-md-6" key={i}>

                <div style={{
                  backgroundImage: `url(${profileImage})`,
                  borderRadius: '10px',
                  backgroundSize: 'cover',
                  marginBottom:"50px",
                  backgroundRepeat: 'no-repeat',
                  height: '400px'
                }}>
                 
                  <div className='d-flex justify-content-end'>
                    <img className='mt-2 me-3' src={PhoneIcon} alt="" style={{ maxWidth: '30px', }} />
                  </div>
                  <div className='d-flex h-100 w-100 align-items-end justify-content-center'>
                    <div className='text-center mb-5 mx-3 rounded-3 w-100 p-2'
                      style={{
                        backgroundColor: 'rgb(255 255 255 / 70%)'

                      }}
                    >
                      <p className='fw-bold h5 poppins-500'>{item.name}</p>
                      <p className='poppins-300'>{item.email}</p>

                      {/* rating stars */}
                      
                     <div className="stars-container">
                    {ratings.map((rating) => (
                      <ReviewStar filled={rating <= item.ratingValue} key={rating} />
                    ))}
                  </div>

                    </div>

                  </div>


                </div>



              </div>
            )
          })
          :<h2 className='p-5 text-dark poppins-500 d-flex justify-content-center' style={{textTransform:'capitalize',fontSize:'18px'}}>We will provide shortly</h2>
        } 
      </div>


    </>
  )
}