import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllLaywers } from '../../../_redux/features/firm/firmSlice';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from '@mui/material/Typography';
import TablePagination from '../../../Components/pagination/TablePagination';
import './userlist.css';
import empty from '../../../assets/trash.png'
import CircularProgress from '@mui/material/CircularProgress';


export default function UserList() {


    const [LawyerList,setLawyetList]  = useState()

    const [paginatedData, setpaginatedData] = useState()

    const paginatedlist=(val) => {
      setpaginatedData(val)
      }
 

      const USER = JSON.parse(localStorage.getItem('user'))


     const {isLoading} = useSelector((state)=>state.firm)

          
    const dispatch = useDispatch()
  
    useEffect(() => {
      const getData = async () => {
          const datak = await dispatch(getAllLaywers());
          const val = datak?.payload;         
          const filteredLawyers = val?.teamLayer?.filter(lawyer => lawyer.email !== USER?.user?.email);  
          setLawyetList(filteredLawyers);
      };
      getData();
  }, []);


    
   
    return (
        <>
  <TableContainer  className='mt-5'>
                          <Table  aria-label="simple table">
                          <TableHead sx={{ background: "#0d0e0f" }}>
                          <TableRow>
                <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Lawyers Name</TableCell>
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


              </TableRow>
                          </TableHead>
                          <TableBody  style={{ background: "#F8F8F8", border: "0px" }}  >
  {

              isLoading ?   <TableRow>
              <TableCell colSpan="8" className="text-center py-5">
                <CircularProgress /> 
              </TableCell>
            </TableRow> : paginatedData?.length > 0 ?               
                paginatedData?.map((row,i) => {
                                  const backgroundColor = i % 2 === 0 ? "#fff" : "#F8F8F8";

                                  return ( <> 
                                  
                                  <TableRow
                    className=""
                    key={i}
                    style={{
                      border: "0px",
                      background: backgroundColor,
                    }}
                  >

                    <TableCell component="th" scope="row" className='border-0'>

                      <div className='d-flex align-items-md-center flex-xs-column' >
                                    <div className="" >
                                    <img style={{width:'50px',height:'50px'}}  src={row.image?.length > 0 ? row.image :  'https://bootdey.com/img/Content/avatar/avatar7.png' } 
                                    className='img-fluid rounded-circle '
                                    alt="No Pic" />                                        </div>
                                    <div className="d-flex align-items-center px-2 ms-md-4" > 
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
                       {row?.name?.slice(0, 25)}
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
          
                                  </TableRow>
                     
                            
                                  </>)
                                 
                            

                                      })
                                      :
                                      <TableRow>
                                      <TableCell colSpan="8" className="text-center py-5 main-img-div bg-light">
                                       <div className=' d-flex justify-content-center'>
                                        <div className="" style={{ width: 70, height: 80 }} >
                                          <img src={empty} alt=''  className='img-fluid w-100 h-100' />
                                        <h2 className='text-center pt-md-3' style={{ fontWeight: 500 }}>No Data</h2>
                                        </div>
                                        
                                      </div>
                                      </TableCell>
                                    </TableRow>
                                }
                          </TableBody>
                          </Table>
                              <TablePagination list={LawyerList} paginatedList={paginatedlist}/>
                 
                          </TableContainer>
      
        </>
    )
}
