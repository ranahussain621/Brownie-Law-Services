import React from 'react'
import { Typography } from '@mui/material';

const Matrimonial = () => {
  return (
    <div>

<div className="mt-4">
          <div className="row ">
      
            <div className="col-md-12  col-sm-12 col-12 poppins-300 " style={{ display: "flex", alignItems: "center", textAlign: "justify" }}>

              <p className="leading-7 poppins-500" style={{textAlign:'left'}}>
                <span style={{fontSize:'20px'}}>
              Matrimonial law, also known as family law, encompasses legal principles and regulations governing marriage, divorce, child custody, alimony, and related matters involving familial relationships             
              <Typography className='ps-0' sx={{fontWeight:'800',  fontSize: {xs: "26px", lg: "34px",},margin:"20px auto",fontFamily:'poppins,sans-serif'}}>Key Aspects of Matrimonial Law</Typography>

                </span>   
                <ul className="list-disc my-4" style={{listStyle:'none'}}>
                  <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Marriage</Typography>                <span className='text-dark poppins-500' style={{fontSize:'18px'}}>   Defines the legal requirements, rights, and obligations related to marriage, including age requirements, consent, solemnization, and registration of marriages   </span>  </li>
                <br />  <li ><Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}> Divorce</Typography>   <span className='text-dark poppins-500' style={{fontSize:'18px'}}>   Addresses the legal process of ending a marriage, including grounds for divorce, property division, spousal support (alimony), and arrangements for children (child custody, visitation, and child support).    </span>                              </li>
                <br />  <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Annulment</Typography>  <span className='text-dark poppins-500' style={{fontSize:'18px'}}>   Involves legal proceedings that declare a marriage null and void, treating it as if it never existed, typically due to legal invalidity or specific grounds such as fraud, coercion, or incapacity.       </span>           </li>
                <br />  <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Domestic Voilence</Typography>
                <span className='text-dark poppins-500' style={{fontSize:'18px'}}>    Provides legal protection and remedies for victims of domestic abuse, including restraining orders, legal separation, and support services for affected family members </span>
                  </li>              
                </ul>
              </p>
            </div>
          </div>


        </div> 
    </div>
  )
}

export default Matrimonial