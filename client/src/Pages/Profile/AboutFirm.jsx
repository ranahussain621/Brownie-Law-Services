import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@material-tailwind/react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { UpdateFirmProfile } from '../../_redux/features/firm/firmSlice';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { UpdateFirmProfileDetails } from '../../_redux/features/firm/firmSlice';
import { useNavigate } from 'react-router-dom';



const AboutFirm = ({  previousProfile, setActiveTab}) => {
   
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    
    const buttonStyle = {
        backgroundColor: '#2E2829',
        padding: '50px',
        color: 'white', 
        borderRadius: "8px"
    };
       const {isLoading} = useSelector((state)=>state.auth)

    const backButton = {
        borderRadius: "8px",
        padding: '50px',
        marginRight: 10,
        color: 'black', 
        border: '2px solid #2E2829',
    };
    const [aboutFirmInfo, setAboutFirmInfo] = useState({
        id:user.user._id,
        name:previousProfile.name,
        address:previousProfile.address,
        phone:previousProfile.phone,
        image:previousProfile.image,
        ourMission:  '',
    })
    
 
    
 
    useEffect( ()=>{
        const gyData = async () =>{
                 const res = await dispatch(UpdateFirmProfileDetails({ id: user?.user?._id }));
                 setAboutFirmInfo(prevState => ({
                    ...prevState,
                    ourMission: res.payload?.user?.ourMission
                }));
        }
        gyData()
    },[])


 
    
    
    


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAboutFirmInfo((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const handleBackButton = () => {
        if (setActiveTab) {
            setActiveTab((prevStep) => prevStep - 1);
        }
      }; 
      
      const submitInfo = async () => {
        const formData = new FormData();
        
        for (const [key, value] of Object.entries(aboutFirmInfo)) {
            formData.append(key, value || '');
        }
        
        await dispatch(UpdateFirmProfile(formData))
            .then(async (response) => {
                if (response?.payload?.success === true) {
                    toast.success(response?.payload?.message, { autoClose: 2000 });
                    handleBackButton()
                }
            });
    }

    return (
        <div className='row mt-md-4'>
        
            <div className=''>
                <Typography className='mb-2 fs-5 poppins-500'>Our Mission</Typography>
                <TextareaAutosize
                    type="text"
                    value={aboutFirmInfo.ourMission}
                    name="ourMission"
                    placeholder="Our Mission"
                    onChange={handleInputChange} // Use onChange instead of onClick
                    minRows={18}
                    style={{ width: "100%", padding: "10px", backgroundColor: "#EFF1F9" }}
                />
            </div>


            <div className='mt-4'>
                <Button className='px-md-5' sx={{padding:'0px 58px'}} variant='outlined' style={backButton} onClick={handleBackButton} >Back</Button>
                <Button className='mt-4 mt-lg-0' style={buttonStyle} disabled={isLoading} onClick={submitInfo}>{isLoading ? "Loading...":"Update"}</Button>
            </div>
        </div>
    )
}

export default AboutFirm
