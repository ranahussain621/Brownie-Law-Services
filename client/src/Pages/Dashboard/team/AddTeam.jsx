import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendRequestToLawyer, getTeamMember } from "../../../_redux/features/firm/firmSlice";
import { toast } from "react-toastify";

export default function AddTeam(props) {


  const data = JSON.parse(localStorage.getItem('user'));

  const {isLoading} = useSelector((state)=>state.firm)

  const userID= data?.user?._id
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const SendRequest = async () => {
    if (email.trim() === "") {
      setError("Email cannot be empty");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    await dispatch(
      SendRequestToLawyer({
  
        email,
        firm_id:userID
      })
    ).then(() => {
      toast.info("Email Sent", {
        autoClose: 1000,
      });
      props.closeWindow();
    });
  
    // Fetch the updated team members list
    await dispatch(getTeamMember());
  };

  return (
    <>
      <div className="card border-0 p-md-5 p-0">
       
        <div className="card-body px-md-5 p-0 m-0">
          <div>
            <p className="poppins-600 fw-semibold text-start fs-md-3">
              Add New Member
            </p>

            <div className="row g-3 align-items-center mt-3">
            
              <div className="col-md-12">
                <input
                  type="email"
                  id="input6"
                  className="form-control w-100 p-2"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {error && <div className="text-danger">{error}</div>}

            <div className="d-flex justify-content-start mt-md-5 mt-4">
              
              <div className="">
                <button
                  type="button"
                  className="btn btn-light border px-md-5 fw-bold fs-md-5"
                  onClick={props.closeWindow}
                >
                  Cancel
                </button>
              </div>
             <div className="mx-3">
                <button className="btn btn-dark border px-md-5 fw-bold fs-md-5" onClick={SendRequest} disabled={isLoading}>
                  {isLoading ? "loading" : "Send"}
                </button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
