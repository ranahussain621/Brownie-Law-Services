import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import AddNewNews from './AddNewNews';
import UpdateNews from './UpdateNews';
import '../../../Styles/addnewsModal.css';
import '../../../Styles/editnewsModal.css';




import { useDispatch,useSelector } from 'react-redux'
import { getNews } from '../../../_redux/features/firm/firmSlice';
import DeleteNews from './DeleteNews';
import './NewsDetails'
import NewsDetails from './NewsDetails';





export default function News() {
   

     
    const {firm} = useSelector((state)=>state.firm)


     const dispatch = useDispatch()

   
        useEffect(()=>{
            const getData = async () =>{
             await  dispatch(getNews())
            }
                getData()
           
           },[dispatch])
  



    const [OpenNewNews, setOpenNewNews] = useState(false);
    const [EditNews, setEditNews] = useState(false);
     const [openDeleteNews , setOpenDeleteNews] = useState(false)

     const [selectedNewsId, setSelectedNewsId] = useState('');
     const [selectedNewsDescription, setSelectedNewsDescription] = useState('');
     const [openDetailsScreen, setOpenDetailsScreen] = useState()

    const showOpenNewNews= ()=>{
        setOpenNewNews(!OpenNewNews)
      }
      
      const ShowEditNews=(newsId,description)=>{
        setSelectedNewsDescription(description);
        setSelectedNewsId(newsId);
        setEditNews(!EditNews)
      }

      const deleteModalScreen =(newsId) =>{
        setSelectedNewsId(newsId);
        setOpenDeleteNews(!openDeleteNews)
      }

      const DetailsNews = (news) =>{
         setOpenDetailsScreen(!openDetailsScreen)
         setSelectedNewsId(news)
        } 

    return (
        <>
 <div className="text-end py-2">
     <button  className='btn btn-dark' onClick={showOpenNewNews}>Add News</button>


     {OpenNewNews && (
    <div className="modalAddNewNews ">
    <div className="modal-contentAddNewNews">
     
   
   <AddNewNews closeWindow={showOpenNewNews}/>

    </div>
  </div>


   
    )}

   </div>


            <div className="card shadow border-0">

            <div className="table-responsive">

 <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">News</th>
                            {/* <th scope="col"></th> */}
                            <th scope="col">Lawyer</th>
                            <th scope="col">Views</th>
                            <th scope="col">Action</th>

                         
                        </tr>
                    </thead>
                    <tbody>
                       


                        {
                                
                                firm?.newsList?.data?.length > 0 ?
                           firm?.newsList?.data?.map((news,i)=>{
                            const descriptionWords = news?.description?.split(' ');
                            const Description = descriptionWords?.slice(0,4)?.join(' ');
                            return(
                                <>
                                <tr className='' key={i}>
                     
                       <td >
                           <div className='d-flex'>
                               {/* <div className=""><img className='img-circle img-fluid img-thumbnail rounded-circle' src='https://bootdey.com/img/Content/avatar/avatar5.png' alt="data"  style={{maxWidth:'50px'}}/></div> */}
                               <div className="d-flex align-items-center px-2 " >  <p className='poppins-500 fw-semibold'>{Description}</p></div>
                           </div>
                         </td>

                         {/* <td >
                       <div className="d-flex align-items-center pt-3" > 
                        <p className='poppins-500 '>business</p>
                           </div>
                          </td> */}
                         <td> 
                         <div className="d-flex align-items-center pt-3" > 
                        <p className='poppins-500 '> {news?.laywer_type?.laywer_type}</p>
                           </div>
                         </td>
                       {/* <td >
                       <div className="d-flex align-items-center pt-3" > 
                        <p className='poppins-500 '>active</p>
                           </div>
                          </td> */}
                      
                          <td>
                          <div className="d-flex align-items-center pt-3" > 
                         <a className='poppins-500  border-bottom ' href="#" onClick={()=>DetailsNews(news?._id)}>View</a>
                           </div>
                         
                          </td>


                          <td>
              <div className="dropdown pt-3 ms-md-4">
             
<button className=" "  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
<FontAwesomeIcon icon={faEllipsisVertical} />
</button>
<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
<li><a className="dropdown-item" href="#" onClick={()=>ShowEditNews(news._id , news.description)}>Edit News</a></li>
<li><a className="dropdown-item" href="#" onClick={()=>deleteModalScreen(news._id)}>Delete News</a></li>
</ul>
</div>
              </td>
                   </tr>
                               </>
                            )
                           }) 
                           : 
                           <div className='fs-3'>No News Found </div>
                        }
                       
                    </tbody>
                </table>
                {EditNews && (
    <div className="modalEditNews ">
    <div className="modal-contentEditNews">
     
   
   <UpdateNews closeWindow={ShowEditNews}   selectedNewsId={selectedNewsId} description={selectedNewsDescription} />
   

    </div>
  </div>


   
    )}



{openDeleteNews && (
    <div className="modalEditNews ">
    <div className="modal-contentEditNews">
     
   
   <DeleteNews closeWindow={deleteModalScreen} selectedNewsId={selectedNewsId} />
   

    </div>
  </div>


   
    )}
            </div>
               
            </div>



           {
            openDetailsScreen &&  <NewsDetails id={selectedNewsId} closeModal={DetailsNews} ModalIsOpen={openDetailsScreen}/>
           }
        </>
    )
}
