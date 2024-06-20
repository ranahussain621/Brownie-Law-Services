import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faMessage } from '@fortawesome/free-solid-svg-icons';
import SelectAccount from '../../Components/SelectAccount/SelectAccount';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';


const  Main  = ({openSidebarToggle, OpenSidebar,toggleLogoutModal}) => {

   


    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
      setActiveItem(index);
      if(openSidebarToggle){
        OpenSidebar()
      }
     
    };

    const showLogoutScreen = () => {   
        toggleLogoutModal();
  }

  return (

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""} style={{width:'280px',}}>
        <div className='sidebar-title'>
           
            <div className='d-flex align-items-center'onClick={() => handleItemClick(null)}>
                  <img src={logo} className='rounded' alt="" style={{ width: '60px', height: '60px' }} />
                  <h2><b className='text-white'>Brownie Link Services</b></h2>
                </div>
            
            <span className='icon close_icon' onClick={OpenSidebar}></span>
        </div>

        <ul className='sidebar-list mt-5'>
            <li className={`sidebar-list-item  ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                <Link to="/dashboard/Admin" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faUser} /><span className='px-3'>Users</span> 
                </Link>
            </li>
            
            <li className={`sidebar-list-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
                <Link to="/dashboard/Admin/Subscribers-List" className='d-flex align-items-center'>
                 <PeopleOutlineRoundedIcon/> <span className='px-3'>Subscribers</span> 
                </Link>
            </li>
            <li className={`sidebar-list-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
                <Link to="/dashboard/Admin/News" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faMessage} /> <span className='px-3'>News and Events</span> 
                </Link>
            </li>

          
            <li className={`sidebar-list-item ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
                <Link to="/dashboard/Admin/Profile" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faUser} /> <span className='px-3'>Profile</span> 
                </Link>
            </li>

      
          
            <li>
           
              
            </li>
        </ul>

        <div className="div" style={{ position: 'absolute', bottom: 0, left: 0, right: 0,zIndex:999 }}>
                    <SelectAccount toggleLogoutModal={showLogoutScreen} />
         </div>
       
    </aside>
  )
}

export default Main