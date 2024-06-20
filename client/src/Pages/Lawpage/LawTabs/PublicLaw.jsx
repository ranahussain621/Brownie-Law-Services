import React from 'react'
import { Typography } from '@mui/material';

const PublicLaw = () => {
  return (
    <div>

<div className="my-4">
          <div className="row">
      
            <div className="col-md-12  col-sm-12 col-12 poppins-300" style={{ display: "flex", alignItems: "center", textAlign: "left" }}>

              <p className="poppins-500 text-dark leading-7" style={{fontSize:'18px'}}>
              Public law is a broad area of legal principles and regulations that govern the relationship between 
              individuals and the government or the state. It primarily focuses on the organization, powers, and duties of
            government entities and the protection of individual rights in relation to the state
             
            <Typography className='ps-0' sx={{fontWeight:'800',  fontSize: {xs: "26px", lg: "34px",},margin:"20px auto",fontFamily:'poppins,sans-serif'}}>Key Aspects of Public Law</Typography>

                <ul className="list-disc" style={{textAlign:'left',listStyle:'none'}}>
                  <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Constitutional Law</Typography>
                  Forms the fundamental legal framework that establishes the structure of government, delineates the powers of different branches of government, and protects individual rights and freedoms. It includes the interpretation and application of national constitutions.                  </li>
                 <br /> <li > <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Administrative Law</Typography>
                  Regulates the activities of administrative agencies and ensures they act within their authority. It covers rulemaking, adjudication, and enforcement of regulations by government agencies.                  </li>
                 <br /> <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Criminal Law</Typography> 
                  Governs offenses committed against the state or society. It includes statutes defining crimes and prescribes punishments for individuals found guilty of violating those laws
                  </li>
                 <br /> <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>International Law</Typography>                Addresses legal principles and rules governing relations between sovereign states, including treaties, conventions, and agreements between nations                  </li>
                 <br /> <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Election Law</Typography>
                           Concerns rules and regulations governing the electoral process, including voting rights, campaign finance, and the conduct of elections.                                  </li>
                <br />  <li><Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Commercial Law</Typography>
                  Focuses on business-related matters, including contracts, transactions, sales of goods, partnerships, corporate governance, and commercial disputes.     
                    </li>
             
                </ul>
              </p>
            </div>
          </div>


        </div> 
    </div>
  )
}

export default PublicLaw