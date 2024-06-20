import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlockUser, UnBlockUser, getAllUsers } from "../../../_redux/features/auth/authSlice";
import { Button,IconButton, Tooltip, } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteModal from "./DeleteModal";
import {toast} from "react-toastify";
import TablePagination from "../../../Components/pagination/TablePagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import empty from '../../../assets/trash.png'

const UserList = () => {
  const [DeleteModalOpen, setDeleteModalOpen] = useState(false)
  const [docId, setdocId] = useState()

    const [data,setData] = useState(false)
    console.log("🚀 ~ UserList ~ data:", data)
 
  
       const {userList,isLoading} = useSelector((state)=>state.auth)
      const dispatch = useDispatch()
  
     const USER = JSON.parse(localStorage.getItem('user')) 

     const getData = async () => {
            await dispatch(getAllUsers())
            .then((res)=>{
                setData(res.payload.data)
            })
        }  
      useEffect(()=>{
       if(USER) getData()
        if(userList)setData(userList?.data)
      },[])


 
  
 
  
 
  const [paginatedData, setpaginatedData] = useState()

  const paginatedlist = (list)=>{
    setpaginatedData(list)
  
  }


//Block user 
const statusManagment = async(status,id)=>{ 

  if (status === "1"){
   
     dispatch(BlockUser({id:id})).then(()=>{
      dispatch(getAllUsers())
      toast.success("User blocked",{autoClose:1000})
      
    })
  }else {
     dispatch(UnBlockUser({id:id})).then(()=>{
       dispatch(getAllUsers())
       toast.success("User unblocked",{autoClose:1000})
     })
  }
}



const Users = paginatedData?.filter((item)=> item.email !== USER?.user?.email)



  function DeleteModalScreen() {
    setDeleteModalOpen(!DeleteModalOpen)
  }
  return (
    <>

   <div className="mx-5 mt-5">
  <div className='poppins-600 fw-bold ' style={{fontSize:'30px'}}>
            List of all Users
        </div>
       
        <TableContainer  className='mt-5' >
                          <Table aria-label="simple table">
                          <TableHead sx={{ background: "#0d0e0f" }}>
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
                           }}>Phone</TableCell>
                              <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Status</TableCell>
                              <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Action</TableCell>


              </TableRow>
                          </TableHead>
                          <TableBody  style={{ background: "#F8F8F8", border: "0px" }}  >
  {

                  isLoading ? 
                  <TableRow>
                    <TableCell colSpan="8" className="text-center py-5">
                      <CircularProgress /> 
                    </TableCell>
                  </TableRow>
                
                 
                 : 
                  paginatedData?.length > 0 ?      
                paginatedData?.filter((item)=> item.email !== USER?.user?.email)?.map((row,i) => {
                                  const backgroundColor = i % 2 === 0 ? "#fff" : "#F8F8F8";

                                  return ( <> 
                                  
                                  <TableRow key={i} style={{ background: backgroundColor,padding:'1rem 0' }} >

                      <TableCell component="th" scope="row" className='border-0'>

                      <div className='d-flex align-items-md-center flex-xs-column'>
                                    <div className="">
                                    <img  src={row.image?.length > 0 ? row.image :  'https://bootdey.com/img/Content/avatar/avatar7.png' } 
                                    className='img-fluid rounded-circle'
                                    style={{minWidth:'50px',minHeight:'50px',maxWidth:'50px',maxHeight:'50px'}}
                                    alt="No Pic" />                                        </div>
                                    <div className="ms-md-4 px-0" > 
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
                      +{row?.phone}
                      </Typography>
                    </TableCell>  
                    <TableCell component="th" scope="row" className='border-0'>
                    <Button
                        variant="contained"
                        sx={{
                          background: `${row.status==="1"?"#A6E7D8":"#FFC5C5"}`,
                          padding: "3px 20px",
                          border: `1px solid ${row.status==="1"?"#008767":"#DF0404"}`,
                          fontWeight: "600",
                          color: `${row.status==="1"?"#008767":"#DF0404"}`,
                          textTransform: "capitalize",
                          "&:hover": {
                            background: `${row.status==="1"?"#A6E7D8":"#FFC5C5"}`,
                          },
                        }}
                        onClick={()=>{
                  
                          statusManagment(row.status,row._id)
                     }}
                      >
                      {row.status==="1"?"Active":"InActive"}
                      </Button>
                    </TableCell>  
                    <TableCell component="th" scope="row" className='border-0'>
                    <IconButton aria-label="delete">
                    <Tooltip title="Delete User">
                   <DeleteIcon
                      className="fs-2 text-danger"
                      onClick={()=>{
                        DeleteModalScreen()
                        setdocId(row._id)
                      }}
                       />

                    </Tooltip>
                     
                    </IconButton>
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
        <TablePagination list={data} paginatedList={paginatedlist} />  

    
    

    <DeleteModal 
       dltId ={docId}
       closeModal={DeleteModalScreen}
       ModalIsOpen={DeleteModalOpen}
      />   
   </div>






    </>
  
  );
};

export default UserList;
