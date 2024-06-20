import React, { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

 import {useDispatch,useSelector} from 'react-redux'
import { UpdateClientProfile, UpdateClientProfileDetails } from '../../_redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { baseURL } from '../../_redux/axios/axios';




const FirmProfile = () => {

  const user =JSON.parse(localStorage.getItem('user'))
 


   const dispatch = useDispatch()

   const USER = useSelector((state)=>state.auth.user)


  const [info,setInfo] = useState({
    id: user[0]?._id,
    name: '',
    image:null,
    phone: '',
    country: 'usa',
    education_level:'software',
    address:""
    
})



   

const fileInputRef = useRef(null);

// Function to handle avatar click and trigger file input
const handleAvatarClick = () => {
  fileInputRef.current.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
 

  const reader = new FileReader();
  reader.onloadend = () => {
    setInfo((prevState) => ({
      ...prevState,
      image: reader.result,
    }));
  };

  if (file) {
    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
};



  const handlePhoneChange = (value) => {
    setInfo((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  // eslint-disable-next-line no-use-before-define
  const formData = new FormData()

  Object.keys(info).forEach((key) => {
    formData.append(key, info[key]);
  });

 



  useEffect(()=>{
    dispatch(UpdateClientProfileDetails({
        id:user[0]?._id
    }))
  },[dispatch])




  const save = async () => {
   try {
    await dispatch(UpdateClientProfile(formData))
   .then(()=>{
    toast.success('Profile Updated Succesfully',{
        autoClose:1000
    })
   })
   } catch (error) {
    toast.error(error)
   }
  }
   


  return (
    <div className="container-fluid mt-2 ps-4" style={{backgroundColor:"white"}}>
      <div className="row">
        <div className="row d-flex align-items-center">
        <div className="col-md-3 col-sm-5">
      <div className="profile-image-container">
        <input
           className=''
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />

        <div className="avatar" onClick={handleAvatarClick}>

          {
          }
            
            <img
                  src={USER?.user?.image ? `${baseURL}images/${USER?.user?.image}` : info?.image || 'https://bootdey.com/img/Content/avatar/avatar7.png'}
                  className="img-fluid img-thumbnail rounded-circle border"
                  style={{ width: '250px',height:'250px', position: 'relative' }}
                  alt="Avatar"
                />
                
       
        </div>
      </div>
    </div>
            <div className="col-md-3 col-sm-6">
                <h3 className='' style={{color:'#083A50', fontSize:"24px", fontWeight:"500", lineHeight:"29.05px"}}>
                  <u className='mb-3'> {USER?.user?.name ? USER?.user?.name : user[0]?.name}</u>
                </h3>
            
            </div>
            
        </div>
      
       
       
        <div className="row mt-3">
            <div className="col">
           <div className="row">
            <div className="col">
            <div className="mb-3">
  <label for="exampleFormControlInput1"  className="form-label" style={{color:"#083A50" , fontWeight:'500',lineHeight:"19.6px", fontSize:"16px"}}>Name</label>
  <input type="text" className="form-control" style={{border:"1px solid #CACED8"}}name='name' onChange={handleInputChange} value={info.name} id="exampleFormControlInput1" placeholder={USER?.user?.name ? USER?.user?.name : user[0]?.name} />
    </div>
            </div>
           
           </div>
          
         
           <div className="row">
           <div className="mb-3">
           <label for="exampleFormControlInput1" className="form-label" style={{color:"#083A50" , fontWeight:'500',lineHeight:"19.6px", fontSize:"16px"}}>Education Level</label>

           <select className="form-select" aria-label="Default select example" value={info.education_level} name='education_level' onChange={handleInputChange} >
  <option className='text-muted' value={'software'}>Software</option>
 
 
</select>
           </div>
           </div> 

           <div className="row">
            <div className="col">
            <div className="">
  <label for="exampleFormControlInput1"  className="form-label" style={{color:"#083A50" , fontWeight:'500',lineHeight:"19.6px", fontSize:"16px"}}>Address</label>
  <input type="text" className="form-control" style={{border:"1px solid #CACED8"}} name='address' onChange={handleInputChange} value={info.address} placeholder={USER?.user?.address ? USER?.user?.address : user[0]?.address} id="exampleFormControlInput1" />
    </div>
            </div>
           
           </div>
          
          
            </div>
            <div className="col">
            <div className="row">
           <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label" style={{color:"#083A50" , fontWeight:'500',lineHeight:"19.6px", fontSize:"16px"}}>Email</label>

 <input type="text" className="form-control" style={{border:"1px solid #CACED8"}} name='Publications' disabled  value={user[0]?.email}  id="exampleFormControlInput1" placeholder="" />


    </div>
           </div>
         
            <div className="row">
           <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label" style={{color:"#083A50" , fontWeight:'500',lineHeight:"19.6px", fontSize:"16px"}}>Phone Number</label>

<PhoneInput
className='w-100 phone-input p-2 rounded'
style={{border:"1px solid #CACED8"}}
inputProps={{
  name: "phone",
  required: true,
  autoFocus: true,
  
}}
placeholder={USER?.user?.phone ? USER?.user?.phone : user[0]?.phone}
country={"us"}
 value={info.phone}
onChange={handlePhoneChange}
/> 
 </div>
           </div> 
           <div className="row">
           <div className="mb-3">
           <label for="exampleFormControlInput1" className="form-label" style={{color:"#083A50" , fontWeight:'500',lineHeight:"19.6px", fontSize:"16px"}}>Country</label>

           <select className="form-select" aria-label="Default select example" name='country' onChange={handleInputChange} value={info.country} >
  <option className='text-muted' value={'usa'}>USA</option>
  
 
</select>
           </div>
           </div>
        
          
        
         

            </div>
        </div>
        <div className="row">
            <div className="col">
            <button className='btn px-5 rounded-3 mb-4 mt-3' onClick={save} style={{background:'#2E2829',color:'white' ,fontWeight:'700' ,letterSpacing:'0.9px'}}>
                   Save
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FirmProfile;
