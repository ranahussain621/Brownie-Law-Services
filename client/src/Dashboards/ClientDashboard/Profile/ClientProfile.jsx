import React, { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateClientProfile, UpdateClientProfileDetails } from '../../../_redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const ClientProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));


  const [Value, setValue] = useState();

  const dispatch = useDispatch();

  const USER = useSelector((state) => state.auth?.userDetails?.user);
  const {isLoading} = useSelector((state) => state.auth);

  

  const [userImage, setuserImage] = useState();

  const [info, setInfo] = useState({
    id: user?.user?._id,
    name: '',
    image: '',
    phone: '',
    country: '',
    // state: '', // New state field
    education_level: '',
    address: ''
  });


  useEffect(() => {
    if (USER) {
      setInfo((prevState) => ({
        ...prevState,
        name: `${USER?.name}`,
        image: `${USER?.image}`,
        phone: `${USER?.phone}`,
        country: `${USER?.country}`,
        // state: `${USER?.state}`, 
        education_level: `${USER?.education_level}`,
        address: `${USER?.address}`
      }));
    }
  }, [USER]);

  const fileInputRef = useRef(null);

  // Function to handle avatar click and trigger file input
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setuserImage(file);
    setInfo((prevState) => ({
      ...prevState,
      image: file
    }));
  };

  const handlePhoneChange = (value) => {
    setInfo((prevState) => ({
      ...prevState,
      phone: value
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(
        UpdateClientProfileDetails({
          id: user?.user?._id
        })
      );
      const val = data.payload.user;
      setValue(val);
    };
    getData();
  }, [user?.user?._id,dispatch]);



  const save = async () => {
    const formData = new FormData();
    for (const key in info) {
      formData.append(key, info[key]);
    }
      await dispatch(UpdateClientProfile(formData))
      .then(async () => {
         toast.success('Profile Updated Succesfully', { autoClose: 1000 })
        await dispatch(UpdateClientProfileDetails({ id: user?.user?._id }) );
      
      });
   
  };

  return (
    <div className="mx-md-5">
  
  <div className='poppins-600 fw-bold ' style={{fontSize:'30px'}}>
            Profile
        </div>
        <div className='mt-md-5'>
             <div className="col-md-3 col-sm-5">
            <div className="profile-image-container">
              <input
                className=""
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="image/*"
              />

              <div className="avatar" onClick={handleAvatarClick}>
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
                  className="img-circle img-fluid img-thumbnail rounded-circle"
                  style={{ width: '250px', height: '250px', position: 'relative' }}
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
     
        <div className="row mt-md-5">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label"
                    style={{ color: '#083A50', fontWeight: '500', lineHeight: '19.6px', fontSize: '16px' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ border: '1px solid #CACED8' }}
                    name="name"
                    onChange={handleInputChange}
                    value={info.name}
                    id="exampleFormControlInput1"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  style={{ color: '#083A50', fontWeight: '500', lineHeight: '19.6px', fontSize: '16px' }}
                >
                  Education Level
                </label>

                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={info.education_level}
                  name="education_level"
                  onChange={handleInputChange}
                >
                  <option className="text-muted" value={'software'}>
                    Software
                  </option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label"
                    style={{ color: '#083A50', fontWeight: '500', lineHeight: '19.6px', fontSize: '16px' }}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ border: '1px solid #CACED8' }}
                    name="address"
                    onChange={handleInputChange}
                    value={info.address}
                    id="exampleFormControlInput1"
                  />
                </div>
              </div>
            </div>

              <div className="col mt-md-4">
            <button
              className="btn px-5 rounded mt-3 poppins-500"
              onClick={save}
              style={{ background: '#2E2829', color: 'white', fontWeight: '700', letterSpacing: '0.9px' }}
            >
              {isLoading ? "loading..." : "Save"}
            </button>
          </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  style={{ color: '#083A50', fontWeight: '500', lineHeight: '19.6px', fontSize: '16px' }}
                >
                  Email
                </label>

                <input
                  type="text"
                  className="form-control"
                  style={{ border: '1px solid #CACED8' }}
                  name="Publications"
                  disabled
                  value={user?.user?.email}
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  style={{ color: '#083A50', fontWeight: '500', lineHeight: '19.6px', fontSize: '16px' }}
                >
                  Phone Number
                </label>

                <PhoneInput
                  className="w-100 phone-input p-2 rounded"
                  style={{ border: '1px solid #CACED8' }}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                  value={info.phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  style={{ color: '#083A50', fontWeight: '500', lineHeight: '19.6px', fontSize: '16px' }}
                >
                  Country
                </label>

                <CountryDropdown
                  className="form-select"
                  style={{ border: '1px solid #CACED8' }}
                  value={info.country}
                  onChange={(val) => setInfo((prevState) => ({ ...prevState, country: val }))}
                />
              </div>
            </div>

            {/* <div className="row">
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                  style={{ color: '#083A50', fontWeight: '500', lineHeight: '19.6px', fontSize: '16px' }}
                >
                  State
                </label>

                <RegionDropdown
                  className="form-select"
                  style={{ border: '1px solid #CACED8' }}
                  country={info.country}
                  value={info.state}
                  onChange={(val) => setInfo((prevState) => ({ ...prevState, state: val }))}
                />
              </div>
            </div> */}
          </div>
        </div>  
        </div>
     
    
        
      
      </div>
 
  );
};

export default ClientProfile;
