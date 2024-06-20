import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import logo1 from "../../assets/images/Brownie.png";

import { Link } from "react-router-dom";
import { useActiveItem } from "../../ActiveItemContext";


const Header = (props) => {
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
 



  let login = JSON.parse(localStorage?.getItem('user')) 
  const getData = login?.Role?.title
 

const drawerWidth = 240;
let navItems = [
  { name: "Laws", link: "laws" },
  { name: "Lawyers", link: "lawyers" },
  { name: "Firms", link: "firms" },
  { name: "About Us", link: "aboutus" },
  // { name: "Pricing", link: "subscriptions-plans" },

];

if (!login) {
  navItems.push({ name: "Register", link: "auth/register" });
} else {
  navItems.push({
    name: `${getData ? 'Dashboard' : ''}`,
    link: `${
      login && getData === 'client'
        ? 'dashboard/Client'
        : login && getData === 'lawyer'
        ? 'dashboard/Lawyer'
        : login && getData === 'firm'
        ? 'dashboard/Firm'
        : login && getData === 'superAdmin'
        ? 'dashboard/Admin'
        : ''
    }`,
  });
}

const { activeItem, setActive } = useActiveItem();


const handleItemClick = (item) => {
  setActive(item);
};


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2, width: "60px", height: "60px", marginLeft: "15px" }}>
        <Link to="/">
          <img src={logo1} alt="" style={{ width: '10px !important', borderRadius: "30px" }} />
        </Link>
      </Typography>

      <Divider />
      <List>
        {navItems?.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <Link to={`/${item.link}`}>{item.name}</Link>
            </ListItemButton>
          </ListItem>
        ))}
       
       
      </List>
      
    
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        height: {
          xs: "55px",
          lg: "63px",
        },
      }}
    >
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          background:
            location.pathname === "/" ? "#E5E6ED" : "transparent",
          color: location.pathname === "/" ? "#fff" : "#2E2829",
          boxShadow: "none",
          position: "absolute",
          top: 0,
        }}
      >
        <Toolbar className="d-flex justify-content-between align-items-center">
        
           <div className="">
           <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon className="fs-1"/>
          </IconButton>
        </div>
     <div className="div call-button d-none mt-2">
              <Link to='contact'> 
         <Button
           className=""
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            textTransform: "capitalize",
            borderRadius: "15px",
            "&:hover": {
              color: "white",
              backgroundColor: "#2E2829",
            },
            float: 'left',
            marginLeft: "10px",
            
          }}
        >
          call us now
        </Button></Link> 
          </div> 
      
       
       
       
         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/"   onClick={() => handleItemClick(null)}>
              <img src={logo1} alt="" style={{ width: '50px !important', borderRadius: "30px", height: "50px", margin: "20px" }} />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block", flexGrow: "1" } }} className="text-end ">
          
            {navItems?.map((item, i) => (
              <Button
                key={i}
                  className="main-nav-items px-md-3 me-md-4"
                  onClick={() => handleItemClick(item.name)}
                sx={{
                  fontSize: "18px",
                  color: "#000",
                  textTransform: "capitalize",
                  fontFamily:'poppins',
                  fontWeight: activeItem === item.name ? "900" : "400",
                  
                }}
              >
                <Link to={`${item.link}`} style={{color:'#000'}}>{item.name}</Link>
              </Button>
              
            ))}
            <Link to='/contact'>
             <Button
              onClick={() => handleItemClick(null)}
          variant="contained"
          sx={{
            fontFamily:'poppins',
            background: "#2E2829",
            borderRadius: "15px",
            padding: "10px 35px",
           
            "&:hover": {
              background: "#2E2829",
            },
          }}
        >
          Call Us Now
        </Button>
            </Link>
             
  
          </Box>
        </Toolbar>
        
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

            
      
      
      </Box>
      
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;