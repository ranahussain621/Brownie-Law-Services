import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowWrapper,  MemberNameText,  MemberTitleText,  TeamCardTextWrapper} from "./Home.style";
import rightArrow from "../../assets/images/right-arrow.svg";
import leftArrow from "../../assets/images/left-arrow.svg";
import { getAllFirms } from "../../_redux/features/firm/firmSlice";
import { getAllLaywers } from "../../_redux/features/firm/firmSlice";
import { useDispatch } from 'react-redux';
import './NewsEvent.css'
import lawyer1 from "../../assets/lawyer-assets/lawyer1.png";
import lawyer2 from "../../assets/lawyer-assets/lawyer2.png";
import lawyer3 from "../../assets/lawyer-assets/lawyer3.png";
import lawyer4 from "../../assets/lawyer-assets/lawyer4.png";

const TeamMember = () => {

  const dispatch = useDispatch()
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allFirms = await dispatch(getAllFirms());
        const allLawyers = await dispatch(getAllLaywers());
        const firms = allFirms?.payload?.allFirms || [];
        const lawyers = allLawyers?.payload?.teamLayer || [];
        const arr = [...firms, ...lawyers];
        setUsers(arr);
      } catch (error) {
      }
    };

    fetchData();
  }, [dispatch]);

  const getRandomLawyerImage = () => {
    const images = [lawyer1, lawyer2, lawyer3, lawyer4];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };


// Separating firms into two arrays based on plan_price
const higherRankedFirms = [];
const highRankedFirms = [];
const alphabeticalFirms = [];

// eslint-disable-next-line array-callback-return
users?.map((firm) => {
  if (firm.plan_price === "17000") {
    higherRankedFirms.push(firm);
  }
  else if (firm.plan_price === "10000") {
    highRankedFirms.push(firm);
  }
  else {
    alphabeticalFirms.push(firm);
  }
});

// Sorting alphabeticalFirms by name
alphabeticalFirms?.sort((a, b) => a.name.localeCompare(b.name));

// Concatenating both arrays for the final display
const sortedFirms = [...higherRankedFirms, ...highRankedFirms, ...alphabeticalFirms];




  //================== page pagination start=================//
  const itemsPerPage = 4;
  const totalPages = Math.ceil(sortedFirms?.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
   const currentItems = Array.isArray(sortedFirms) ? sortedFirms?.slice(startIndex, endIndex): [];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  //================== page pagination end=================//

  return (
    <div  className="container mt-5">
         <Typography
           className="mx-md-5 mx-3"
            sx={{
              fontSize: {
                xs: "24px",
                sm:"30px", 
                lg: "50px",
                
              },
              fontWeight: "600",
              fontFamily:'poppins'
            }}
          >
            Best Firms & Lawyers
          </Typography>
      <Grid  container columnSpacing={{ xs: "10px", lg: "10px" }}  style={{ margin: "20px auto" }}>
        {
        
        currentItems?.map((user, index) => (
          <Grid className="grid-divs mt-3 pe-4" item  lg={3} md={4} sm={6} xs={12} key={index}>
            
          <img style={{background:'#dce4ed'}} src={user?.image ? user?.image : getRandomLawyerImage()} alt={user?.name} className="img-fluid h-100 rounded-4 "/>

            <TeamCardTextWrapper sx={{minWidth:'100px'}}>
              <MemberNameText style={{fontFamily:'poppins',color:'black',fontSize:'16px',fontWeight:800}}>{user?.name?.slice(0, 10)}</MemberNameText>
              <p   style={{fontFamily:'poppins',color:'black',fontSize:'14px',display:'flex',justifyContent:'center',fontWeight:600}}>{user?.email}</p>
            </TeamCardTextWrapper>
          </Grid>
        ))}
      </Grid>

      <ArrowWrapper className="padding-main">
        <Box onClick={handlePrevPage} sx={{cursor:'pointer'}}>
        {currentPage === 0 ? '' :  <img src={leftArrow} className="" alt="" />} 
        </Box>
        <Box onClick={handleNextPage} sx={{cursor:'pointer'}}>
        { currentPage >= totalPages - 1 ? '' :  <img src={rightArrow} className="" alt="" />}  
        </Box>
      </ArrowWrapper>
    </div>
  );
};

export default TeamMember;
