
import React,{useEffect, useState} from 'react'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import logo from "../../assets/Logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage,faUser,faUsers } from '@fortawesome/free-solid-svg-icons';
import "../../Styles/usersidebar.css"
import LogOut from '../../Components/LogOut/LogOut';
import SuperAdminProfile from './Profile/AdminProfile';
import { useLocation, } from 'react-router-dom';
import SubscribedMember from './subscribers/SubscribedMembers';
import NewsEvent from '../../Pages/Home/NewsEvent';
import AddNewNews from '../LawyerDashboard/LawyerNews/AddNewNews';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import UserList from './Users/UsersList';
import SelectAccount from '../../Components/SelectAccount/SelectAccount';








export default function SuperAdminDashboard() {
 


  const location = useLocation()

const eventKey = location.state?.eventKey;

      


    const [OpenNewNews, setOpenNewNews] = useState(false);
    const showOpenNewNews= ()=>{
      setOpenNewNews(!OpenNewNews)
    }
    
 


    const [logOut, setLogOut] = useState(false);

    const showLogoutScreen= ()=>{
      setLogOut(!logOut)
      }


      useEffect(() => {
        function handleResize() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--select-account-margin', `${vh * 30}px`);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }, []); 

  return (
    <>


      <div >
        {/* <h2>User Dashboard</h2> */}
        <Tab.Container id="left-tabs-example" defaultActiveKey={`${eventKey ? eventKey:'users'}`} className=''>

   
          <Row className='m-0  mb-3'> 
       
           <Col sm={2} className="sidebar-area shadow p-0 m-0" style={{ background: '#0d0e0f', height: '100vh', position: 'fixed', left: 0 }}>
           <div className='mb-md-5 mb-sm-1 mt-md-5'>
                <div className='px-2 mb-2 d-flex align-items-center'>
                  <img src={logo} className='rounded' alt="" style={{ width: '60px', height: '60px' }} />
                  <h2><b className='ps-md-2 text-white'>Brownie Link Services</b></h2>
                </div>
                <hr />
              </div>
                
              <Nav variant="pills" className="flex-column">
                {/* side menu titles */} 


                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' ,boxShadow:'none'}} eventKey="users">
                 

                  <div className='d-flex align-items-center px-2'>
                  <FontAwesomeIcon icon={faUsers} />
             </div>

                    <p className='text-middle mt-2  h5  poppins-400 ps-3'>Users</p>
                  </Nav.Link>
                </Nav.Item>

        <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="Third">
                 

                  <div className='d-flex align-items-center px-2'>
                  <PeopleOutlineRoundedIcon/>
             </div>

                    <p className='text-middle mt-2  h5  poppins-400 ps-3'>Subscribers</p>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="first">
             <div className='d-flex align-items-center px-2'>
             <FontAwesomeIcon icon={faMessage} />
             </div>
                
                    <p className='text-middle mt-2 h5  poppins-400 ps-3'>News and Events</p> </Nav.Link>
                </Nav.Item>


                <Nav.Item className='user-nav-item'>
                  <Nav.Link className='fs-6 d-flex user-nav-link rounded-0 px-0 mx-0 ps-3' style={{ margin: '0.2rem' }} eventKey="second">
             <div className='d-flex align-items-center px-2'>
                  <FontAwesomeIcon icon={faUser} />
             </div>
                
                    <p className='text-middle mt-2 h5  poppins-400 ps-3'>Profile</p> </Nav.Link>
                </Nav.Item>

                <div style={{ marginTop: 'var(--select-account-margin)' }}>
                  <SelectAccount toggleLogoutModal={showLogoutScreen}/>
                </div>
        
              </Nav>
            </Col>



          <Col sm={10} className='sidebar-screens pt-md-5' style={{  marginLeft: '16.66666667%', padding: '15px' }}>

          <Tab.Content  >


          <Tab.Pane style={{ color: "black" }} eventKey="users">
      
     <UserList />

         </Tab.Pane>

          <Tab.Pane style={{ color: "black" }} eventKey="first">
     
        <NewsEvent />

         </Tab.Pane>

            <Tab.Pane style={{ color: "black" }} eventKey="second">
      
         <SuperAdminProfile />

            </Tab.Pane>

            <Tab.Pane style={{ color: "black", border: "none" }} eventKey="Third">
           <SubscribedMember/>
           
            </Tab.Pane>

        
        
          </Tab.Content>
        </Col>
          
           
          </Row>
        </Tab.Container>
      </div>



       


{logOut && (
    <div className="modalForAddPackage ">
    <div className="modal-contentForAddPackage">
     
   
   <LogOut closeWindow={showLogoutScreen}/>

    </div>
  </div>


    )}

{OpenNewNews && (
    <div className="modalAddNewNews ">
    <div className="modal-contentAddNewNews">
     
   
   <AddNewNews closeWindow={showOpenNewNews}/>

    </div>
  </div>

    )}
    </>
  )
}
