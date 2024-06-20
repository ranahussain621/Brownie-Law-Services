import React from 'react'
import atorney1 from '../../assets/about-assets/atorney1.png'
import atorney2 from '../../assets/about-assets/atorney2.png'

import atorney3 from '../../assets/about-assets/atorney3.png'

export default function Section3() {


  const atorneyList = [

    {
      img: atorney1,
      name: "Oliver Queen",
      rank: `Finance & Banking`,

    },
    {
      img: atorney2,
      name: "Lauren Phillips",
      rank: `Finance & Banking`,

    },
    {
      img: atorney3,
      name: "John Hart",
      rank: `Finance & Banking`,

    },

  ]
  return (
    <>
      <div className="mt-5">
        <p className='poppins-800 h1 fw-bold text-center' >Our Excellent Attorneys </p>
       <div className="container">
       <div className="row mt-5">
          {
            atorneyList.map((item, i) => {
              return (
                <>
                  <div className="col-md-4" key={i}>
                    <div className="card border-0">
                      <img className="card-img-top" src={item.img} />
                      <div className="card-body text-center">
                        <p className='poppins-500 fw-bold fs-4 h5'>{item.name}</p>
                        <p className='poppins-300 tex-muted'>{item.rank}</p>
                        <a className='poppins-500 fw-bold fs-5 mt-3' href="#">Read Profile</a>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }


        </div>
       </div>

      </div>

    </>
  )
}
