import React,{useState,useEffect} from 'react'
import AddCaseHistory from './AddCaseHistory';
import '../../../Styles/casehistoryModal.css';
import { useDispatch, useSelector} from 'react-redux';
import { allCasesbyUser, getServicesByID } from '../../../_redux/features/firm/firmSlice';
import IMG from '../../../assets/file/img.png'
import IMG2 from '../../../assets/file/pdf.jpg'
import IMG3 from '../../../assets/file/docx.png'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from '@mui/material/Typography';
import empty from '../../../assets/trash.png'
import AddNewServices from '../DashboardTab/AddNewServices';
import CircularProgress from '@mui/material/CircularProgress';
import TablePagination from '../../../Components/pagination/TablePagination';
import { Tooltip } from '@mui/material';


export default function CaseHistories() {

    const [addCaseHistoryOpen, setaddCaseHistoryOpen] = useState(false);


    const [selectedCaseId, setSelectedCaseId] = useState('');
    const [selectedCaseDescription, setSelectedCaseDescription] = useState('');
    const [EditCase, setEditCase] = useState(false);
    const [openDeleteNews , setOpenDeleteNews] = useState(false)
const [allcases, setallcases] = useState()


    const dispatch = useDispatch()

   
   const user = JSON.parse(localStorage.getItem('user'))
   const services = useSelector((state)=>state.firm.Service)
   const {isLoading,caseData} = useSelector((state)=>state.firm)


  const getData =async () =>{
     await dispatch(allCasesbyUser({user_id:user?.user?._id}))
      .then(async (res)=>{
            setallcases(res?.payload?.data);  
      })
      }
    useEffect(()=>{
      if(user)  getData()    
       },[])

       useEffect(()=>{
        if(caseData?.data?.length > 0){
          setallcases(caseData?.data)
        }
       },[caseData?.data])
       

 const getService = async () => {
      await dispatch(getServicesByID({user_id:user?.user?._id}))
    }
  useEffect(()=>{
   if(user) getService()
   },[])

    const ShowEditCase=(caseId,description)=>{
        setSelectedCaseDescription(description);
        setSelectedCaseId(caseId);
        setEditCase(!EditCase)
      }
  
      const deleteModalScreen =(item) =>{  
        setSelectedCaseId(item?._id);
        setOpenDeleteNews(!openDeleteNews)
      }


      
    const showaddCaseHistoryOpen= ()=>{
        setaddCaseHistoryOpen(!addCaseHistoryOpen)
      }

      const [openServices, setOpenServices] = useState(false); 
    
      const showOpenServices = () => {
        setOpenServices(!openServices);    
      };

   


      const downloadFile = (url, filename) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
      };


      const [paginatedData, setpaginatedData] = useState()
      const paginatedlist = (list)=>{
        setpaginatedData(list)
      }
    

  return (
    <>


<div className="mx-5 mt-4 mx-lg-5">
<div className='row'>
      <div  className={`col-md-${services?.data?.length > 0 ? '4' : '8'} col-sm-4 poppins-600 fw-bold`} style={{fontSize:'30px'}}>
            Case Histories
        </div>

        {
          services?.data?.length > 0 ? 
       <div className={`col-md-${services?.data?.length > 0 ? '4' : '3'} col-sm-4 text-end pe-0 me-0`}>
     <button  className='btn btn-dark text-center px-5 py-2' style={{fontSize:'18px',}} onClick={showaddCaseHistoryOpen}>Add New Case</button>
     {addCaseHistoryOpen && (
    <div className="modalCaseHistory ">
    <div className="modal-contentCaseHistory">
     
   
   <AddCaseHistory closeWindow={showaddCaseHistoryOpen}/>

    </div>
  </div>

    )}

   </div>     
          : ""
        }
 
   <div className={`col-md-${services?.data?.length > 0 ? '4' : '4'} col-sm-4 mb-sm-3 text-end pe-0 me-0`}>
              <button
              style={{fontSize:'18px',width:'14.2rem'}}
                className='btn btn-dark  px-4 py-2'
                onClick={showOpenServices}
              >
                Add New Services
              </button>

              {openServices  && (
                <div className="modalAddNewNews">
                  <div className="modal-contentAddNewNews">
                    <AddNewServices closeWindow={showOpenServices} />
                  </div>
                </div>
              )}
            </div>
   </div>
   
   
        <div className="card rounded-0 mt-4 mt-md-5 border-0 ">
             <TableContainer className='' >
                          <Table  aria-label="simple table">
                          <TableHead sx={{ background: "#0d0e0f" }}>
                          <TableRow>
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
                           }}>Case Description</TableCell>
              <TableCell  className="fw-bold"
                           style={{
                             color:'#fff',
                             fontWeight: "500",
                             fontSize: "18px",
                             textTransform:'capitalize'
                           }}>File</TableCell>


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
        paginatedData.map((row, i) => {
          const backgroundColor = i % 2 === 0 ? "#fff" : "#F8F8F8";
          const parts = row.file.split('.');
          const fileExtension = parts.length > 1 ? '.' + parts.pop() : '';
          const extensionToImageMap = {
            '.docx': IMG3,
            '.doc': IMG3,
            '.pdf': IMG2,
            '.jpg': IMG,
            '.png': IMG,
            '.jpeg': IMG
          };
          const imageSource = extensionToImageMap[fileExtension];
          return (
            <> 
             <TableRow  className=""
            key={i}
            style={{
              border: "0px",
              background: backgroundColor,
            }}>
              <TableCell component="th" scope="row"  className=""
              key={i}
              style={{
                border: "0px",
                background: backgroundColor,
              }}>
               
                  <div className="d-flex align-items-md-center flex-xs-column">
                    <div   style={{ width: '50px', height: '50px' }}>
                    <img src={row.image?.length > 0 ? row.image : 'https://bootdey.com/img/Content/avatar/avatar7.png'}
                      className='img-fluid rounded-circle w-100 h-100'
                    
                      alt="No Pic" />
                  </div>   
                  
                   
                  <div className="d-flex align-items-center px-2 ms-md-4" >
                    <Typography
                      variant="h6 "
                      className=""
                      style={{
                        color: '#0d0e0f',
                        fontWeight: "100",
                        fontSize: "18px",
                        letterSpacing: "0.5px",
                        textTransform: 'capitalize'
                      }}
                    >
                      {row?.title?.slice(0, 30)}
                    </Typography>
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
                    fontSize: "18px",
                    letterSpacing: "0.5px",
                    textTransform: 'capitalize'
                  }}
                >
                  {row?.description?.slice(0, 30)}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row" className='border-0'>
              <Tooltip title="Open File"> 
               <img className='img-circle img-fluid img-thumbnail rounded-circle'
                  onClick={() => downloadFile(row?.file)}
                  src={imageSource} alt="" style={{ maxWidth: '50px', cursor: 'pointer' }} />
                  </Tooltip>
              </TableCell>
   </TableRow>
            </>

           
         
          );
        })


      ) : (

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
  
      )}
 

</TableBody>

                          </Table>


                          
                          </TableContainer>


  <TablePagination list={allcases} paginatedList={paginatedlist} />
 
</div>

</div>









    </>

   
  )
}
