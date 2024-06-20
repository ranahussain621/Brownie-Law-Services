import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCaseDetails, ListofAllCases, allCasesbyUser, getServicesByID } from '../../../_redux/features/firm/firmSlice';
import { toast } from 'react-toastify';
import IMG from '../../../assets/file/img.png'
import IMG2 from '../../../assets/file/pdf.jpg'
import IMG3 from '../../../assets/file/docx.png'
import addCas from '../../../assets/addCase.jpg'
import { Tooltip } from '@mui/material';

const AddNewCase = ({ closeWindow }) => {
  const user = JSON.parse(localStorage.getItem('user'))

  const [servicesData, setServicesData] = useState([])

  const [addCase, setaddCase] = useState({
    title: '',
    description: '',
    file: null,
    user_id: user?.user?._id,
    service_id: ''
  })

  console.log(addCase.service_id)

  const { isLoading } = useSelector((state) => state.firm)
  const dispatch = useDispatch()

  useEffect(() => {
    const getService = async () => {
      await dispatch(getServicesByID({ user_id: user?.user?._id }))
        .then((res) => {
          const services = res?.payload?.data;
          setServicesData(services);
          if (services?.length > 0) {
            setaddCase(prevState => ({
              ...prevState,
              service_id: services[0]._id
            }));
          }
        })
    }
    getService()
  }, [user?.user?._id, dispatch])

  const handleChange = (e) => {
    setaddCase((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const [userImage, setuserImage] = useState()

  const getFileIcon = (fileType) => {
    if (fileType.startsWith("image/")) {
      return URL.createObjectURL(userImage);
    } else if (fileType === "application/pdf") {
      return IMG2;
    } else if (
      fileType === "application/msword" ||
      fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      return IMG3;
    } else {
      return "path/to/default-icon.png";
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (
      file.type.startsWith('image/') || file.type === 'application/pdf' || file.type === 'application/msword' ||
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      setuserImage(file);
      setaddCase((prevState) => ({
        ...prevState,
        file: file,
      }));
    } else {
      toast.info('Please select a valid image, PDF, or Word document.');
      event.target.value = null;
    }
  };

  const addCaseSave = async () => {
    if (!addCase.title || !addCase.description || !addCase.file) {
      toast.error("missing values!", { autoClose: 2000 })
      return
    }

    const formData = new FormData();

    for (let key in addCase) {
      formData.append(key, addCase[key]);
    }

    await dispatch(AddCaseDetails(formData))
      .then(async (res) => {
        await dispatch(allCasesbyUser({ user_id: user?.user?._id }))
        // await dispatch(ListofAllCases())
        toast.success(res.payload?.message, {
          autoClose: 1000
        })

        closeWindow()
      })
  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <p className='poppins-600 h3'>Add New Case</p>
          <button className='btn-close' onClick={closeWindow}></button>
        </div>
        <div className="row mt-0 d-flex align-items-center">
          <div className="col-md-7 col-sm-12">
            <div className="row text-start">
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1" className='poppins-500'>Title</label>
                <input type="text" name="title" id="" className='form-control my-2' style={{ outline: 'none' }} onChange={handleChange} value={addCase.title} />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1" className="poppins-300">Add Category</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name='service_id'
                  value={addCase.service_id}
                  onChange={handleChange}
                >
                  {servicesData?.map((service, i) => (
                    <option key={i} value={service._id}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div className="form-group my-4">
                <label htmlFor="exampleInputEmail1" className='poppins-500'>Description</label>
                <textarea className="form-control my-2" style={{ outline: 'none' }} name="description" id="exampleFormControlTextarea1" rows="6" value={addCase.description} onChange={handleChange}></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 d-flex justify-content-center" onClick={handleAvatarClick} style={{ cursor: 'pointer' }}>
            { 
            !userImage ?  (
             <Tooltip title="Select File" className='fs-3'>
              <img
                 
                src={addCas}
                className="img-fluid border"
                style={{ position: 'relative' ,width:'50%',height:'30%'}}
                alt="Selected File"
              />
             </Tooltip> 
            ) :
            userImage ? (
              <img
                 
                src={getFileIcon(userImage.type)}
                className="img-fluid"
                style={{ position: 'relative' ,width:'50%',height:'30%'}}
                alt="Selected File"
              />
            ) : (
              <img
                src='path/to/default-placeholder.png'
                className="img-fluid"
                style={{ position: 'relative',width:'50%',height:'30%' }}
                alt="Select File"
              />
            )}

            <input
              className=""
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept="image/*,.pdf,.doc,.docx,application/pdf,application/msword"
            />
          </div>
        </div>
        <div className="text-center mt-4 mb-4">
          <button className='btn btn-dark text-center px-5 py-2' disabled={isLoading} style={{ fontSize: '18px' }} onClick={addCaseSave}>{isLoading ? "loading..." : "Add"}</button>
        </div>
      </div>
    </>
  )
}

export default AddNewCase
