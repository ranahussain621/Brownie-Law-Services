import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { FooterWrapper, LinkWrapper, LogoWrapper } from "./footer.style";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import wifiLogo from "../../assets/images/Wifi.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <Box>
      <Subscribe />
      <FooterWrapper>
        <Box>
          <LogoWrapper>
            <img src={logo} alt="" />
          </LogoWrapper>

          <LinkWrapper>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/">
              Features
            </Link>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/">
              About
            </Link>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/">
              Testimonials
            </Link>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/">
              Contact
            </Link>
            <Link className="lg:text-[18px] text-sm font-medium inline" to="/">
              Download
            </Link>
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
              <Link to="/">
                <FaFacebook />
              </Link>
            </IconButton>
            <IconButton variant="plain">
              <Link to="/">
                <FaTwitter />
              </Link>
            </IconButton>
            <IconButton variant="plain">
              <Link to="/">
                <FaYoutube />
              </Link>
            </IconButton>

            <IconButton variant="plain">
              <Link to="/">
                <FaLinkedin />
              </Link>
            </IconButton>
            <IconButton variant="plain">
              <Link to="/">
                <MdAlternateEmail />
              </Link>
            </IconButton>
            <IconButton variant="plain">
              <Link to="/">
                <img src={wifiLogo} alt="" />
              </Link>
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
            <Typography sx={{ fontSize: "13px", color: "#718096" }}>
              © Copyright 2023 Brownie Link Services. Powered with{" "}
              <FavoriteIcon sx={{ color: "red" }} /> by{" "}
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
              Cognuitive Solutions
            </Typography>
          </Box>
        </Box>
      </FooterWrapper>
    </Box>
  );
};

export default Footer;
