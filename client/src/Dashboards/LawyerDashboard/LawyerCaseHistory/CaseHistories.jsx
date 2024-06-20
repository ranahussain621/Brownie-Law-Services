import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import AddCaseHistory from './AddCaseHistory';
import '../../../Styles/casehistoryModal.css';
import EditCaseScreen from './EditCaseScreen'
import DeleteCaseScreen from './DeleteCaseScreen'
import { useSelector ,useDispatch} from 'react-redux';
import { ListofAllCases } from '../../../_redux/features/firm/firmSlice';





export default function CaseHistories() {

    const [addCaseHistoryOpen, setaddCaseHistoryOpen] = useState(false);


    const [selectedCaseId, setSelectedCaseId] = useState('');
    const [selectedCaseDescription, setSelectedCaseDescription] = useState('');
    const [EditCase, setEditCase] = useState(false);
    const [openDeleteNews , setOpenDeleteNews] = useState(false)


    const dispatch = useDispatch()


    const cases = useSelector((state)=>state.firm.firm)


    useEffect(()=>{
      dispatch(ListofAllCases())
    },[dispatch])


    const ShowEditCase=(caseId,description)=>{
     
        setSelectedCaseDescription(description);
        setSelectedCaseId(caseId);
        setEditCase(!EditCase)
      }
  
      const deleteModalScreen =(caseId) =>{
        setSelectedCaseId(caseId);
        setOpenDeleteNews(!openDeleteNews)
      }


      
    const showaddCaseHistoryOpen= ()=>{
        setaddCaseHistoryOpen(!addCaseHistoryOpen)
      }



   


  
    

  return (
    <>
   <div className="text-end py-2">
     <button  className='btn btn-dark' onClick={showaddCaseHistoryOpen}>Add New</button>
     {addCaseHistoryOpen && (
    <div className="modalCaseHistory ">
    <div className="modal-contentCaseHistory">
     
   
   <AddCaseHistory closeWindow={showaddCaseHistoryOpen}/>

    </div>
  </div>


   
    )}

   </div>
   
   
        <div className="card shadow border-0">
    <div className="table-responsive">

         <table className="table">
        <thead>
            <tr>
            <th scope="col">Clients </th>
                <th scope="col">Case Description</th>
                <th scope="col">Status</th>
                <th scope="col">Case Type</th>
  
            </tr>
        </thead>
        <tbody>
            {
                cases?.allCases?.data?.map((item,i)=>{
                 
                    return(
                        <>
                         <tr className='' key={i}>
              
                  <td>
                <div className='d-flex'>
                        <div className=""><img className='img-circle img-fluid img-thumbnail rounded-circle' src="https://bootdey.com/img/Content/avatar/avatar5.png" alt=""  style={{maxWidth:'50px'}}/></div>
                        <div className="d-flex align-items-center px-2 " >  <p className='poppins-500 fw-semibold'>User</p></div>
                    </div>
                   </td>
                <td >
                    <div className='d-flex'>
                        {/* <div className=""><img className='img-circle img-fluid img-thumbnail rounded-circle' src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""  style={{maxWidth:'50px'}}/></div> */}
                        <div className="d-flex align-items-center px-2 " >  <p className='poppins-500 fw-semibold'>{item?.description}</p></div>
                    </div>
                  </td> 



                <td >
                <div className="  pt-3" > 
                 <p className='poppins-500 d-flex'>
                    {item.case_status}
                    </p>
                
                    </div>
                   </td>




                   <td>
                   
                    <div className="d-flex align-items-center pt-3" > 
                              <div className='poppins-500 '>{item?.case_type?.case_type}</div>
                                </div>
                 
                   
                   </td>

                   <td>
                   <div className="dropdown pt-3">
                  
  <button className=" "  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <FontAwesomeIcon icon={faEllipsisVertical} />
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  <li><a className="dropdown-item" href="#" onClick={()=>ShowEditCase(item._id,item.description)}>Edit Case</a></li>
<li><a className="dropdown-item" href="#" onClick={()=>deleteModalScreen(item._id,item.description)}>Delete Case</a></li>
  </ul>
</div>
                   </td>



              
                  
            </tr>
                        </>
                    )
                })
            }
           
        </tbody>
    </table>

    {EditCase && (
    <div className="modalEditNews ">
    <div className="modal-contentEditNews">
     
   
   <EditCaseScreen closeWindow={ShowEditCase}   selectedCaseId={selectedCaseId} description={selectedCaseDescription} />
   

    </div>
  </div>


   
    )}



{openDeleteNews && (
    <div className="modalEditNews ">
    <div className="modal-contentEditNews">
     
   
   <DeleteCaseScreen closeWindow={deleteModalScreen} Id={selectedCaseId} />
   

    </div>
  </div>


   
    )}


    </div>
   
</div>
    </>

   
  )
}
