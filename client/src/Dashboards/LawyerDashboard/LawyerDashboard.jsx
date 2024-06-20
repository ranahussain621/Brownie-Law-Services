
import React,{useEffect, useState} from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import logo from "../../assets/Logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarCheck,faNewspaper ,faMessage } from '@fortawesome/free-solid-svg-icons';    
import "../../Styles/usersidebar.css"
  
import CaseHistories from '../../Pages/Dashboard/case history/CaseHistories';
import { useLocation, } from 'react-router-dom';
import ChatScreen from '../../Components/chatModule/ChatScreen';
import SubScriptionScreen from '../../Components/SubscriptionModule/SubScriptionScreen';
import Profile from '../../Pages/Profile/index';
import NewsEvent from '../../Pages/Home/NewsEvent';
import SelectAccount from '../../Components/SelectAccount/SelectAccount';
import LogOut from '../../Components/LogOut/LogOut';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';




export default function LawyerDashboard() {
 
    const location = useLocation()
    const user = JSON.parse(localStorage.getItem('user'))
    const eventKey = location.state?.eventKey;
   
  const MessageToUser = location.state?.user_id

        const [modalShow,setModalShow] = useState(false)
      const showUnSub= ()=>{
        setModalShow(!modalShow)
        }


        const [logOut, setLogOut] = useState(false);
        const showLogoutScreen = () => {
          setLogOut(!logOut);
      }


      useEffect(() => {
        function handleResize() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--select-account-margin', `${vh}px`);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
      
     

  return (
    <>


      <div >
       
        <Tab.Container id="left-tabs-example" defaultActiveKey={`${eventKey ? eventKey:'first'}`}>

   
          <Row className='m-0  mb-3'> 
       
           <Col sm={2} className="shadow p-0 m-0" style={{ background: '#0d0e0f', height: '100vh', position: 'fixed', left: 0,width:"19%" }}>
           <div className='mb-md-5 mb-sm-1 mt-md-5'>
                <div className='px-2 mb-2 d-flex align-items-center'>
                  <img src={logo} className='rounded' alt="" style={{ width: '60px', height: '60px' }} />
                  <h2><b className='ps-md-2 text-white'>Brownie Link Services</b></h2>
                </div>
                <hr />
              </div>
               
                
              <Nav variant="pills" className="flex-column">

                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="first">
        
                  <div className='d-flex align-items-center px-2'>
                  <FontAwesomeIcon icon={faCalendarCheck} />
                   </div>
                  <p className='text-middle mt-2 h5  poppins-400 ps-3'>Case Histores</p>
                  </Nav.Link>
                </Nav.Item>

             

           

                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="second">
                 <div className='d-flex align-items-center px-2'>
                  <FontAwesomeIcon icon={faNewspaper} />
             </div>

                    <p className='text-middle mt-2  h5  poppins-400 ps-3'>News</p>
                  </Nav.Link>
                </Nav.Item>
             


                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="third">
             <div className='d-flex align-items-center px-2'>
                  <FontAwesomeIcon icon={faUser} />
             </div>
                
                    <p className='text-middle mt-2 h5  poppins-400 ps-3'>Profile</p> </Nav.Link>
                </Nav.Item>

                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="fourth">
                 

                  <div className='d-flex align-items-center px-2'>
                  <FontAwesomeIcon icon={faMessage} />
             </div>

                    <p className='text-middle mt-2  h5  poppins-400 ps-3'>Chat</p>
                  </Nav.Link>
                </Nav.Item>


                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="fifth">
                 

                  <div className='d-flex align-items-center px-2'>
                  <CrisisAlertIcon />
             </div>

                    <p className='text-middle mt-2  h5  poppins-400 ps-2'>Subscription</p>
                  </Nav.Link>
                </Nav.Item>

                <div style={{ marginTop: 'var(--select-account-margin)' }}>
                                    <SelectAccount toggleLogoutModal={showLogoutScreen} />
                                </div>

              </Nav>
            </Col>
          <Col sm={10} className='pt-md-5 right-bar' style={{ padding: '15px' }} >

          <Tab.Content  >


          <Tab.Pane style={{ color: 'black', border: 'none' }} eventKey="first">        
      <CaseHistories /> 
          </Tab.Pane>

            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="second">
         
<NewsEvent/>
          </Tab.Pane>


        <Tab.Pane style={{ color: "black", border: "none" }} eventKey="third">
        <Profile/>
     </Tab.Pane>
          
          
          <Tab.Pane style={{ color: "black", border: "none" }} eventKey="fourth">
        
          {/* <Message  MessageToUser={MessageToUser} /> */}
          <ChatScreen MessageToUser={MessageToUser}/> 
        </Tab.Pane>

      
        <Tab.Pane style={{ color: "black", border: "none" }} eventKey="fifth">
        <div className="container">
         <div className="row">
          <div className="col-md-6"><h2 className='fs-2 fw-bold mx-5'> Subscription Plans</h2></div>
          {
            user?.user?.plan_id === null ? 
''               :
      <div className="col-md-6 text-end"><button className='btn btn-dark px-4 py-2' style={{fontWeight:'600'}} onClick={showUnSub} >Cancel Subscription</button></div>

          }
         </div>
         </div>
        <SubScriptionScreen/>
           </Tab.Pane>





          </Tab.Content>
        </Col>
          
    
      {logOut && (
                <div className="modalForAddPackage" style={{ zIndex: 999 }}>
                    <div className="modal-contentForAddPackage">
                        <LogOut closeWindow={showLogoutScreen} />
                    </div>
                </div>
            )}       
          </Row>
        </Tab.Container>

        <div style={{ marginTop: 'var(--select-account-margin)' }}>
                    <SelectAccount toggleLogoutModal={showLogoutScreen} />
                </div>
      </div>


    </>
  )
}
