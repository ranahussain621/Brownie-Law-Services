import { Route, Routes, useLocation  } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import CaseHistories from '../../Pages/Dashboard/case history/CaseHistories';
import './main.css'
import NewsEvent from '../../Pages/Home/NewsEvent';
import Profile from '../../Pages/Profile/index';
import ChatScreen from '../../Components/chatModule/ChatScreen';
import SubScriptionScreen from '../../Components/SubscriptionModule/SubScriptionScreen';
import LogOut from '../../Components/LogOut/LogOut';



function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);



  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [showLogoutModal, setShowLogoutModal] = useState(false); 
    const toggleLogoutModal = () => {
        setShowLogoutModal(!showLogoutModal);
        if (openSidebarToggle) {
            OpenSidebar(); 
        }
    };


    const location = useLocation()

    // const eventKey = location.state?.eventKey;
    const MessageToUser = location.state?.user_id
    
  
  return (
   
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Main openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} toggleLogoutModal={toggleLogoutModal} />
        <div className="content-container">
       <Routes>
          <Route path='/' element={<CaseHistories />}  />
          <Route path='/News' element={<NewsEvent />}  />
          <Route path='/Profile' element={<Profile />}  />
          <Route path='/Chat' element={<ChatScreen  MessageToUser={MessageToUser}/>}  />
          <Route path='/Subscription' element={<SubScriptionScreen />}  />
        </Routes> 
       </div>

       
        {showLogoutModal &&
                 <div className="modalLogout" style={{ zIndex: 999 }}>
                    <div className="modal-contentLogout">
                    <LogOut closeWindow={toggleLogoutModal} />   
                    </div>
                </div>
                }
      </div>
  
  );
}

export default Dashboard;
