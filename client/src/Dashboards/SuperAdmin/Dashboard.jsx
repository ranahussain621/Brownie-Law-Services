import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../Dashboards/LawyerDashboard/Header';
import Main from './Main';
import '../../Dashboards/LawyerDashboard/main.css';
import NewsEvent from '../../Pages/Home/NewsEvent';
import Profile from './Profile/AdminProfile';
import LogOut from '../../Components/LogOut/LogOut';
import UserList from './Users/UsersList';
import SubscribedMember from './subscribers/SubscribedMembers';
// import Table from '../../Pages/Home/Table';  //testTable



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

    
    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Main openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} toggleLogoutModal={toggleLogoutModal} />
            <div className="content-container">
                <Routes>
                    
                    <Route path='/' element={<UserList />} />
                    <Route path='/Subscribers-List' element={<SubscribedMember />} />
                    <Route path='/News' element={<NewsEvent />} />
                    <Route path='/Profile' element={<Profile />} />

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
