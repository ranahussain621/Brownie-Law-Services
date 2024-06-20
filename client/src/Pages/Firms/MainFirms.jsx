import { Grid, Typography } from "@mui/material";
import "./firms.css";
import lawyer1 from "../../assets/lawyer-assets/lawyer1.png";
import lawyer2 from "../../assets/lawyer-assets/lawyer2.png";
import lawyer3 from "../../assets/lawyer-assets/lawyer3.png";
import lawyer4 from "../../assets/lawyer-assets/lawyer4.png";
import hammer from "../../assets/lawyer-assets/judge-hammer.png";
import MessageIcon from "@mui/icons-material/Message";
// import ReviewStar from "../../Components/ReviewStar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFirms } from "../../_redux/features/firm/firmSlice";
import { AddInChatListApi, chatListApi } from "../../_redux/features/messageSlice";
import { UpdateClientProfileDetails } from "../../_redux/features/auth/authSlice";
import MainNews from "../Home/MainNews";
import SearchIcon from '@mui/icons-material/Search';
import right from "../../assets/Right.png";
import Rating from '@mui/material/Rating';

const MainFirms = () => {
 
  const navigate = useNavigate();
  const { isLoading, firm } = useSelector((state) => state.firm);


  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

   const [outsiderFirmId,setOutsiderFirmId] = useState('outsideFirm')

  const firmsDetails = async (data) => {
    setOutsiderFirmId(outsiderFirmId)
    await dispatch(UpdateClientProfileDetails({ id: data?._id }))
      .then((response) => {
        if (response?.payload?.success === true) {
          let user = response?.payload?.user
          navigate('/firm-details', { state: { cardInfo: user ,firmData:data , outsiderFirmId:outsiderFirmId} });
          window.scrollTo({ top: 250, behavior: 'smooth' });
        }
      })
 
  }

  const getRandomLawyerImage = () => {
    const images = [lawyer1, lawyer2, lawyer3, lawyer4];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  let login = JSON.parse(localStorage.getItem("user"));
  const getData = login?.Role?.title;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFirms());
  }, [dispatch]);

  const SendMessageLaywer = (id,e) => {
       e.stopPropagation();

    if (login && getData === "client") {
      navigate("/dashboard/Client", {
        state: { eventKey: "second", user_id: id },
      });

      const addinlist = async () => {
        await dispatch(
          AddInChatListApi({ recieverId: id, senderId: login?.user?._id })
        ).then((res) => {
          dispatch(chatListApi({ id: login?.user?._id }));
        });
      };
      addinlist();
    } else {
      toast.error("Login, Please!",{autoClose:2000});
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;



  const [searchQuery, setSearchQuery] = useState('');
// const [filteredFirms, setFilteredFirms] = useState([]);

  // const handleSearch = () => {
  //   const filtered = firm?.allFirms?.filter((firm) =>
  //   firm.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredFirms(filtered);
  //   setSearchQuery('')
  // };

  // const FirrsmToDisplay = filteredFirms?.length > 0 ? filteredFirms : firm?.allFirms;

  const Firms = firm?.allFirms?.filter((firm) =>
  firm.name.toLowerCase().includes(searchQuery.toLowerCase())
);

// Separating firms into two arrays based on plan_price
const higherRankedFirms = [];
const alphabeticalFirms = [];

Firms?.forEach((firm) => {
  if (firm.plan_price === "17000") {
    higherRankedFirms.push(firm);
  } else {
    alphabeticalFirms.push(firm);
  }
});

// Sorting alphabeticalFirms by name
alphabeticalFirms?.sort((a, b) => a.name.localeCompare(b.name));

// Concatenating both arrays for the final display
const sortedFirms = [...higherRankedFirms, ...alphabeticalFirms];



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




  return (
    <>
  
      <div className="font mt-md-5 mt-2">


        <div className="container mt-md-5 mt-0 pt-md-3 pt-0">
          <Grid container spacing={3} sx={{display:'flex',alignItems:'start'}} className="mt-md-5 mt-0 ">
            <div className="row d-flex align-items-center mx-md-5 mx-3">
               <Grid item xs={12} lg={4}  >
              <Typography
                variant="h2"
                
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm:'30px',
                    lg: "56px",
                  },
                  mb: {
                    xs: "0px",
                    lg: "0px",
                  },
                  fontWeight: "700",
                  fontFamily:'poppins',
                  letterSpacing:0.9,
                  width: {
                    xs: "auto",
                    lg: "440px",
                  },
                }}
              >
                Firms where affordable legal help 
              </Typography>
            </Grid>
            <Grid item xs={12} lg={8} className="d-flex justify-content-end">
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xs: "18px",
                    lg: "24px",
                  },
                 
                  color: "#000",
                
                }}
                className="poppins-500"
              >
                Law firms are professional entities formed by one or more lawyers who collaborate to provide legal services to individuals, businesses, or organizations. These firms offer a wide range of legal expertise across various practice areas, catering to the diverse needs of their clients
              </Typography>
            </Grid>  
            </div>
         
          </Grid>

          <div className="container" style={{marginTop:'80px'}}>
          <div className="d-flex align-items-center justify-content-center mx-md-4 mx-3">
          <div className="col-md-12 col-sm-12 date-picker-container">
              <input
                className="p-3 fw-bold w-100"
                placeholder="Search Expert Law Firms"
                type="text"
                name="input-date"
                id="input-date"
                style={{fontFamily:'poppins',fontSize:'18px',color:'black',letterSpacing:0.9}}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className="me-md-5 fs-2"/>
            </div>

           
              {/* <div className="">
                <button className="btn btn-lg btn-search mx-5" onClick={handleSearch}>Search</button>
              </div> */}
         

    
          </div>
        </div>

          <div className="row mx-md-5 mx-2" style={{marginTop:'60px'}}>
            {/* Start Blue card */}
            <div className="col-md-3 col-sm-12 mt-md-4 px-sm-0 ms-sm-0">
              <div className="w-100 rounded-5 top-main-card" style={{background:'#2E2829'}}>
                <div className="text-center">
                     
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
            Top Firms
          </Typography>
                  {/* <p className="poppins-600 pt-sm-5 custom-head text-white" style={{fontSize:'60px'}}>Top Firms</p> */}
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <img src={hammer} alt="" className="img-fluid"/>
                  
                </div>
                <div className="d-flex justify-content-end mx-4 mt-4 pt-md-0 pt-5">
                  <img className="img-fluid mt-md-4 mt-0" src={right} alt="" style={{width:50,height:50}} />
                </div>
              </div>
            </div>


            {
            isLoading ? (
              <p>Loading...</p>
            ) : sortedFirms?.length > 0 ?
              sortedFirms?.slice(startIndex, endIndex)?.map((item, i) => {

                const monthlyChatAvailability = getMonthlyChatAvailability(item.plan_price, item.createdAt);
                const isChatAvailable = monthlyChatAvailability > 0;

                  return (
                    <>
                      <div className="col-md-3 col-sm-12 mt-md-4  px-sm-0 ms-sm-0 mt-5" key={i}>
                        <div className="top-main-card"  style={{overflow:'hidden',cursor:'pointer',marginLeft:'1.5rem'}} 
                        onClick={() => firmsDetails(item)}>
                          <img
                            className="img-fluid rounded-4 w-100 h-100"
                            src={  item.image ? item.image : getRandomLawyerImage() }
                            style={{objectFit:'cover',background:'#dce4ed'}}
                            alt=""
                          />


            {
              item.plan_price === '10000' || item.plan_price === '17000' ? 
              <div
              className="hide mx-auto text-white"
              style={{
                backgroundColor: "#2E2829",
                textAlign: "center",
                width: "90%",
                borderRadius: "12px",
                position: "relative",
                bottom: "12rem",
                // left: '0.6rem',
                opacity: "75%",
                marginLeft: "10px",
              }}
            >
              <div className="d-flex">
                <div className="w-100">
                  <div className="fw-bold fs-2" style={{fontFamily:'poppins'}}>{item.name ? item.name : 'No Title Added'}</div>
                  <div className="fw-bold" style={{fontFamily:'poppins'}}>{item.email ? item.email : 'No Email Added'}</div>
                  <div className="" style={{fontFamily:'poppins'}}> {item.phone ? (
      <div className="fw-bold" style={{fontFamily:'poppins'}}>+{item.phone}</div>
    ) : (
      <div className="" style={{fontFamily:'poppins'}}>No contact Added</div>
    )}</div>
                  <div className="category" style={{fontFamily:'poppins'}}>{item.address ? item.address : 'No Address Added'}</div>
                  <div className="">
                  <Rating name="half-rating" defaultValue={1} precision={0.5} />
                  </div>
                </div>
                {isChatAvailable ? (
          <div className="hide mx-auto bg-transparent">
            <button className="btn shadow " style={{background:'#bcd422f0'}} onClick={(e) => SendMessageLaywer(item._id,e)}>
              <MessageIcon style={{ fontSize: "26px", color: "#4c6a71" }} />
            </button>
          </div>
        ) : ''}
              </div>
            </div> : 
              <div
              className="hide mx-auto text-white"
              style={{
                backgroundColor: "#2E2829",
                textAlign: "center",
                width: "90%",
                minHeight:'170px',
                borderRadius: "12px",
                position: "relative",
                bottom: "12rem",
                // left: '0.6rem',
                opacity: "75%",
                marginLeft: "10px",
              }}
            >
              <div className="d-flex">
                <div className="w-100" style={{marginTop:'40px'}}>
                  <div className="fw-bold fs-5" style={{fontFamily:'poppins'}}>{item.name ? item.name : 'No Title Added'}</div>
                  {/* <div className="fw-bold">{item.email ? item.email : 'No Email Added'}</div> */}
                  <div className="" style={{fontFamily:'poppins'}}> {item.phone ? (
      <div className="fw-bold" style={{fontFamily:'poppins'}}>+{item.phone}</div>
    ) : (
      <div className="" style={{fontFamily:'poppins'}}>No contact Added</div>
    )}</div>
                  <div className="category" style={{fontFamily:'poppins'}}>{item.address ? item.address : 'No Address Added'}</div>
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
        ) : ''
        //  (
         
        //   <div className="hide mx-auto bg-transparent">
        //     <p style={{fontFamily:'poppins'}}>Upgrade Your Plan</p>
        //   </div>
        // )
        }
              </div>
            </div> 
            }
                          

                        </div>
                      </div>
                    </>
                  );
                })
            : <div className="d-flex justify-content-center align-items-center"><p className="p-5 fs-2">No Data</p></div>
           
            }
            {/* end below cards  */}

            <nav className="d-flex justify-content-center">
              <ul
                className="pagination p-3"
                style={{
                  backgroundColor: "#f3f2f7",
                  fontSize: "1.2rem",
                  borderRadius: "20px",
                  color: "#7a7786",
                  marginTop:'5.5rem'
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
                      (firm?.length || 0) / itemsPerPage
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
                          (firm?.length || 0) / itemsPerPage
                        )
                      )
                    )
                  }
                  disabled={
                    currentPage ===
                    Math.ceil(
                      (firm?.length || 0) / itemsPerPage
                    )
                  }

                >
                  <li className="p-1 px-2">Next &gt;</li>
                </button>
              </ul>
            </nav>
          </div>
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
            lg: "60px",
          },
          fontFamily:'poppins,sans-serif'
        }}
      >
        News & Events
      </Typography>
     <MainNews />
      </div>

      </div>

    </>
  );
};
export default MainFirms;
