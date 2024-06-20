import React from 'react'
import { Typography } from '@mui/material';

const WillandProbate = () => {
  return (
    <div>

<div className="mt-4">
          <div className="row">
      
            <div className="col-md-12  col-sm-12 col-12 poppins-300" style={{ display: "flex", alignItems: "center", textAlign: "left" }}>

              <p className="font-medium leading-7 poppins-500">
              <span className='text-dark ' style={{fontSize:'20px'}}> 
              Wills and probate law are integral parts of estate planning and the legal process that handles the distribution of a deceased person's assets and the settling of their affairs             
              <Typography className='ps-0' sx={{fontWeight:'800',  fontSize: {xs: "26px", lg: "34px",},margin:"20px auto",fontFamily:'poppins,sans-serif'}}>Key Aspects of Will & Probate Law</Typography>
                </span>
                <ul className="list-disc my-4" style={{textAlign:'left',listStyle:'none'}}>
                  <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Last Will and Testament</Typography>
                  <span className='text-dark poppins-500' style={{fontSize:'18px'}}>   A legal document that outlines a person's wishes regarding the distribution of their assets, care of dependents, and appointment of guardianship for minors after their death.     </span>                              </li>
                <br />  <li > <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Testator</Typography>
                <span className='text-dark poppins-500' style={{fontSize:'18px'}}>  The person creating the will, also known as the testator, determines how their property and belongings should be distributed among beneficiaries.    </span>                              </li>
                <br />  <li><Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Executor</Typography>
                <span className='text-dark poppins-500' style={{fontSize:'18px'}}>     The person nominated in the will to carry out the testator's instructions, manage the estate, pay debts, and distribute assets to beneficiaries.         </span>         </li>
                <br />  <li>
                <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Witnesses and Legal Formalities </Typography>
                <span className='text-dark poppins-500' style={{fontSize:'18px'}}>    Requirements vary by jurisdiction, but wills typically need to be signed by the testator and witnessed by two or more witnesses to be considered legally valid.
                </span>  </li>              
                </ul>
              </p>
            </div>
          </div>


        </div> 
    </div>
  )
}

export default WillandProbate