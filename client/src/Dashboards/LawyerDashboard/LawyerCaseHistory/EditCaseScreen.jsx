import React,{ useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getTeamLaywer,getLawyerType, UpdateCase, ListofAllCases, getNews } from '../../../_redux/features/firm/firmSlice';
import { toast } from 'react-toastify';



const EditCaseScreen = ({description,closeWindow,selectedCaseId}) => {

 

  const [updateCase,setUpdateCase] = useState({
    lawer_id :'',
    laywer_type:'',
    description:description,
    id:selectedCaseId
   })


   const {firm} = useSelector((state)=>state.firm)

   const dispatch = useDispatch()

   useEffect(()=>{
    const getData = async () =>{
     await  dispatch(getTeamLaywer())
     await dispatch(getLawyerType())
    }
    getData()
   },[dispatch])



   const handleChange = (e) => {
    setUpdateCase((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    if (firm?.TeamLawyer?.teamLayer?.length > 0) {
      setUpdateCase((prevState) => ({
        ...prevState,
        lawer_id: firm.TeamLawyer.teamLayer[0]._id
      }));
    }
    if (firm?.LawyerType?.data?.length > 0) {
      setUpdateCase((prevState) => ({
        ...prevState,
        laywer_type: firm?.LawyerType?.data[0]._id
      }));
    }
  }, [firm?.TeamLawyer, firm?.LawyerType?.data]);



  const UpdateNewsSave = async () => {
      await dispatch(UpdateCase(updateCase))
    .then( async ()=>{
       await  dispatch(getTeamLaywer())
    await dispatch(getLawyerType())
     await dispatch(ListofAllCases())
     await dispatch(getNews())
    })

    closeWindow()
    toast.success('Case Details Updated Successfully',{
      autoClose:1000
    })
    
  }

     

  return (
    <>
    {/* Close buttom */}
    <div className="row justify-content-end">
        <button className='btn-close' onClick={closeWindow}></button>
    </div>
{/* Heading */}
    <div className="row text-start">
        <p className='poppins-600 h3'>Edit Case Details</p>
    </div>




    {/* main form */}
   
   <div className="row text-start">
    <div className="form-group mt-3">
    <label for="exampleInputEmail1" className='poppins-300'>Select lawyer</label>
    <select className="form-select " aria-label="Default select example" 
    name="lawer_id"
    value={updateCase.lawer_id}
    onChange={handleChange}
    >
 
       {
           firm?.TeamLawyer?.teamLayer?.map((team,i)=>{
            return (
              <>
              <option key={i} value={team._id}>{team.name}</option>
              </>
             
            )
           })
       }
 
</select>
  </div>

  <div className="form-group mt-3">
    <label for="exampleInputEmail1" className='poppins-300'>Lawyer Type</label>
    <select className="form-select" aria-label="Default select example"
     value={updateCase.laywer_type}
     name="laywer_type"
     onChange={handleChange}
     >
    {
           firm?.LawyerType?.data?.map((type,i)=>{
            return (
              <option key={i} value={type._id}>{type.laywer_type}</option>
            )
           })
       }
</select>
  </div>


  <div className="form-group  mt-4">
  <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="4" value={updateCase.description} onChange={handleChange}></textarea>
  </div>
    </div>

    {/* Submit buttom */}
   <div className="text-center mt-4 mb-4">
        <button className='btn btn-dark' onClick={UpdateNewsSave}>Update</button>
    </div>
 
 
 
    </>
  )
}

export default EditCaseScreen