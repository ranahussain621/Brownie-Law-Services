import React from 'react'
import trust from '../../assets/about-assets/trust-client.svg';
import unlock from '../../assets/about-assets/unlock.svg';

import money from '../../assets/about-assets/money.svg';

import agreement from '../../assets/about-assets/agreement .svg';


export default function Section4() {

  const List = [

    {
      img: trust,
      value: 123000,
      title: `Trusted Clients`,

    },
    {
      img: unlock,
      value: 123000,
      title: `Case Closed`,

    },
    {
      img: money,
      value: 123000,
      title: `Money Paid`,

    },
    {
      img: agreement,
      value: 123000,
      title: `Successful Case`,

    }

  ]
  return (
    <>
    <div className="container">
      <div className="row mt-5 " style={{ backgroundColor: "#F4F7FC" }}>
        {

          List.map((item, i) => {
            return (


              <div className="col-md-3 text-center mb-3  " key={i}>
                <div className="container" style={{marginTop:"10px", marginRight:"60px",}}>
                  <div className="card bg-transparent border-0" >
                    <div className="d-flex justify-content-center">
                      <img className="card-img-top bg-transparent border-0" src={item.img} style={{ width: '100px', height: '120px',marginRight:"50px" }} />
                    </div>
                    <div className="card-body text-center">
                      <p className='poppins-500 fw-bold h5' style={{ fontSize: "36px", marginRight:"50px" }}>{item.value}+</p>
                      <small className='poppins-300 tex-muted'  style={{  marginRight:"50px" }}>{item.title}</small>

                    </div>
                  </div>
                </div>

              </div>
            )
          })
        }

      </div>
      </div>

    </>
  )
}