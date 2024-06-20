import React, { useState } from 'react';
import section3 from '../../assets/contact-assets/section3.png';
import './contact.css';
import { toast } from 'react-toastify';
import { TextField, Box } from "@mui/material";
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {useDispatch} from 'react-redux'
import { contactUs } from '../../_redux/features/auth/authSlice';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } ,clearErrors } = useForm();
  const [info, setInfo] = useState({ phone: '' });

  const handlePhoneChange = (value) => {
    setInfo((prevState) => ({
      ...prevState,
      phone: value
    }));
    if (value) {
      clearErrors("phone"); 
    }
  };

  const dispatch = useDispatch()

  const onSubmit = async (data, e) => {
    e.preventDefault()
    try {
      const res = await dispatch(contactUs(data));
      if (res?.payload?.success === true) {
        toast.success('Thanks For Contacting Us !',{autoClose:2000});
        e.target.reset();
      } else {
        toast.error('Error 404',{autoClose:2000})
         e.target.reset();
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  

  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex align-items-center mx-md-5 mx-3">
          <div className="col-md-6 col-sm-12">
            <br />
            <div className='get-in-touch' style={{ textAlign: "start" }}>
              <h1 className='poppins-700 tex-lg mb-3' >Get In Touch</h1>
            </div>
            <div className='title-text' style={{ textAlign: "center" }}>
              <p className='poppins-500 text-dark mb-3' style={{ fontSize: '18px', textAlign: 'justify' }}>Enim tempor eget pharetra facilisis sed maecenas
                adipiscing. Eu leo molestie vel,
                ornare non id blandit netus.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
              <div className="form-floating mb-3">
                <TextField
                  type="text"
                  label="Name *"
                  fullWidth
                  variant="standard"
                  sx={{ fontSize: '18px', fontWeight: 900 }}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <Box sx={{ color: "red" }}>{errors.name.message}</Box>}
              </div>
              <div className="form-floating mb-3">
                <TextField
                  type="email"
                  label="Email *"
                  fullWidth
                  variant="standard"
                  sx={{ fontSize: '18px', fontWeight: 900 }}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <Box sx={{ color: "red" }}>{errors.email.message}</Box>}
              </div>
              <div className="">
  <PhoneInput
    className="w-100 phone-input py-3 "
    style={{ borderBottom: '2px solid #CACED8' }}
    inputProps={{
      name: 'phone',
      required: true,
      autoFocus: true
    }}
    value={info.phone}
    onChange={handlePhoneChange}

  />

</div>
<div className="mt-2">
  <TextField
    type="text"
    label="Message *"
    fullWidth
    rows={6}
    variant="standard"
    sx={{ fontSize: '18px', fontWeight: 900, }} 
    {...register("message", { required: "Message is required" })}
  />
  {errors.message && <Box sx={{ color: "red" }}>{errors.message.message}</Box>}
</div>
              <div className="button mt-5">
                <button className='btn btn-dark w-100 p-2 poppins-500'>SEND</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-none d-sm-block">
            <img src={section3} alt="" className='img-fluid w-100' />
          </div>
        </div>
      </div>
    </>
  );
}
