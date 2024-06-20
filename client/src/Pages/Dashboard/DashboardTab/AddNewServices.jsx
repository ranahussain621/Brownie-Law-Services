import React,{ useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addNewService, getServices, getServicesByID,  } from '../../../_redux/features/firm/firmSlice';
import { toast } from 'react-toastify';
import swiperImg from "../../../assets/firmsDetail-assets/matrimonial.png";
import { Tooltip } from '@mui/material';
import IMG from '../../../assets/file/img.png'



const AddNewServices = ({closeWindow}) => {

     const user = JSON.parse(localStorage.getItem('user'))
   
     
   
       const [addServices,setAddServices] = useState({
        title:'',
        description:'',
        image:null,
        user_id:user?.user?._id,
      
       })

    

         const dispatch = useDispatch()

      

         const handleChange = (e) => {
          setAddServices((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
          }));
        };

        const fileInputRef = useRef(null);

// Function to handle avatar click and trigger file input
const handleAvatarClick = () => {
  fileInputRef.current.click();
};
const [userImage, setuserImage] = useState()
// const [numPages, setNumPages] = useState(null);

// const getFileIcon = (fileType) => {
//   if (fileType.startsWith("image/")) {
//     return URL.createObjectURL(userImage);
//   } else if (fileType === "application/pdf") {
//     return "path/to/pdf-icon.png"; // Replace with your PDF icon image path
//   } else if (
//     fileType === "application/msword" ||
//     fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//   ) {
//     return "path/to/word-icon.png"; // Replace with your Word icon image path
//   } else {
//     return "path/to/default-icon.png"; // Replace with a default icon path for unknown file types
//   }
// };

// const handleFileChange = (event) => {
//   const file = event.target.files[0];

//   if (
//     file.type.startsWith('image/')
//     //  ||
//     // file.type === 'application/pdf' ||
//     // file.type === 'application/msword' ||
//     // file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//   ) {
//     setuserImage(file);
//     setAddServices((prevState) => ({
//       ...prevState,
//       image: file,
//     }));
//   } else {
//     toast.info('Please select a valid image, PDF, or Word document.');
//     event.target.value = null;
//   }
// };


const {isLoading} = useSelector((state)=>state.firm)

const handleFileChange = (event) => {
  const file = event.target.files[0];
 setuserImage(file)
 setAddServices((prevState) => ({
    ...prevState,
    image: file,
  }));
};
// const onDocumentLoadSuccess = ({ numPages }) => {
//   setNumPages(numPages);
// };


        const addServicesSave = async () => {


     if(!addServices.title || !addServices.description || !addServices.image){
      toast.error("missing values!",{autoClose:2000})
      return
     }


          const formData = new FormData();

       
          for (let key in addServices) {
            formData.append(key, addServices[key]);
          }

          await dispatch(addNewService(formData))
          .then( async (res)=>{
          toast.success(res.payload?.message,{
            autoClose:1000
          })
          await dispatch(getServicesByID({user_id:user?.user?._id}))
             closeWindow()
          })

         

      
          
        }
      


  return (
<>

    
  <div className="container">
  <div className="d-flex justify-content-between align-items-center">

        <p className='poppins-600 h3 mb-0'>Add New Services</p>
        <button className='btn-close' onClick={closeWindow}></button>
    </div>
    <div className="row mt-0 d-flex justify-content-between align-items-center">
      <div className="col-md-7 col-sm-12" >
   <div className="row text-start">
    <div className="form-group mt-3">
    <label for="exampleInputEmail1" className='poppins-500'>Title</label>
    
    <input type="text" name="title" id="" className='form-control my-2' style={{outline:'none'}} onChange={handleChange} value={addServices.title} />
  </div>

  <div className="form-group my-4">
  <label for="exampleInputEmail1" className='poppins-500'>Description</label>
  <textarea className="form-control my-2" style={{outline:'none'}} name="description" id="exampleFormControlTextarea1" rows="6" value={addServices.description} onChange={handleChange}></textarea>
  </div>
    </div>
 
    </div>
    <div className="col-md-5 col-sm-12" onClick={handleAvatarClick} style={{ cursor: 'pointer' }}>
        {/* {userImage?.type === 'application/pdf' && userImage?.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? (
          // <Document
          //   file={getFileIcon(userImage)}
          //   onLoadSuccess={onDocumentLoadSuccess}
          // >
          //   {Array.from(new Array(numPages), (el, index) => (
          //     <Page
          //       key={`page_${index + 1}`}
          //       pageNumber={index + 1}
          //       width={250}
          //     />
          //   ))}
          // </Document>
          <iframe src="https://view.officeapps.live.com/op/view.aspx?src=https://res.cloudinary.com/dy0pphqqd/image/upload/v1699435751/Resume_saqib_1_1_pb3rpu.pdf"></iframe>

        ) : (
          <img
            src={userImage ? getFileIcon(userImage.type) : 'path/to/default-placeholder.png'}
            className="img-circle img-fluid img-thumbnail"
            style={{ width: '250px', height: '250px', position: 'relative' }}
            alt="File Preview"
          />
        )} */}

       <Tooltip title="Select File">
        <img
             src={  userImage  ? URL.createObjectURL(userImage): IMG  }
            className="img-circle img-fluid img-thumbnail"
            style={{ width: '250px', height: '250px', position: 'relative' }}
            alt="File Preview"
          />
        </Tooltip> 
        <input
          className=""
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept='image/*'
          // accept="image/*,.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
      </div>  
    </div>
 

     <div className="text-center mt-4 mb-4">
        <button  className='btn btn-dark text-center px-5 py-2' disabled={isLoading} style={{fontSize:'18px'}} onClick={addServicesSave}>{isLoading ? "loading" : "Add"}</button>
    </div>  
  </div>
 
   
 
 
    </>
  )
}

export default AddNewServices