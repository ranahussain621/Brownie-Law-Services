import React from 'react'
import chat from '../../../assets/dashboard-assets/Chart.png'
export default function TypeOfCasesCart() {
  return (
  <>
  <div className="card shadow border-0">
<div className="row mt-4 mx-2">
    <div className="col">
        <p className='poppins-500 fw-semibold '>Type Of Cases</p>
    </div>
    <div className="col">
        <div className="row justify-content-end">
            <div className="col-md-6">
                 <select className="form-select border-0" aria-label="Default select example">
  <option selected>Daily</option>
  <option value="Monthly">Monthly</option>
  <option value="Weekly">Weekly</option>
  <option value="yearly">yearly</option>
</select>
            </div>
        </div>
   
    </div>
</div>
<div className='d-flex justify-content-center mt-4'>
    <img src={chat} alt="" />
</div>
<div className='row mt-5 mb-5'>
    <div className="col text-center poppins-500 fw-semibold"><small>Civil</small></div>
    <div className="col text-center poppins-500 fw-semibold">
<small>Family</small></div>
    <div className="col text-center poppins-500 fw-semibold"><small>Coorporate</small></div>


</div>
  </div>
  </>
  )
}
