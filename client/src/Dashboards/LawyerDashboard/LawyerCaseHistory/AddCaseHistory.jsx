import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamLaywer, getCaseType, AddCaseDetails, ListofAllCases, getNews } from '../../../_redux/features/firm/firmSlice';
import { toast } from 'react-toastify';

const AddCaseHistory = ({ closeWindow }) => {


  const memoizedCaseStatusOptions = useMemo(() => {
    const caseStatus = ["win", "lose", "pending", "on going"];
    return caseStatus?.map((status, i) => (
      <option key={i} value={status}>{status}</option>
    ));
  }, []);


  const [addCase, setAddCase] = useState({
    lawer_id: '',
    case_type: '',
    case_status: 'win',
    description: ''
  });
  
 
  

  const { firm } = useSelector((state) => state.firm);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getTeamLaywer());
      await dispatch(getCaseType());
    };
    getData();
  }, [dispatch]);

  useEffect(() => {
    if (firm?.TeamLawyer?.teamLayer?.length > 0) {
      setAddCase((prevState) => ({
        ...prevState,
        lawer_id: firm.TeamLawyer.teamLayer[0]._id,
      }));
    }
    if (firm?.CaseType?.data?.length > 0) {
      setAddCase((prevState) => ({
        ...prevState,
        case_type: firm.CaseType.data[0]._id,
      }));
    }
  
   
  }, [firm.TeamLawyer, firm.CaseType, addCase.case_status])

  const handleChange = (e) => {
    setAddCase((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const addCaseSave = async () => {
    await dispatch(AddCaseDetails(addCase))
      .then(async () => {
        await dispatch(getTeamLaywer());
        await dispatch(getCaseType());
        await dispatch(ListofAllCases());
        await dispatch(getNews())
       
      });

    toast.success('Case Details added Successfully', {
      autoClose: 1000
    });

    closeWindow();
  };

 

  return (
    <>
      {/* Close button */}
      <div className="row justify-content-end">
        <button className="btn-close" onClick={closeWindow}></button>
      </div>
      {/* Heading */}
      <div className="row text-start">
        <p className="poppins-600 h3">Add New Case</p>
      </div>

      {/* Main form */}
      
        <div className="row text-start">
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1" className="poppins-300">Select lawyer</label>
            <select
              className="form-select"
              aria-label="Default select example"
              name='lawer_id'
              value={addCase.lawer_id}
              onChange={handleChange}
            >
              {firm?.TeamLawyer?.teamLayer?.map((team, i) => (
                <option key={i} value={team._id}>{team.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1" className="poppins-300">Case Type</label>
            <select
              className="form-select"
              name='case_type'
              aria-label="Default select example"
              value={addCase.case_type}
              onChange={handleChange}
            >
              {firm?.CaseType?.data?.map((type, i) => (
                
                <option key={i} value={type._id}>{type.case_type}</option>
                
              ))}
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1" className="poppins-300">Case Status</label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="case_status"
              value={addCase.case_status}
              onChange={handleChange}
            >
              {memoizedCaseStatusOptions}
            </select>
          </div>

          <div className="form-group mt-4">
          <label htmlFor="exampleInputEmail1" className="poppins-300">Description</label>
            <textarea
              className="form-control"
              name="description"
              id="exampleFormControlTextarea1"
              rows="4"
              value={addCase.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Submit button */}
        <div className="text-center mt-4 mb-4">
          <button className="btn btn-dark" onClick={addCaseSave}>Add</button>
        </div>
    
    </>
  );
};

export default AddCaseHistory;
