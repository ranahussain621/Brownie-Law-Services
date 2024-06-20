import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { UpdateClientProfileDetails } from "../../_redux/features/auth/authSlice";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import LogOut from "../LogOut/LogOut";
 


const SelectAccount = ({toggleLogoutModal}) => {

    const [visible, setVisible] = useState(false);
    const [isCustomClass, setIsCustomClass] = useState(false); 


    const open = () => {
        setVisible(!visible);
        setIsCustomClass(!isCustomClass); 
      };

  const user = JSON.parse(localStorage.getItem("user"));

  const USER = useSelector((state) => state.auth.userDetails);
  
 


  const dispatch = useDispatch()
  
  const name = USER?.user?.name



  useEffect(() => {
    const getData = async () => {
      await dispatch( UpdateClientProfileDetails({  id: user?.user?._id, }) )
       
    };
    getData();
  }, []);


  const showLogoutScreen = () => {
    toggleLogoutModal(); // Call the function passed as prop to toggle logout modal
};


  return (
  

     
        <div className="" >
          <div className={`py-3 ps-4  ${isCustomClass ? 'custome-css-class' : 'text-white'}`} style={{ display: "flex",alignItems:'center'}}>
            <div >   
              <img
                style={{ borderRadius: "50%", width: "32px", height: "32px" }}
                src={
                    USER?.user?.image?.length > 0
                      ? USER?.user?.image
                      : "https://bootdey.com/img/Content/avatar/avatar7.png"
                  }
                alt=""
              />
            </div>
            <div style={{textAlign:'left',padding:'0px 5px'}}>
              <p  className={`fw-semibold ${isCustomClass ? 'text-white fw-bold' : 'text-white fw-bold'}`} style={{padding:'0px',margin:'0px',fontSize:'14px',textTransform:'capitalize',}}>{name?.slice(0,12)}</p>
            </div>
            <div>
            {visible ? (
            <ExpandLessIcon className=""  style={{ color: '#fff',stroke: '#fff' ,strokeWidth: '1px',margin:'0px 0px 0px 4rem',cursor:'pointer'}} onClick={open} />
          ) : (
            <ExpandMoreIcon className="" style={{ color: '#fff',stroke: '#fff' ,strokeWidth: '1px',margin:'0px 0px 0px 4rem',cursor:'pointer'}} onClick={open} />
          )}
            </div>
          </div>
           {
        visible && (
          
                 <div className="ps-5 py-3 d-flex align-items-center w-100"  onClick={showLogoutScreen} style={{background:'#fdf1f3',cursor:'pointer',}}>
                      <FontAwesomeIcon icon={faSignOutAlt }/>
                     <span className="" style={{padding:'0px 15px',color:'#0d0e0f',fontSize:'20px',textTransform:'capitalize',letterSpacing:0.5,fontWeight:500}} >Logout</span>
                 </div>  
                  
        ) 
     }




        </div>

   
    

   
  )
}

export default SelectAccount