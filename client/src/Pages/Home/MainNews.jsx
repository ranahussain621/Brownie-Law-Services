import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../_redux/features/firm/firmSlice";
// import { IconButton } from "@mui/material";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './NewsEvent.css'

const MainNews = () => {
  const { newsList, isLoading } = useSelector((state) => state.firm);
  const dispatch = useDispatch();



  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const getData = async () => {
      await dispatch(getNews({category : 'superAdmin'}));
    }; 
    getData();
  }, [dispatch]);
  

  const [currentPage, setCurrentPage] = useState(1);



  const itemsPerPage = 4;
  const totalPages = Math.ceil(newsList?.data?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Array.isArray(newsList?.data) ? newsList?.data?.slice(startIndex, endIndex): [];

  const handleCircleClick = (direction) => {
    if (direction === 'prev') {
      setCurrentPage((prevPage) => Math.max(prevPage - itemsPerPage, 1));
    
    } else if (direction === 'next') {
      setCurrentPage((prevPage) => Math.min(prevPage + itemsPerPage, totalPages));
    }
  };

  return (
    <>
    
      <div className="container mb-4"  >
        <div className="row mx-md-0 mx-3">
          {isLoading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : currentItems?.length > 0 ?
            currentItems?.map((item, i) => {
              const descriptionWords = item?.description.split(' ');
              const truncatedDescription = descriptionWords?.slice(0, 12).join(' ');
              return (
                <div className="col-md-3 col-sm-12 mt-md-4 overlay-div px-sm-0 ms-sm-0 mb-5 "  key={i}
                style={{overflow:'hidden',position:'relative'}}
                       onMouseEnter={() => handleMouseEnter(i)}
                       onMouseLeave={handleMouseLeave} >
                        <div className="px-1 px-md-0 news-main-image" >
                         <img 
                       className="img-fluid rounded-0 w-100 h-100 img-bor border"
                        src={  item?.image?.length > 0 ? item.image : 'https://www.energy.gov/sites/default/files/2018/08/f54/news24.jpg' }
                       style={{objectFit:'cover',}}
                        alt=""
                      />  
                        </div>
                     


                      {
                        hoveredIndex === i && (
                            <div  className="hide mx-auto owner-name-overlay"
              style={{
                backgroundColor: "black",
                textAlign: "center",
                minHeight:'140px',
                position: "relative",
                bottom: "8.7rem",
                opacity: "75%",
                
              }}
            >
              <div className="d-flex">
                <div className="w-100">
                  <div className="text-white" style={{fontFamily:'poppins',textTransform:'capitalize',fontSize:'24px'}}>{item.name ? item.name : 'No Title Added'}</div>
                  <div className="text-white mt-md-3 mx-md-3" style={{fontFamily:'poppins',textTransform:'capitalize',textAlign:'justify',fontSize:'18px'}}>{truncatedDescription ? truncatedDescription : 'No Description Added'}</div>
                  <div className="">
       
                  </div>
                 
                </div>
          
              </div>
            </div> 
                        )
                      }

           
            
                    </div>
               
              );
            })
          :
          <h2 className="poppins-600 fs-3 text-danger d-flex justify-content-center">We Will Provide Shortly</h2>
          
          }
        </div>

        <div className="d-flex justify-content-center mt-4">     
        
        <input type="radio" name="circleGroup" className="div  w-4 h-4 rounded-circle" checked={currentPage === 1} onChange={() => handleCircleClick('prev')}  style={{border:'1.5px solid'}} />
          <input type="radio" name="circleGroup" className="div  w-4 h-4 mx-2  rounded-circle"  onChange={() => handleCircleClick('next')} style={{border:'1.5px solid'}} />
  

        </div>
      </div>
    </>
  );
};

export default MainNews;
