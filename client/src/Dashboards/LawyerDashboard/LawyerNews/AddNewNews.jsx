import React,{ useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewNews, getNews } from '../../../_redux/features/firm/firmSlice';
import { toast } from 'react-toastify';
import IMG from '../../../assets/file/img.png'
import { Tooltip } from '@mui/material';
const AddNewNews = ({closeWindow}) => {

     const user = JSON.parse(localStorage.getItem('user'))
     
   const {isLoading} = useSelector((state)=>state.firm)
       const [addNews,setAddNews] = useState({
        name:'',
        description:'',
        image:null,
        id:user?.user?._id,
        category:user?.Role?.title
       })

    

         const dispatch = useDispatch()

      

         const handleChange = (e) => {
          setAddNews((prevState) => ({
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

const handleFileChange = (event) => {
  const file = event.target.files[0];
 setuserImage(file)
 setAddNews((prevState) => ({
    ...prevState,
    image: file,
  }));
};




        const addNewsSave = async () => {

          if(!addNews.name || !addNews.description || !addNews.image){
            toast.error("missing values!",{autoClose:2000})
            return
          }

          const formData = new FormData();

       
          for (let key in addNews) {
            formData.append(key, addNews[key]);
          }

          await dispatch(addNewNews(formData))
          .then( async (res)=>{
            await dispatch(getNews({id:user?.user?._id}))
          toast.success(res.payload?.message,{
            autoClose:1000
          })
             closeWindow()
          })

         

      
          
        }
      


  return (
<>

    
  <div className="container">
  <div className="d-flex justify-content-between">

        <p className='poppins-600 h3'>Add New News</p>
        <button className='btn-close' onClick={closeWindow}></button>
    </div>
    <div className="row my-3 d-flex justify-content-between align-items-center">
      <div className="col-md-7 col-sm-12" >
   <div className="row text-start">
    <div className="form-group mt-3">
    <label for="exampleInputEmail1" className='poppins-500'>Title</label>
    <input type="text" name="name" id="" className='form-control my-2' onChange={handleChange} value={addNews.name}/>
  </div>

  <div className="form-group my-4">
  <label for="exampleInputEmail1" className='poppins-500'>Description</label>
  <textarea className="form-control my-2 " name="description" id="exampleFormControlTextarea1" rows="6" value={addNews.description} onChange={handleChange}></textarea>
  </div>
    </div>
 
    </div>
    <div className="col-md-5 col-sm-12" onClick={handleAvatarClick} style={{cursor:'pointer'}}>
    <Tooltip title="Select File" className='fs-3'>
             <img
               src={  userImage  ? URL.createObjectURL(userImage): IMG  }

                  className="img-circle img-fluid img-thumbnail"
                  style={{ width: '250px',height:'250px', position: 'relative' }}
                  alt="Avatar"
                /></Tooltip>
             <input
           className=''
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />
    </div>   
    </div>
 

     <div className="text-center mt-4 mb-4">
        <button className='btn btn-dark px-5' disabled={isLoading} onClick={addNewsSave}>{isLoading ? "loading" :"Add"}</button>
    </div>  
  </div>
 
   
 
 
    </>
  )
}

export default AddNewNews