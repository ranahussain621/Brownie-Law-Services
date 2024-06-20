import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyUser, faUser, faFileLines, faCalendarCheck, faNewspaper, faMessage } from '@fortawesome/free-solid-svg-icons';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SelectAccount from '../../Components/SelectAccount/SelectAccount';



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

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""} style={{width:'280px'}}>
        <div className='sidebar-title'>
           
            <div className='d-flex align-items-center cursor-pointer'onClick={() => handleItemClick(null)}>
                  <img src={logo} className='rounded' alt="" style={{ width: '60px', height: '60px' }} />
                  <h2><b className='text-white'>Brownie Link Services</b></h2>
                </div>
            
            <span className='icon close_icon' onClick={OpenSidebar}></span>
        </div>

        <ul className='sidebar-list mt-5'>
            <li className={`sidebar-list-item  ${activeItem === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
                <Link to="/dashboard/Firm" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faHouseChimneyUser} /><span className='px-3'>Dashboard</span> 
                </Link>
            </li>
            
            <li className={`sidebar-list-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
                <Link to="/dashboard/Firm/Team" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faFileLines} /><span className='px-3'>Team</span> 
                </Link>
            </li>
            <li className={`sidebar-list-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
                <Link to="/dashboard/Firm/Case-Histories" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faCalendarCheck} /> <span className='px-3'>Case Histories</span> 
                </Link>
            </li>

            <li className={`sidebar-list-item ${activeItem === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
                <Link to="/dashboard/Firm/News" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faNewspaper} /> <span className='px-3'>News</span> 
                </Link>
            </li>

            <li className={`sidebar-list-item ${activeItem === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
                <Link to="/dashboard/Firm/Chat" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faMessage} /> <span className='px-3'>Chat</span> 
                </Link>
            </li>
            <li className={`sidebar-list-item ${activeItem === 5 ? 'active' : ''}`} onClick={() => handleItemClick(5)}>
                <Link to="/dashboard/Firm/Profile" className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faUser} /> <span className='px-3'>Profile</span> 
                </Link>
            </li>

            <li className={`sidebar-list-item ${activeItem === 6 ? 'active' : ''}`} onClick={() => handleItemClick(6)}>
                <Link to="/dashboard/Firm/Subscription" className='d-flex align-items-center'>
                <CrisisAlertIcon /> <span className='px-3'>Subscription</span> 
                </Link>
            </li>


            <li>
                
            </li>
      
            <li>
          
            </li>



        </ul>

    <div className="div" style={{ position: 'fixed', bottom: 0, left: 0, right: 0 ,zIndex:999}}>
                    <SelectAccount toggleLogoutModal={showLogoutScreen} />
                </div> 

       
    </aside>
  )
}

export default Main