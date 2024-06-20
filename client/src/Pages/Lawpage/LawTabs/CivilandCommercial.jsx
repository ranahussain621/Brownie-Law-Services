import React from 'react'
import law1 from "../../../assets/Law-assets/law1.png";
import law2 from "../../../assets/Law-assets/law2.png";
import law3 from "../../../assets/Law-assets/law3.png";
import { Typography } from '@mui/material';

const CivilandCommercial = () => {
  return (
    <>
    <div className="container mt-4 px-0"> 
    <span className=" leading-7 text-dark poppins-500" style={{fontSize:'18px'}}>
            Civil law, also known as civil or commercial law, is a broad area of law that deals with private disputes between individuals or organizations. It primarily focuses on conflicts that do not involve criminal charges but rather address issues related to personal rights, contracts, property, and compensation for damages
            </span>

          <div className="row d-flex ">  
            <div className="col-md-5 col-sm-12 mt-4">
              <div  className=''>
               <img src={law1} alt=""  className='img-fluid'/>   
              </div>
            
            <div className='mt-5'>
              <img src={law2} alt="" className='img-fluid'/>  
            </div>

            
            </div>
         
            <div className="col-md-7  col-sm-12 leading-7 text-dark poppins-500 " style={{ fontSize:'18px' }}>
             <Typography className='ps-0' sx={{fontWeight:'800',  fontSize: {xs: "26px", lg: "34px",},margin:"20px auto",fontFamily:'poppins,sans-serif'}}>Key Aspects of Civil / Commercial Law</Typography>
                
                <ul className="list-disc " style={{textAlign:'left',listStyle:'none'}} >
                  <li>  <Typography className='ps-0' sx={{fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Contract Law</Typography>
                  <span className='' > Deals with agreements between individuals or entities, ensuring that contracts are legally enforceable and that parties fulfill their obligations.</span>
                  </li> <br />
                  <li >  <Typography className='ps-0' sx={{ fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Property Law</Typography>
                  Governs the ownership, use, and transfer of property, including real estate, personal possessions, and intellectual property.
                  </li> <br />
                  <li>  <Typography className='ps-0' sx={{ fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Tort Law</Typography>
                  Addresses civil wrongs or injuries caused by one party to another. It includes areas like negligence, defamation, product liability, and personal injury claims.</li> <br />
                  <li>  <Typography className='ps-0' sx={{ fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Family Law</Typography>
                  Covers matters related to family relationships and domestic issues, including divorce, child custody, adoption, alimony, and child support.</li> <br />
                  <li>  <Typography className='ps-0' sx={{ fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Employment Law</Typography>
                  Regulates the relationship between employers and employees, addressing issues such as contracts, wages, workplace discrimination, and wrongful termination.  </li> <br />
              
             
                </ul>
            
            </div>
          </div>


        </div> 

       

 
        <div className="intro container pt-0 mt-0 px-0" >
                

                <ul className="list-disc" style={{textAlign:'left',listStyle:'none'}}>
                  <li className=''> 
                  <Typography className='ps-0' sx={{ fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Preponderance of Evidence </Typography>
                <span className='text-dark poppins-500' style={{fontSize:'18px'}}> 
                Unlike criminal cases, where guilt must be proved beyond a reasonable doubt, civil cases are decided based on a preponderance of evidence, meaning the evidence shows that one side's version of the facts is more likely. </span>  </li> 
                <br />  <li >   <Typography className='ps-0' sx={{ fontSize: { xs: "24px", lg: "36px",},fontWeight:800,fontFamily:'poppins,sans-serif'}}>Compensation </Typography>
                <span className='text-dark poppins-500' style={{fontSize:'18px'}}>  Civil law often aims to compensate the harmed party by providing monetary damages or specific remedies rather than punishment. </span>  </li> <br />
                  <li> 
                  <Typography className='ps-0' sx={{fontWeight:'800',  fontSize: {xs: "26px", lg: "34px",},fontFamily:'poppins,sans-serif'}}>Settlements and Dispute Resolution </Typography>
                  <span className='text-dark poppins-500' style={{fontSize:'18px'}}>   Parties in civil cases often have opportunities to settle disputes through negotiation, mediation, or arbitration before going to court. </span>  </li>
                 <br />
                  <li>              <Typography className='ps-0' sx={{fontWeight:'800',  fontSize: {xs: "26px", lg: "34px",},fontFamily:'poppins,sans-serif'}}>Private Party Involvement</Typography>
                  <span className='text-dark poppins-500' style={{fontSize:'18px'}}>   Civil disputes involve private parties seeking remedies for harm caused, distinct from criminal cases where the state prosecutes an individual for violating laws. </span>   </li>
                
                </ul>
        </div>
      

        <div className='mt-4'> 
          <img className="md:mx-12 img-fluid coom-img" src={law3} alt="" style={{
           
            width: '95%',
            margin: "auto", 
          }} />
        </div> 
    </>
 
  )
}

export default CivilandCommercial