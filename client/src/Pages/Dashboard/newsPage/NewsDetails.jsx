
import {Box, IconButton,} from "@mui/material";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { getNewsDetails } from "../../../_redux/features/firm/firmSlice";



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "900px",
    transform: "translate(-50%, -50%)",
  },
};

const NewsDetails = ({ ModalIsOpen, closeModal,id}) => {


  const [newsUpdatedDetail,setNewsDetail] = useState()

  const dispatch = useDispatch()

  useEffect(()=>{
    const getData = async () =>{
     const data = await dispatch(getNewsDetails(id))
        const val = data.payload
        setNewsDetail(val.news);
    }
    getData()
  },[id,dispatch])





  return (
    <Box sx={{ width: "800px" }}>
      <Modal
        isOpen={ModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Box sx={{ padding: "20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <IconButton onClick={closeModal} aria-label="delete">
              <CloseIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>

          <Box>
            {/* <Typography variant="h4" 
            className="text-center"
            sx={{ fontWeight: "600", color: "#000" }}>
              News Details
            </Typography> */}


          
    <div className="form-group  mt-4">
  <textarea className="form-control border-rounded p-2" name="description" id="exampleFormControlTextarea1" rows="4" placeholder={newsUpdatedDetail?.description} >
   
  </textarea>
  </div>
   

          

          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default NewsDetails;
