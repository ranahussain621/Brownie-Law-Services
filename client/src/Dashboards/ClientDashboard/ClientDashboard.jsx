
import React,{useEffect, useState} from 'react'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import logo from "../../assets/Logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyUser,faMessage } from '@fortawesome/free-solid-svg-icons';
    
import "../../Styles/usersidebar.css"
import LogOut from '../../Components/LogOut/LogOut';
import ClientProfile from '../SuperAdmin/Profile/AdminProfile';
import { useLocation } from 'react-router-dom';
import ChatScreen from '../../Components/chatModule/ChatScreen';
import SelectAccount from '../../Components/SelectAccount/SelectAccount';





export default function ClientDashboard() {
 


  const location = useLocation()

const eventKey = location.state?.eventKey;
const MessageToUser = location.state?.user_id

      

  

    
   


    const [logOut, setLogOut] = useState(false);

    const showLogoutScreen= ()=>{
      setLogOut(!logOut)
      }

      useEffect(() => {
        function handleResize() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--select-account-margin', `${vh * 43}px`);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  return (
    <>


      <div >
        {/* <h2>User Dashboard</h2> */}
        <Tab.Container id="left-tabs-example" defaultActiveKey={`${eventKey ? eventKey:'first'}`} className=''>

   
          <Row className='m-0 p-0'> 
       
           <Col sm={2} className="sidebar-area shadow p-0 m-0" style={{ background: '#0d0e0f', height: '100vh', position: 'fixed', left: 0 }}>
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
                  <FontAwesomeIcon icon={faHouseChimneyUser} />
             </div>
                
                    <p className='text-middle mt-2 h5  poppins-400 ps-3 '>Profile</p> </Nav.Link>
                </Nav.Item>


                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="second">
                 

                  <div className='d-flex align-items-center px-2'>
                  <FontAwesomeIcon icon={faMessage} />
             </div>

                    <p className='text-middle mt-2  h5  poppins-400 ps-3'>Chat</p>
                  </Nav.Link>
                </Nav.Item>

                <div style={{ marginTop: 'var(--select-account-margin)' }}>
                  <SelectAccount toggleLogoutModal={showLogoutScreen}/>
                </div>


              </Nav>
            </Col>
          <Col sm={10} className='sidebar-screens pt-md-5' style={{ backgroundColor: '#F8F8F8', marginLeft: '16.66666667%', padding: '15px' }}>


          <Tab.Content  >


            <Tab.Pane style={{ color: "black" }} eventKey="first">
      
         <ClientProfile/>

            </Tab.Pane>
            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="second">
           
            {/* <Message MessageToUser={MessageToUser} /> */}
            {/* <MainContainer/> */}
            <ChatScreen MessageToUser={MessageToUser}/>
            </Tab.Pane>

         
        
        
          </Tab.Content>
        </Col>
          
           
          </Row>
        </Tab.Container>
      </div>



            {/* {Log Out Modal} */}


{logOut && (
    <div className="modalForAddPackage ">
    <div className="modal-contentForAddPackage">
     
   
   <LogOut closeWindow={showLogoutScreen}/>

    </div>
  </div>


   
    )}
    </>
  )
}
