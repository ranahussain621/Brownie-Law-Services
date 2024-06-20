import { Button, Typography } from '@material-tailwind/react'
import profileIcon from "../../assets/images/icon2.png";
import emailIcon from "../../assets/images/email.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState, useEffect } from 'react'
import codes from 'country-calling-code';
import { Country, State, City } from 'country-state-city';
import { useDispatch, useSelector } from 'react-redux'
import { UpdateFirmProfileDetails } from '../../_redux/features/firm/firmSlice';


const ProfileInfo = ({profilePreviousData,setActiveTab}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    
    const {isLoading} = useSelector((state)=>state.auth)
    
    const [selectedCode, setSelectedCode] = useState('');
    // const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const countryOptions = Country.getAllCountries();
    const [selectedState, setSelectedState] = useState('');


    const [profileInfo, setProfileInfo] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        state: "",
        image: null
    })

    const [Value, setValue] = useState();
    const [userImage, setuserImage] = useState();


  

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setuserImage(file);
        setProfileInfo((prevState) => ({
          ...prevState,
          image: file
        }));
      };


  
    const countriesList = codes;
    const codeOptions = countriesList.map((country) => ({
        value: country.countryCodes[0], 
        label: `${country.country} (+${country.countryCodes[0]})`,
    }));

    const handleCodeChange = (event) => {
        const selectedValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setSelectedCode(selectedValue);
        // setSelectedCountry(
        //     countriesList.find((country) => country.countryCodes[0] === selectedValue)?.country || ''
        // );
        setProfileInfo((prevValue) => ({
            ...prevValue,
            phone: selectedValue,
        }));
    };
    

    const handlePhoneNumberChange = (event) => {
        const phoneNumber = event.target.value;
        setProfileInfo((prevValue) => ({
            ...prevValue,
            phone: phoneNumber,
        }));
    };

    const handleCountryCodeChange = (event) => {
        const selectedCountryCode = event.target.value;
        setSelectedCountryCode(selectedCountryCode);     
      const selectedCountryObject = countryOptions.find(
            (country) => country.isoCode === selectedCountryCode
        );
        setProfileInfo((prevValue) => ({
            ...prevValue,
            country: selectedCountryObject ? selectedCountryObject.name : '',
        }));
    };
  
    useEffect(() => {
        if (selectedCountryCode) {
            const cities = City.getCitiesOfCountry(selectedCountryCode);
            setSelectedCity(cities[0]?.name || '');
        }
    }, [selectedCountryCode]);

    const handleCityChange = (event) => {
        const selectedCity = event.target.value;
        setSelectedCity(selectedCity);
        setProfileInfo((prevValue) => ({
            ...prevValue,
            city: selectedCity,
        }));
    };


    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setSelectedState(selectedState);
        setProfileInfo((prevValue) => ({
            ...prevValue,
            state: selectedState,
        }));
    };

    useEffect(() => {
        if (selectedCountryCode) {
            const states = State.getStatesOfCountry(selectedCountryCode);
            setSelectedState(states[0]?.name || '');
        }
    }, [selectedCountryCode]);

    useEffect(() => {
        const fetchData = async () => {
               await dispatch(UpdateFirmProfileDetails({ id: user?.user?._id}))
                .then((response) => {

                    console.log(response.payload.user)
                   setProfileInfo(prev => ({
                        ...prev,
                        name: response?.payload?.user?.name,
                        phone: response?.payload?.user?.phone,
                        address: response?.payload?.user?.address,
                        image: response?.payload?.user?.image,
                        id:response?.payload?.user._id,
                    }));
                    setSelectedCountryCode(response?.payload?.user?.country)
                     setValue(response?.payload?.user);
                })      
        }
        fetchData();
    }, [user?.user?._id,dispatch]);


    // const save = async () => {
    //     const formData = new FormData();
    //     for (const key in profileInfo) {
    //       formData.append(key, profileInfo[key]);
    //     }
    //     try {
    //       await dispatch(UpdateFirmProfile(formData))
    //       .then(async () => { toast.success('Profile Updated Succesfully', { autoClose: 1000 })
    //         await dispatch(UpdateFirmProfileDetails({ id: user.user._id }) );
           
    //       });
    //     } catch (error) {
    //       toast.error(error);
    //     }
    //   };

  

      const save = (data) => {
        profilePreviousData(data)
         if (setActiveTab) {
            setActiveTab((prevStep) => prevStep + 1);
        }
      }

    return (
     
      
            <div className="row d-flex align-items-center">
                <div className="col-md-8 col-sm-12 order-2 order-sm-2">
            
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3">
                            <Typography className='mb-2 poppins-500' style={{fontSize:'18px'}}>Name</Typography>
                            <input
                                type="text"
                                className='mt-md-3'
                                value={profileInfo.name}
                                name="name"
                                placeholder='Name...'
                                onChange={(e) => {
                                    setProfileInfo((prevValue) => ({
                                        ...prevValue,
                                        name: e.target.value,
                                    }));
                                }}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#EFF1F9',
                                    padding: 14,
                                    borderRadius: 5,
                                    paddingLeft: '40px', // Add left padding for the icon
                                    backgroundImage: `url(${profileIcon})`, // Use the profile icon as a background image
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '10px center', // Adjust the position of the icon
                                }}
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <Typography className='mb-2 poppins-500' style={{fontSize:'18px'}}>Email</Typography>
                           
                            <input
                                className='mt-md-3'
                                type="email"
                                value={user?.user?.email}
                                style={{
                                    width: '100%',
                                    backgroundColor: 'rgb(239, 241, 249)',
                                    padding: 14,
                                    borderRadius: 5,
                                    paddingLeft: '40px', 
                                    backgroundImage: `url(${emailIcon})`, 
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '10px center', 
                                }}
                            />
                        </div>
                        <div className="col-12 col-lg-6 mb-3 mt-md-4">
                            <div>
                                <label htmlFor="phone" className='poppins-500' style={{fontSize:'18px'}}>Phone Number</label>
                            </div>
                            <div className="row mt-md-3">
                                <div className="col-4 mb-2">
                                    <select
                                        id="phone"
                                        value={selectedCode}
                                        onChange={handleCodeChange}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#EFF1F9',
                                            padding: '14px 5px 14px 10px',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        <option value="" disabled>
                                            Select...
                                        </option>
                                        {codeOptions.map((option, index) => (
                                            <option key={`${option.value}-${index}`} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-8">
                                    <input
                                        type="text"
                                        value={profileInfo.phone}
                                        onChange={handlePhoneNumberChange}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#EFF1F9',
                                            padding: 14,
                                            borderRadius: 5,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-3 mt-md-4">
                            <Typography className='poppins-500' style={{fontSize:'18px'}}>Address</Typography>

                            <input
                                type="text"
                                className='mt-md-3'
                                value={profileInfo.address}
                                name="address"
                                placeholder='address'
                                onChange={(e) => {
                                    setProfileInfo((prevValue) => ({
                                        ...prevValue,
                                        address: e.target.value,
                                    }));
                                }}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#EFF1F9',
                                    padding: '14px 5px 14px 10px',
                                    borderRadius: 5,
                                    paddingLeft: '40px', // Add left padding for the icon
                                    backgroundImage: `url(${LocationOnIcon})`, // Use the profile icon as a background image
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '10px center', // Adjust the position of the icon
                                }}
                            />
                        </div>
                        {/* <div className="col-12 col-lg-6 mb-3 mt-md-4">
                            <Typography className="poppins-500" style={{fontSize:'18px'}}>Country</Typography>
                            <select
                                value={selectedCountryCode}
                                className='mt-md-3'
                                onChange={handleCountryCodeChange}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#EFF1F9',
                                    padding: 14,
                                    borderRadius: '5px',
                                    paddingLeft: '10px', // Add left padding for the icon
                                }}
                            >
                                <option value="" disabled>
                                    Select Country
                                </option>
                                {countryOptions.map((country) => (
                                    <option key={country.isoCode} value={country.isoCode}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>



                        <div className="col-12 col-lg-6 mb-3 mt-md-4">
                            <div className="row">
                                <div className="col-12 col-lg-6 mb-3">
                                    <Typography className='poppins-500' style={{fontSize:'18px'}}>City</Typography>
                                    <select
                                    className='mt-md-3'
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#EFF1F9',
                                            padding: '14px 5px 14px 10px',
                                            borderRadius: '5px',
                                            paddingLeft: '10px', // Add left padding for the icon
                                        }}
                                    >
                                        {City.getCitiesOfCountry(selectedCountryCode).map((city) => (
                                            <option key={city.id} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Typography className='poppins-500' style={{fontSize:'18px'}}>State</Typography>
                                    <select
                                    className='mt-md-3'
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#EFF1F9',
                                            padding: '14px 5px 14px 10px',
                                            borderRadius: '5px',
                                            paddingLeft: '10px', // Add left padding for the icon
                                        }}
                                    >
                                        <option value="" disabled>
                                            Select State
                                        </option>
                                        {State.getStatesOfCountry(selectedCountryCode).map((state) => (
                                            <option key={state.isoCode} value={state.name}>
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                        </div> */}
                    </div>
                    <Button className='mt-md-3 rounded py-3 px-5 poppins-500' disabled={isLoading} onClick={(e)=>save(profileInfo)} style={{fontSize:'18px',background:'black',color:'rgb(13, 14, 15)'}} >
                        {isLoading ? "loading..." : "Next"}
                    </Button>
                </div>
                <div className="col-md-4 col-sm-12 order-1 order-sm-2 mb-5 d-flex justify-content-center">
                    <img
                         src={
                            Value?.image && !userImage
                              ? Value?.image
                              : userImage
                              ? URL.createObjectURL(userImage)
                              : !userImage && !Value?.image
                              ? 'https://bootdey.com/img/Content/avatar/avatar7.png'
                              : ''
                          }
                        alt="profile"
                        className='img-fluid rounded border'
                        style={{ width: '300px', height: '300px',cursor:'pointer' }}
                        onClick={() => document.getElementById('imageInput').click()}
                    />
                     <input
                        type="file"
                        accept="image/*"
                        className='d-none'
                        id="imageInput"
                        onChange={handleFileChange}
                    /> 
                </div>
               
            </div>
      
    )
}

export default ProfileInfo
