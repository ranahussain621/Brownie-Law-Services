import React from 'react'
import sectionImg from "../../assets/about-assets/section1-img.png"
import advice from "../../assets/about-assets/advice.svg"
import review from "../../assets/about-assets/review.svg"

import layer from "../../assets/about-assets/layers.svg"

import sevice from "../../assets/about-assets/services.svg"
import './about.css';
export default function Section1() {

  const list = [

    {
      img: advice,
      name: "Get Legal Advice",
      Description: `Donec nec justo eget felis facilisis 
          fermentum. Aliquam porttitor mauris sit amet`,

    },
    {
      img: review,
      name: "Document Reviewing",
      Description: `Donec nec justo eget felis facilisis 
          fermentum. Aliquam porttitor mauris sit amet`,

    },
    {
      img: layer,
      name: "Great Lawyers",
      Description: `Donec nec justo eget felis facilisis 
          fermentum. Aliquam porttitor mauris sit amet`,

    },
    {
      img: sevice,
      name: "Customer Services",
      Description: `Donec nec justo eget felis facilisis 
          fermentum. Aliquam porttitor mauris sit amet`     ,

    },
  ];


  return (
    <>
      <div className="container mt-5" >

        <div className="row mt-sm-3 mt-xs-2 mx-md-4 mx-3">
          <div className="col-md-5 order-md-1 order-2">
            <img src={sectionImg} alt="" className='imgg_1' />

          </div>
          <div className="col-md-6 ms-md-5 order-md-2 order-1">
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className="row">
                {list.map((item, i) => {
                  return (
                    <>
                      <div className="col-md-6 mb-4" key={i}>
                        <div className="card border-0 ">
                          <div className="d-flex justify-content-md-start justify-content-center">
                            <img className="card-img-top mt-4" src={item.img} style={{ maxWidth: '50px' }} alt='' />
                          </div>

                          <div className="card-body text-md-start text-center ps-0">
                            <p className="poppins-700 mt-2" style={{fontSize:'24px'}}>{item.name}</p>
                            <p className=" poppins-500 text-dark mt-2" style={{fontSize:'18px'}}>{item.Description}</p>

                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}


              </div>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}
