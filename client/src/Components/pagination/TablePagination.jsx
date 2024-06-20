import { Box,  Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from 'react-bootstrap';

const TablePagination = ({list,paginatedList}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Array.isArray(list) ? list.slice(indexOfFirstItem, indexOfLastItem): [];
  
  
    // Logic to handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(list?.length / itemsPerPage);

    useEffect(()=>{
        paginatedList(currentItems)
    },[currentPage,totalPages,list])
 
  return (
   <>
    
        <div className="row d-flex align-items-center  my-4">
          <div className="col-md-6 col-sm-12">
            <Typography
         
            sx={{
              fontSize: {  
                sm: "18px",
                xs:"12px" 
              },
               fontFamily:"poppins",
               fontWeight:500,
              color: "rgb(13,14,15)",
             
            }}
          >
           {` Showing data ${ currentPage} to ${itemsPerPage} of ${list?.length} entries`}
          </Typography>   
          </div>
          <div className="col-md-6 col-sm-12  d-flex justify-content-end">
             <Stack spacing={2} >

            <Pagination size="sm">
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)}  disabled={currentPage === 1}  >
                  <FontAwesomeIcon icon={faAngleLeft} className="p-2" />
                </Pagination.Prev>

                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    className="ps-3"
                    style={{zIndex:'0'}}
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    <div className="p-2">{index + 1}</div>
                  </Pagination.Item>
                ))}

                <Pagination.Next className="ps-3"  onClick={() => handlePageChange(currentPage + 1)}  disabled={currentPage === totalPages} >
                  <FontAwesomeIcon icon={faAngleRight} className="p-2" />
                </Pagination.Next>
              </Pagination>
          </Stack> 
          </div>
        </div>
       


   </>
  )
}

export default TablePagination