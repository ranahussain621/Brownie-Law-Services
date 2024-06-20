import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../Dashboards/LawyerDashboard/Header';
import Main from './Main';
import '../../Dashboards/LawyerDashboard/main.css';

import LogOut from '../../Components/LogOut/LogOut';
import ChatScreen from '../../Components/chatModule/ChatScreen';
import ClientProfile from '../SuperAdmin/Profile/AdminProfile';

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
    console.log("🚀 ~ Dashboard ~ MessageToUser:", MessageToUser)
    
    
    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Main openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} toggleLogoutModal={toggleLogoutModal} />
            <div className="content-container">
                <Routes>
                    
                    <Route path='/' element={<ClientProfile />} />
                    <Route path='/Chat' element={<ChatScreen  MessageToUser={MessageToUser}/>} />


                </Routes>
               
                {showLogoutModal &&
                 <div className="modalLogout" style={{ zIndex: 999 }}>
                    <div className="modal-contentLogout">
                    <LogOut closeWindow={toggleLogoutModal} />   
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

export default Dashboard;
