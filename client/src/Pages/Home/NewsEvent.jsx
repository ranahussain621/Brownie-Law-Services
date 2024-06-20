import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import UpdateNews from "../../Dashboards/LawyerDashboard/LawyerNews/UpdateNews";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../_redux/features/firm/firmSlice";
import DeleteNews from "../../Dashboards/LawyerDashboard/LawyerNews/DeleteNews";
import DeleteIcon from '@mui/icons-material/Delete';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from '@mui/material/Typography';
import empty from '../../assets/trash.png'
import AddNewNews from "../../Dashboards/LawyerDashboard/LawyerNews/AddNewNews";
import '../../Styles/addnewsModal.css'
import TablePagination from '../../Components/pagination/TablePagination';
import CircularProgress from '@mui/material/CircularProgress';

const NewsEvent = () => {
     
     const user = JSON.parse(localStorage.getItem('user'))
    

     const {newsList,isLoading} = useSelector((state)=>state.firm)
     
        const dispatch = useDispatch()


const [editData,setEditData] = useState([])
const [dltId, setdltId] = useState('')

  const [editModal,setEditModal] = useState(false)
  const [openDeleteNews , setOpenDeleteNews] = useState(false)

   const edit = (data) => {
    setEditModal(!editModal)
    setEditData(data)
   }
   const deleteModalScreen =(newsId) =>{
    setOpenDeleteNews(!openDeleteNews)
    setdltId(newsId)
  }

  const [paginatedData, setpaginatedData] = useState()
  const paginatedlist = (list)=>{
    setpaginatedData(list)
  }
 
   useEffect(()=>{
   const getData = async () => {
      await dispatch(getNews({id:user?.user?._id}))
   }
     getData()
   },[user.user._id,dispatch])

   const [open,setOpen] = useState(false)

   const ModalOpen = () => {
     setOpen(!open)
   }

  return (

    <>
   
  


<div className="mx-5 mt-4">


   <div className="d-flex justify-content-between align-items-center">
   <div className='poppins-600 fw-bold ' style={{fontSize:'30px'}}>
            News
        </div>
    <div>
    <button  className='btn btn-dark text-center px-md-5 px-3 py-2' style={{fontSize:'18px'}} onClick={ModalOpen}>Add News</button>
    </div>
    </div>

<div className="card rounded-0 mt-md-5 border-0 mt-4">

<TableContainer className="scrollableTable" >
                          <Table  aria-label="simple table">
                          <TableHead sx={{ background: "#0d0e0f" }}>
                          <TableRow className="p-0">
                <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Title</TableCell>
                <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Description</TableCell>
              <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>Action</TableCell>


              </TableRow>
                          </TableHead>
                          <TableBody style={{ background: "#F8F8F8", border: "0px" }}>
  {
  isLoading ?   <TableRow>
  <TableCell colSpan="8" className="text-center py-5">
    <CircularProgress /> 
  </TableCell>
</TableRow> :
  paginatedData?.length > 0 ? (
    paginatedData?.map((row, i) => {
      const backgroundColor = i % 2 === 0 ? "#fff" : "#F8F8F8";

      return (
        <TableRow
         
          key={i}
          style={{
            border: "0px",
            background: backgroundColor,
            padding:"10px 0px",
          
          }}
        >
          <TableCell component="th" scope="row" className='border-0'>
            <div className="d-flex align-items-md-center flex-xs-column">
              <img src={row?.image} alt="" style={{ height: '70px', width: '70px' }} className="rounded" />
              <div className="px-2" >
                <p className='poppins-500 ps-md-4' style={{fontSize:'18px',textTransform:'capitalize'}}>{row?.name?.slice(0, 30)}</p>
              </div>
            </div>
          </TableCell>

          <TableCell component="th" scope="row" className='border-0'>
            <Typography
              variant="h6 "
              className=""
              style={{
                color: '#0d0e0f',
                fontWeight: "100",
                textAlign:'justify',
                fontSize: "18px",
                letterSpacing: "0.5px",
                textTransform: 'capitalize'
              }}
            >
               {row?.description.length > 50 ? `${row?.description.slice(0, 50)}...` : row?.description}
            </Typography>
          </TableCell>

          <TableCell component="th" scope="row" className='border-0'>
            <DeleteIcon className="fs-2 text-danger" style={{ cursor: 'pointer' }} onClick={() => deleteModalScreen(row?._id)} />
          </TableCell>
        </TableRow>
      );
    })
  ) : (
    <TableRow>
      <TableCell colSpan={3} className="text-center border-0 p-0">
        <div className='d-flex justify-content-center align-items-center py-5' style={{ background: '#Fff',  }}>
          <div>
            <img src={empty} alt='' className='img-fluid' style={{ width: 70, height: 80 }} />
            <h2 className='text-center pt-md-3' style={{ fontWeight: 500 }}>No Data</h2>
          </div>
        </div>
      </TableCell>
    </TableRow>
  )}
</TableBody>


                          </Table>


                          </TableContainer>


</div> 
    <TablePagination list={newsList?.data} paginatedList={paginatedlist} />

     
   <DeleteNews
     closeModal={deleteModalScreen}
     ModalIsOpen={openDeleteNews}
    dltId={dltId} />
   
  

{open && (
    <div className="modalAddNewNews">
    <div className="modal-contentAddNewNews">
     
   
   <AddNewNews closeWindow={ModalOpen}/>

    </div>
  </div>

    )}

    {editModal && (
    <div className="modalEditNews ">
    <div className="modal-contentEditNews">
     
   <UpdateNews closeWindow={edit} editData={editData} />
   
    </div>
  </div>

    )}



    

</div>



    </>
   



  );
};

export default NewsEvent;
