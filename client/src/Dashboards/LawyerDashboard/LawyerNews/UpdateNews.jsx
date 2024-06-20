import React,{ useRef, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getNews, Updatenews } from '../../../_redux/features/firm/firmSlice';
import { toast } from 'react-toastify';
import swiperImg from "../../../assets/firmsDetail-assets/matrimonial.png";


const UpdateNews = ({closeWindow,editData}) => {

     const user = JSON.parse(localStorage.getItem('user'))
     
   
       const [addNews,setAddNews] = useState({
        title:editData?.name,
        description:editData?.description,
        image:null,
        id:editData?._id
       })


         const firm = useSelector((state)=>state.firm)


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
const [userImage,setUserImage] = useState()

const handleFileChange = (event) => {
  const file = event.target.files[0];
  setUserImage(file); 
  setAddNews((prevState) => ({
    ...prevState,
    image: file,
  }));
};



        const Update = async () => {

          const formData = new FormData();

          formData.append('title', addNews.title);
          formData.append('description', addNews.description);
          formData.append('id', addNews.id);
        
          
          if (addNews.image) {
            formData.append('image', addNews.image);
          }

              await dispatch(Updatenews(formData))
          .then( async (res)=>{
            await dispatch(getNews({id:user?.user?._id}))

            toast.success(res?.payload?.message,{
            autoClose:1000
          })

          closeWindow()
          })

         
          
        }
      


  return (
<>
 
    
  <div className="container">
  <div className="d-flex justify-content-between">

        <p className='poppins-600 h3'>Update News</p>
        <button className='btn-close' onClick={closeWindow}></button>
    </div>
    <div className="row my-3 d-flex justify-content-between align-items-center">
      <div className="col-md-7 col-sm-12" >
   <div className="row text-start">
    <div className="form-group mt-3">
    <label for="exampleInputEmail1" className='poppins-500'>Title</label>
    <input type="text" name="title" id="" className='form-select my-2' onChange={handleChange} value={addNews.title}/>
  </div>

  <div className="form-group my-4">
  <label for="exampleInputEmail1" className='poppins-500'>Description</label>
  <textarea className="form-control my-2 " name="description" id="exampleFormControlTextarea1" rows="6" value={addNews.description} onChange={handleChange}></textarea>
  </div>
    </div>
 
    </div>
    <div className="col-md-5 col-sm-12" onClick={handleAvatarClick} style={{cursor:'pointer'}}>
    
    <img
               src={userImage ? URL.createObjectURL(userImage) : 
                (editData?.image ? editData.image : swiperImg)}
                  className="img-circle img-fluid img-thumbnail"
                  style={{ width: '250px',height:'250px', position: 'relative' }}
                  alt="Avatar"
                />
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
        <button className='btn btn-dark px-5' onClick={Update}>Update</button>
    </div>  
  </div>
 
   
 
 
    </>
  )
}

export default UpdateNews