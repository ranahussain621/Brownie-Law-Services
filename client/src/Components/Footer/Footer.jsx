import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { FooterWrapper, LinkWrapper, LogoWrapper } from "./footer.style";
// import logo from "../../assets/images/Logo.png";
import logo from "../../assets/images/Brownie.png";

import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import wifiLogo from "../../assets/images/Wifi.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Subscribe from "./Subscribe";
import { useActiveItem } from "../../ActiveItemContext";

const Footer = () => {

    const {resetActive} = useActiveItem()

  const navigate = useNavigate()

  const handleClick = (item) => {
    window.scrollTo(0, 0); 
    if(item === 'FAQ') {
      navigate('/FAQ') 
      resetActive(null)
    }
     if(item === 'contact') {
      navigate('/contact')
      resetActive(null)
     }
  };

  const handleSocial = (item) => {
    if(item === 'fb') window.open('https://facebook.com')
     if(item === 'tw') window.open('https://twitter.com')
      if(item === 'yb') window.open('https://youtube.com')
     if(item === 'li') window.open('https://linkedin.com')
     if(item === 'go') window.open('https://google.com')


  };

  return (
    <Box>
      <Subscribe />
      <FooterWrapper>
        <Box>
          {/* <LogoWrapper>
            <img src={logo} alt="" />
          </LogoWrapper> */}
          <LogoWrapper>
  <img src={logo} alt="" style={{ width: '90px', height: 'auto' }} />
</LogoWrapper>


          {/* <LinkWrapper className="text-center">
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/">
              Features
            </Link>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/aboutus">
              About
            </Link>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/">
              Testimonials
            </Link>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/contact">
              Contact
            </Link>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/">
              Download
            </Link>
          </LinkWrapper> */}

          <LinkWrapper className="flex justify-center">
            <div className="lg:text-[18px] text-sm font-medium inline cursor-pointer" onClick={()=>handleClick('FAQ')}>
              FAQ's
            </div>

            <div className="lg:text-[18px] text-sm font-medium inline cursor-pointer" onClick={()=>handleClick('contact')}>
              Contact
            </div>
          </LinkWrapper>

          <Box
            sx={{
              mt: {
                xs: "20px",
                lg: "35px",
              },
            }}
          >
            <IconButton variant="plain">
              <div >
                <FaFacebook onClick={()=>handleSocial('fb')} />
              </div>
            </IconButton>
            <IconButton variant="plain">
              <div to="/">
                <FaTwitter onClick={()=>handleSocial('tw')}  />
              </div>
            </IconButton>
            <IconButton variant="plain">
              <div to="/">
                <FaYoutube  onClick={()=>handleSocial('yb')} />
              </div>
            </IconButton>

            <IconButton variant="plain">
              <div to="/">
                <FaLinkedin onClick={()=>handleSocial('li')} />
              </div>
            </IconButton>
            <IconButton variant="plain">
              <div to="/">
                <MdAlternateEmail onClick={()=>handleSocial('go')}  />
              </div>
            </IconButton>
            <IconButton variant="plain">
              <div to="/">
                <img src={wifiLogo} alt="" onClick={()=>handleSocial('go')}  />
              </div>
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              marginTop: {
                xs: "15px",
                lg: "30px",
              },
            }}
          >
            <Typography sx={{ fontSize: "13px", color: "#718096" }} className="mx-4">
              &copy; 2023 Brownie Link Services. All Rights Reserved. Unauthorized reproduction or distribution of this material is prohibited.
              {/* © Copyright 2023 Brownie Link Services. Powered with{" "} */}
              {/* <FavoriteIcon sx={{ color: "red" }} /> by{" "} */}
            </Typography>
            {/* <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
              Cognuitive Solutions
            </Typography> */}
          </Box>
        </Box>
      </FooterWrapper>
    </Box>
  );
};

export default Footer;
