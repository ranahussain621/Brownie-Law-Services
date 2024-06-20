import girlImg from "../../assets/lawyer-assets/mainLawyer.png";

import rectangle from "../../assets/lawyer-assets/backImg.png";
import "./lawyer.css";
// import lawyerImg from "../../assets/images/topLawyer.png";
import lawyer1 from "../../assets/lawyer-assets/lawyer1.png";
import lawyer2 from "../../assets/lawyer-assets/lawyer2.png";
import lawyer3 from "../../assets/lawyer-assets/lawyer3.png";
import lawyer4 from "../../assets/lawyer-assets/lawyer4.png";
import right from "../../assets/Right.png";
import hammer from "../../assets/lawyer-assets/judge-hammer.png";
import MessageIcon from "@mui/icons-material/Message";
// import ReviewStar from "../../Components/ReviewStar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLaywers } from "../../_redux/features/firm/firmSlice";
import {
  AddInChatListApi,
  chatListApi,
} from "../../_redux/features/messageSlice";
import { Typography } from "@mui/material";
import MainNews from "../Home/MainNews";
import { UpdateClientProfileDetails } from "../../_redux/features/auth/authSlice";
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';


const Lawyers = () => {
 
  const navigate = useNavigate();
  const { isLoading, lawyerList } = useSelector((state) => state.firm);

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);


  const [searchQuery, setSearchQuery] = useState('');
// const [filteredLawyers, setFilteredLawyers] = useState([]);

  let login = JSON.parse(localStorage.getItem("user"));
  const getData = login?.Role?.title;

  const dispatch = useDispatch();

 const getRandomLawyerImage = () => {
    const images = [lawyer1, lawyer2, lawyer3, lawyer4];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    dispatch(getAllLaywers());
  }, [dispatch]);


  // const handleSearch = () => {
  //   const filtered = lawyerList?.AllLawyersList?.teamLayer?.filter((lawyer) =>
  //     lawyer.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredLawyers(filtered);
  //   setSearchQuery('')
  // };

  // const lawyersToDisplay = filteredLawyers?.length > 0 ? filteredLawyers : lawyerList?.AllLawyersList?.teamLayer;

  const Lawyers = lawyerList?.AllLawyersList?.teamLayer?.filter((firm) =>
  firm.name.toLowerCase().includes(searchQuery.toLowerCase())
);

// Separating firms into two arrays based on plan_price
const higherRankedFirms = [];
const alphabeticalFirms = [];

Lawyers?.forEach((firm) => {
  if (firm.plan_price === "17000") {
    higherRankedFirms.push(firm);
  } else {
    alphabeticalFirms.push(firm);
  }
});

// Sorting alphabeticalFirms by name
alphabeticalFirms?.sort((a, b) => a.name.localeCompare(b.name));

