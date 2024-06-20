import { Box, Typography } from "@mui/material";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ConnectSection from "./ConnectSection";
import OurMission from "./OurMission";
import TeamMember from "./TeamMember";
import MainNews from "./MainNews";

const Home = () => {
  return (
    <>  
    <Box>
      <HeroSection />
      <AboutSection />
      <ConnectSection />
      <OurMission />
      <TeamMember />
      <div className="div">
       
      <Typography
      className="mt-5"
        variant="h1"
        sx={{
          fontSize: {
            xs: "30px",
            lg: "50px",
          },
          textAlign: "center",
          fontWeight: "600",
          fontFamily:'poppins,sans-serif',
          mb: {
            xs: "30px",
            lg: "20px",
          }
        }}
      >
        News & Events
      </Typography>
         <MainNews />
      </div>
   
    </Box></>
  );
};

export default Home;
