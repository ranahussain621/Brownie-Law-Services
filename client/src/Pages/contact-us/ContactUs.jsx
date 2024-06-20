import React from 'react'
import Map from './Map'
import ContactForm from './ContactForm'
import main from '../../assets/contact-assets/main.png'


export default function ContactUs() {
  return (
   <>

<div className='mt-5'>
<img className='img-fluid img-responsive w-100 contact-image' src={main} alt=""  />

</div>

 <div className='mb-5'>
    <ContactForm/>
   <Map/>

 </div>
  
   </>
  )
}