// Concatenating both arrays for the final display
const sortedLawyers = [...higherRankedFirms, ...alphabeticalFirms];

  const SendMessageLaywer = (id,e) => {

   e.stopPropagation()

    if (login && getData === "client") {
      navigate("/dashboard/Client/Chat", {
        state: { eventKey: "second", user_id: id },
      });

      const addinlist = async () => {
        await dispatch(AddInChatListApi({ recieverId: id, senderId: login?.user?._id })
        ).then((res) => {
          dispatch(chatListApi({ id: login?.user?._id }));
        });
      };
      addinlist();
    } else {
      toast.error("Login, Please!",{autoClose:2000});
    }
  };




  const firmsDetails = async (data) => {
    
    await dispatch(UpdateClientProfileDetails({ id: data?._id }))
      .then((response) => {
        if (response?.payload?.success === true) {
          let user = response?.payload?.user
          navigate('/firm-details', { state: { cardInfo: user ,firmData:data } });
          window.scrollTo({ top: 150, behavior: 'smooth' });
        }
      })
 
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getMonthlyChatAvailability = (planPrice, createdAt) => {
    const currentTime = new Date();
    const firmCreationDate = new Date(createdAt);
    const timeDifferenceInMs = currentTime - firmCreationDate;
    const timeDifferenceInMonths = timeDifferenceInMs / (1000 * 3600 * 24 * 30);
  
    // Example values for hours per month
    const hoursPerMonthFor17000 = Infinity; // Unlimited for plan price 17000
    const hoursPerMonthFor10000 = 450;
    const hoursPerMonthFor5000 = 150;
  
    let monthlyChatAvailability = 0;
  
    if (timeDifferenceInMonths <= 0) {
      return 0; // No chat availability if the firm was created recently
    } else {
      monthlyChatAvailability = Math.floor(timeDifferenceInMonths * 720); // Example value for hours per month
  
      if (planPrice === "17000") {
        return hoursPerMonthFor17000; // Unlimited chat for plan price 17000
      } else if (planPrice === "10000") {
        return monthlyChatAvailability > hoursPerMonthFor10000 ? hoursPerMonthFor10000 : monthlyChatAvailability;
      } else if (planPrice === "5000" ) {
        return monthlyChatAvailability > hoursPerMonthFor5000 ? hoursPerMonthFor5000 : monthlyChatAvailability;
      } else {
        return 0; // Default value for no chat availability
      }
    }
  };



  const [mainNews,setMainNews] = useState('mainNews')

  useEffect(()=>{
    setMainNews(mainNews)
  },[mainNews])

  return (
    <>
      <br></br>
     <div className="mt-sm-4" >
     <div className="position-relative">
  <div className="container-fluid position-absolute top-0 start-50 translate-middle-x text-center">
    <div className="row mx-5 d-flex align-items-md-center">
      <div className="col-md-5 col-sm-12 order-md-1 order-sm-2 main-head mt-md-0 mt-5">
      <Typography className='ps-0 text-white' sx={{fontWeight:'800',  fontSize: {xs: "30px", sm:'42px',lg: "56px",},fontFamily:'poppins,sans-serif'}}>Find the right lawyer for you</Typography>

      <Typography className='ps-0 text-white' sx={{fontWeight:'500', mt:{xs:'1rem'}, fontSize: {xs: "18px", sm:'30px',lg: "36px",},fontFamily:'poppins,sans-serif'}}> Need help but do not know where to start? look
          
          no further!</Typography>

      
      </div>
       <div className="col-md-7 col-sm-12 order-md-2 order-sm-1 main-head d-flex justify-content-md-end justify-content-sm-center">
        <img src={girlImg} alt="" className="img-fluid inner-img" />
      </div>
    </div>
  </div>
  <img src={rectangle} alt="" className="img-fluid back-img w-100 rounded-5 back-img-girl"  />
 
</div>

       

        {/* start search filter-------------------- */}
        <div className="container main-input-search">
          <div className="d-flex align-items-center justify-content-center mx-md-5 mx-0">
          <div className="col-md-12 col-sm-12 date-picker-container ">
              <input
                className="p-3 fw-semibold w-100"
                placeholder="Search Expert Lawyers"
                type="text"
                name="input-date"
                id="input-date"
                style={{fontFamily:'poppins',fontSize:'18px',color:'black'}}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
               <SearchIcon className="me-md-5 fs-2" /> 
                           </div>

         
              {/* <div className="">
                <button className="btn btn-lg btn-search mx-5" onClick={handleSearch}>Search</button>
              </div> */}
         

    
          </div>
        </div>
 

        {/* start lawers card  */}
        <div className="container" style={{marginTop:'50px'}}>
          <div className="row mx-md-5 mx-2">
            {/* Start Blue card */}
            <div className="col-md-3 col-sm-12 mt-4 px-sm-0 ms-sm-0">
              <div className="w-100 rounded-5 top-main-card" style={{background:'#2E2829'}}>
              
              <Typography
              className="poppins-600 pt-sm-5 custom-head text-white text-center" 
            variant="h2"
            sx={{
              fontSize: {
                xs: "42px",
                lg: "50px",
              },
              fontWeight: "600",
              
              fontFamily:'poppins,sans-serif',
            }}
          >
            Top Lawyers
          </Typography>
                  {/* <h1 className="poppins-600 pt-sm-5 custom-head text-white text-center" style={{fontSize:'60px'}}>Top Lawyers</h1> */}
            

                <div className="d-flex justify-content-center mt-4">
                  <img src={hammer} alt="" className="img-fluid"/>
                  
                </div>
                <div className="d-flex justify-content-end mx-4 mt-4 pt-md-0 pt-5">
                  <img className="img-fluid mt-md-1 mt-0" src={right} alt="" style={{width:50,height:50}} />
                </div>
              </div>
            </div>
            {/* end Blue card */}

            {/* start below cards  */}

          {
     
            isLoading ? <p>loading...</p> : sortedLawyers?.length > 0 ? 
     sortedLawyers?.slice(startIndex, endIndex)?.map((item, i) => { 
       
      const monthlyChatAvailability = getMonthlyChatAvailability(item.plan_price, item.createdAt);
      const isChatAvailable = monthlyChatAvailability > 0;
              return (
             
                  <div className="col-md-3 col-sm-12 mt-md-4 mt-sm-0 mt-sm-5 px-sm-0 ms-sm-0 mt-5" >
                    <div className="top-main-card" key={i} style={{overflow:'hidden',cursor:'pointer',marginLeft:'1.5rem'}} onClick={() => firmsDetails(item)}  >
                     
                      <img
                        className="img-fluid rounded-4 w-100 h-100 d-flex align-items-center"
                        src={ item.image ? item.image : getRandomLawyerImage()  }
                       style={{objectFit:'cover',background:'#dce4ed',}}
                        alt=""
                      />

          {
              item.plan_price === '10000' || item.plan_price === '17000' ? 
             
              <div
              className="hide mx-auto rounded-5"
              style={{
                backgroundColor: "#282828",
                textAlign: "center",
                width: "80%",
                minHeight:'170px',
                borderRadius: "12px",
                position: "relative",
                bottom: "14rem",
                color:'white',
                opacity: "75%",
                marginLeft: "10px",
              }}
            >
             
              <div className="d-flex">
                <div className="w-100">
                  <div className="fw-bold" style={{textTransform:'capitalize',fontSize:'1.7rem'}}>{item.name ? item.name : 'No Title Added'}</div>
                  <div className="fw-bold">{item.email ? item.email : 'No Email Added'}</div>
                  <div className="">
                  {item.phone ? (
      <div className="fw-bold">+{item.phone}</div>
    ) : (
      <div className="">No contact Added</div>
    )}
                  </div>
                  <div className="category">{item.address ? item.address : 'No Address Added'}</div>
                  <div className="category">{item.firm_id?.name ? item.firm_id?.name : ''}</div>
                  <div className="">
                  <Rating name="half-rating" defaultValue={1} precision={0.5} />
                  </div>
                </div>
                {isChatAvailable ? (
          <div className="hide mx-auto bg-transparent">
            <button className="btn shadow" style={{background:'#bcd422f0'}} onClick={(e) => SendMessageLaywer(item._id,e)}>
              <MessageIcon style={{ fontSize: "26px", color: "#4c6a71" }} />
            </button>
          </div>
        ) : ''}
              </div>
            </div> 
            : 
              <div
              className="hide mx-auto poppins-50 rounded-50"
              style={{
                backgroundColor: "#282828",
                textAlign: "center",
                width: "80%",
                minHeight:'170px',
                borderRadius: "12px",
                position: "relative",
                bottom: "12rem",
                color:'white',
                opacity: "75%",
                marginLeft: "10px",
                fontFamily:'poppins'
              }}
            >
              <div className="d-flex">
                <div className="w-100">
                  <div className="fw-bold fs-5" style={{textTransform:'capitalize'}}>{item.name ? item.name : 'No Title Added'}</div>
                  {/* <div className="fw-bold">{item.email ? item.email : 'No Email Added'}</div> */}
                  <div className="">
                  {item.phone ? (
      <div className="fw-bold">+{item.phone}</div>
    ) : (
      <div className="">No contact Added</div>
    )}
                  </div>
                  <div className="category">{item.address ? item.address : 'No Address Added'}</div>
                  <div className="fw-bold fs-3">{item.firm_id?.name ? item.firm_id?.name : ''}</div>

                  <div className="">
                  <Rating name="half-rating" defaultValue={1} precision={0.5} />
                  </div>
                </div>
                {isChatAvailable ? (
          <div className="hide mx-auto bg-transparent">
            <button className="btn shadow" style={{background:'#bcd422f0'}} onClick={(e) => SendMessageLaywer(item._id,e)}>
              <MessageIcon style={{ fontSize: "26px", color: "#4c6a71" }} />
            </button>
          </div>
        ) :''}
              </div>
            </div> 
            }
                    </div>
                  </div>
             
              );
            }) : <div className="d-flex justify-content-center align-items-center"><p className="p-5 fs-2">No Data</p></div>
          } 


            {/* end below cards  */}

            <nav className="d-flex justify-content-center" style={{marginTop:'5.5rem'}}>
              <ul
                className="pagination p-3"
                style={{
                  backgroundColor: "#f3f2f7",
                  fontSize: "1.2rem",
                  borderRadius: "20px",
                  color: "#7a7786",
                }}
              >
                <button
                  className="page-li me-5 p-1"
                  onClick={() =>
                    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <li className="px-1">&lt; Prev</li>
                </button>

                {Array.from(
                  {
                    length: Math.ceil(
                      (lawyerList?.AllLawyersList?.teamLayer?.length || 0) / itemsPerPage
                    ),
                  },
                  (_, i) => (
                    <button
                      key={i}
                      className="page-li px-3"
                      onClick={() => setCurrentPage(i + 1)}
                      disabled={currentPage === i + 1}
                    >
                      <li className="px-1">{i + 1}</li>
                    </button>
                  )
                )}

                <button
                  className="page-li ms-5 okk"
                  
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      Math.min(
                        prevPage + 1,
                        Math.ceil(
                          (lawyerList?.AllLawyersList?.teamLayer?.length || 0) / itemsPerPage
                        )
                      )
                    )
                  }
                  disabled={
                    currentPage ===
                    Math.ceil(
                      (lawyerList?.AllLawyersList?.teamLayer?.length || 0) / itemsPerPage
                    )
                  }
                  
                >
                  <li className="p-1 px-2">Next &gt;</li>
                </button>
              </ul>
            </nav>
          </div>
        </div>
        {/* end lawers card  */}
      </div>



      <div className="div" style={{marginTop:'4rem'}}>
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "30px",
            lg: "50px",
          },
          textAlign: "center",
          fontWeight: "600",
          mb: {
            xs: "30px",
            lg: "50px",
          },
          fontFamily:'poppins,sans-serif'
        }}
      >
        News & Events
      </Typography>
     <MainNews mainNews={mainNews} />
      </div>
   
    </>
  );
};
export default Lawyers;
