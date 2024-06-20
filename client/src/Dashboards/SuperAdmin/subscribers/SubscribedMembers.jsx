import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SubscribedList } from '../../../_redux/features/PaymentSlice';
import {Button} from '@mui/material'
// import TablePagination from '../../../Components/Pagination/TablePagination';
import SubscriberDetail from './SubscriberDetail';
import TablePagination from '../../../Components/pagination/TablePagination';
import { getAllUsers } from '../../../_redux/features/auth/authSlice';
import CancelSubscriptionModal from './CancelSubscriberModal';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import empty from '../../../assets/trash.png'


const SubscribedMember = () => {


  const dispatch = useDispatch()
  const [paginatedData, setpaginatedData] = useState()
  const [editModal, seteditModal] = useState()
  const [docId, setdocId] = useState({
    id:'',
    email:''
  })



  
  const {userList,isLoading} = useSelector(state=>state.auth)

   const [modal,setModalOpen] = useState(false)
  const [unsubId,setUnsubId] = useState('')

   const openModal = (id) =>{
    setModalOpen(!modal)
     setUnsubId(id)
   }

//get all user api
    useEffect(()=>{
      const getData = async () => {
      await dispatch(getAllUsers())
 
      }
      getData()
 
    },[dispatch])
 


 

  const paginatedlist = (list)=>{
    setpaginatedData(list)
  }

  function editModalScreen(item) {
    setdocId(prev=>({
      ...prev,
      id:item?.id,
      email:item?.email
    }))
    seteditModal(!editModal)
    }

  return (
    <>
    <div className="mx-5 mt-5">
    <div className='poppins-600 fw-bold ' style={{fontSize:'30px'}}>
            List of all Subscribers
        </div>
        <TableContainer  className='mt-5'>
                          <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead sx={{ background: "#0d0e0f" ,textAlign:'center'}}>
                          <TableRow>
                <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Name</TableCell>
                <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Email</TableCell>
              <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Amount</TableCell>
                            
                              <TableCell  className="fw-bold"
                           style={{
                             padding:"0px 51px",
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Action</TableCell>


              </TableRow>
                          </TableHead>
                          <TableBody  style={{ background: "#F8F8F8", border: "0px" }}  >
  {
         
                        isLoading ?   <TableRow>
                        <TableCell colSpan="8" className="text-center py-5">
                          <CircularProgress /> 
                        </TableCell>
                      </TableRow>:
                        paginatedData?.length > 0 ?
                           
                                paginatedData?.filter(item => item?.plan_id)?.map((row,i) => {
                                  const backgroundColor = i % 2 === 0 ? "#fff" : "#F8F8F8";

                                  return ( <> 
                                  
                                  <TableRow key={i} style={{ background: backgroundColor, padding:'1rem 0'}} >

                      <TableCell component="th" scope="row" className='border-0'>

                      <div className='d-flex align-items-md-center flex-xs-column'>
                                    <div className="">
                                    <img  src={row.image?.length > 0 ? row.image :  'https://bootdey.com/img/Content/avatar/avatar7.png' } 
                                    className='img-fluid rounded-circle'
                                    style={{minWidth:'50px',minHeight:'50px',maxWidth:'50px',maxHeight:'50px'}}
                                    alt="No Pic" />                                        </div>
                                    <div className="ms-md-4 mt-sm-3" > 
                                    <Typography
                        variant="h6 "
                        className=""
                        style={{
                          color:'#0d0e0f',
                          fontWeight: "100",
                          fontSize: "18px",
                          letterSpacing: "0.5px",
                          textTransform:'capitalize'
                        }}
                      >
                       {row?.name?.slice(0, 15)}
                      </Typography>
                                     </div>
                                </div>
                    </TableCell>  

                    <TableCell component="th" scope="row" className='border-0'>
                      <Typography
                        variant="h6 "
                        className=""
                        style={{
                          color:'#0d0e0f',
                          fontWeight: "100",
                          fontSize: "18px",
                          letterSpacing: "0.5px",
                          
                        }}
                      >
                       {row?.email}
                      </Typography>
                    </TableCell>  

                    <TableCell component="th" scope="row" className='border-0'>
                      <Typography
                        variant="h6 "
                        className=""
                        style={{
                          color:'#0d0e0f',
                          fontWeight: "100",
                          fontSize: "18px",
                          letterSpacing: "0.5px",
                          textTransform:'capitalize'
                        }}
                      >
                      $ {row?.plan_price/100}
                      </Typography>
                    </TableCell>  
                
                    <TableCell component="th" scope="row" className='border-0'>
                    <button className='btn btn-dark px-4 py-2' onClick={()=>openModal(row?._id)}>Cancel Subscription</button>
                    </TableCell> 
                                  </TableRow>
                     
                            
                                  </>)
                                 
                            

                                      })
                                      :
                                      <TableRow>
                                      <TableCell colSpan="8" className="text-center py-5 main-img-div bg-light">
                                       <div className=' d-flex justify-content-center'>
                                        <div className="">
                                          <img src={empty} alt=''  className='img-fluid' style={{ width: 70, height: 80 }} />
                                        <h2 className='text-center pt-md-3' style={{ fontWeight: 500 }}>No Data</h2>
                                        </div>
                                        
                                      </div>
                                      </TableCell>
                                    </TableRow>
                                  
                                }
                          </TableBody>
                    
                          </Table>
                          </TableContainer>
           <TablePagination list={userList?.data} paginatedList={paginatedlist} />               


   
    </div>

   
   
   <CancelSubscriptionModal
         id={unsubId}
         closeModal={openModal}
         ModalIsOpen={modal}
      />
  
  </>
  )
}

export default SubscribedMember