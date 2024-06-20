import { Box, Button, Typography, styled } from "@mui/material";
// import heroBg from "../../assets/images/Hero.png"
import bgImage from "../../assets/images/bg-image.png"

export const HeroSectionWrapper = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${bgImage})`,
    width: "100%",
    // height: "85vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius:"100px",
    borderBottomLeftRadius:"100px",
    [theme.breakpoints.down("md")]: {
        // height: "60vh",
    }
}))

export const HeroContentWrapper = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    placeItems: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
    }
}))

export const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: "56px",
    fontWeight: "600",
    
    lineHeight: "84px",
    [theme.breakpoints.down("md")]: {
        width: "auto",
        fontSize: "30px",
        lineHeight: "40px",
    }
}))

export const HeroButton = styled(Button)(({ theme }) => ({
    background: "#2E2829",
    color: "#fff",
    fontWeight: "500",
    borderRadius: "15px",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    gap: "40px",
    padding: "10px 10px",
    marginTop: "20px",
    "&:hover": {
        background: "#2E2829",
    },
    [theme.breakpoints.down("md")]: {
        marginTop: "20px",
        gap:"20px",
        borderRadius:"0px"

    }
}))

export const AboutSectionWrapper = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "36px",
    [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
    }
}))


export const OurMissionDetailsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}))

export const NumberAndDetailsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px"
}))

export const NumberText = styled(Typography)(({ theme }) => ({
    fontSize: "80px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
        fontSize: "50px"
    }
}))

export const NumberTitleText = styled(Typography)(({ theme }) => ({
    fontSize: "25px",
    fontWeight: "500",
    lineHeight: "36px",
    width: "170px",
    [theme.breakpoints.down("md")]: {
        fontSize: "18px",
        width: "90px",
        lineHeight: "22px",
    }
}))

export const TeamCardTextWrapper = styled(Box)(({ theme }) => ({
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px -5px #000",
    padding: "12px 50px",
    margin: "0px 40px",
    textAlign: "center",
    marginTop: "-4rem",
    position: "relative",
    zIndex: "999",
    width:"220px",
    display:"flex",
    justifyContent:"center",
    flexDirection:'column'
}))

export const MemberNameText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "600"
}))

export const MemberTitleText = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "500",
    color: "rgba(23, 17, 18, 0.6)"
}))

export const ArrowWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    gap: "20px",
    marginTop: "75px",
    [theme.breakpoints.down("md")]: {
        marginTop: "30px"
    }
}))