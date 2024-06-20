import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhoneFlip,faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
    const userList = [
        {
            clientImg:"https://bootdey.com/img/Content/avatar/avatar6.png" ,
            ownerImg:"https://bootdey.com/img/Content/avatar/avatar5.png",
            ownerName:"Alexander Turner",
            clientName: "Sara Tencredi",
            clientEmail: "sara tencredi112@gmail.com",
            clientPhone: "(907) 555-0101",
        },
        {
            clientImg: "https://bootdey.com/img/Content/avatar/avatar2.png",
            ownerImg:"https://bootdey.com/img/Content/avatar/avatar4.png",
            ownerName:"Alexander Turner",
            clientName: "Sara Tencredi",
            clientEmail: "sara tencredi112@gmail.com",
            clientPhone: "(907) 555-0101",
        }
        ,
        {
            clientImg: "https://bootdey.com/img/Content/avatar/avatar4.png",
            ownerImg:"https://bootdey.com/img/Content/avatar/avatar3.png",
            ownerName:"Alexander Turner",
            clientName: "Sara Tencredi",
            clientEmail: "sara tencredi112@gmail.com",
            clientPhone: "(907) 555-0101",
        }
        ,
        {
            clientImg: "https://bootdey.com/img/Content/avatar/avatar6.png",
            ownerImg:"https://bootdey.com/img/Content/avatar/avatar5.png",
            ownerName:"Alexander Turner",
            clientName: "Sara Tencredi",
            clientEmail: "sara tencredi112@gmail.com",
            clientPhone: "(907) 555-0101",
        }
        ,
        {
            clientImg: "https://bootdey.com/img/Content/avatar/avatar6.png",
            ownerImg:"https://bootdey.com/img/Content/avatar/avatar1.png",
            ownerName:"Alexander Turner",
            clientName: "Sara Tencredi",
            clientEmail: "sara tencredi112@gmail.com",
            clientPhone: "(907) 555-0101",

        }
        ,
        {
            clientImg: "https://bootdey.com/img/Content/avatar/avatar3.png",
            ownerImg:"https://bootdey.com/img/Content/avatar/avatar1.png",
            ownerName:"Alexander Turner",
            clientName: "Sara Tencredi",
            clientEmail: "sara tencredi112@gmail.com",
            clientPhone: "(907) 555-0101",

        }
        ,
        {
            clientImg: "https://bootdey.com/img/Content/avatar/avatar4.png",
            ownerImg:"https://bootdey.com/img/Content/avatar/avatar5.png",
            ownerName:"Alexander Turner",
            clientName: "Sara Tencredi",
            clientEmail: "sara tencredi112@gmail.com",
            clientPhone: "(907) 555-0101",    

        }
    ]
    return (
        <>
            <div className="card shadow border-0">
                <div className="table-responsive">

                     <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Contact Name</th>
                            <th scope="col">Contact </th>
                            <th scope="col">Lead Source</th>
                            <th scope="col">Contact Owner</th>
              
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((item,i)=>{
                                return(
                                    <>
                                     <tr className=''>
                          
                            <td >
                                <div className='d-flex'>
                                    <div className=""><img className='img-circle img-fluid img-thumbnail rounded-circle' src={item.clientImg} alt=""  style={{maxWidth:'50px'}}/></div>
                                    <div className="d-flex align-items-center px-2 " >  <p className='poppins-500 fw-semibold'>{item.clientName}</p></div>
                                </div>
                              </td>
                            <td >
                            <div className="  pt-3" > 
                             <p className='poppins-500 d-flex'>
                                <div className="d-flex align-items-center px-2">
                                <FontAwesomeIcon icon={faEnvelope}  fontSize={12} />
                                    </div>  {item.clientEmail}</p>
                             <p className='poppins-500 d-flex'>
                             <div className="d-flex align-items-center px-2">
                                <FontAwesomeIcon icon={faPhoneFlip}  fontSize={12} />
                                    </div> {item.clientPhone}</p>
                                </div>
                               </td>

                               <td>
                                <div className="pt-3">
                                     <button className='btn btn-dark'>External Reference</button>
                                </div>
                               
                               </td>
                            <td>
                            <div className='d-flex'>
                                    <div className=""><img className='img-circle img-fluid img-thumbnail rounded-circle' src={item.ownerImg} alt=""  style={{maxWidth:'50px'}}/></div>
                                    <div className="d-flex align-items-center px-2 " >  <p className='poppins-500 fw-semibold'>{item.ownerName}</p></div>
                                </div>
                               </td>
                              
                        </tr>
                                    </>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
                </div>
               
            </div>
        </>
    )
}
