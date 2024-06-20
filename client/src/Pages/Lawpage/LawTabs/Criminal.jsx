import React from 'react'
import { Typography } from '@mui/material';

const CriminalLaw = () => {
  return (
    <div>

<div className="my-4">
          <div className="row">
      
            <div className="col-md-12  col-sm-12 col-12 poppins-500" style={{ display: "flex", alignItems: "center", textAlign: "justify" }}>

              <p className="leading-7">
                <span className="poppins-500" style={{fontSize:'20px'}}>

              Criminal law is a branch of law that deals with offenses committed against the state or society as a whole. It encompasses statutes, regulations, and legal principles that define crimes, establish penalties for unlawful conduct, and govern the criminal justice process.
              <Typography className='ps-0' sx={{fontWeight:'800',  fontSize: {xs: "26px", lg: "34px",},margin:"20px auto",fontFamily:'poppins,sans-serif'}}>Key Aspects of Criminal Law</Typography>

    
              </span>    
                <ul className="list-disc my-4" style={{textAlign:'left',listStyle:'none'}}>
                  <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}> Definition of Crime</Typography>
                  <span className='text-dark poppins-500' style={{fontSize:'18px'}}>    Criminal law outlines specific behaviors or actions that are considered illegal and punishable by law, such as murder, theft, assault, fraud, drug trafficking, and more..  
                       </span>            </li> <br />
                  <li > <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Element ofCrime</Typography>
                  <span className='text-dark poppins-500' style={{fontSize:'18px'}}>      To establish guilt, criminal law requires proof of both the "mens rea" (culpable mental state or intent) and the "actus reus" (guilty act or conduct) of the accused.   
                             </span>     </li> <br />
                  <li> <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Classification of Offenses</Typography>
                  <span className='text-dark poppins-500' style={{fontSize:'18px'}}>       Crimes are categorized into different classes based on their severity, ranging from misdemeanors (less serious offenses) to felonies (more serious crimes).
               </span>   </li> <br />
                  <li>
                  <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Criminal Procedure</Typography>
                     <br />
                     <span className='text-dark poppins-500' style={{fontSize:'18px'}}> 
                  Defines the legal procedures for investigating crimes, gathering evidence, arresting suspects, conducting trials, and determining guilt or innocence.    
                                         </span>        </li>
              
                </ul>
              </p>
            </div>
          </div>


        </div> 
    </div>
  )
}

export default CriminalLaw