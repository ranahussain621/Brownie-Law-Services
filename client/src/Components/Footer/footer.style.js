import { Box, Container, styled } from "@mui/material";

export const FooterWrapper = styled(Box)(({ theme }) => ({
    background: "#F7FAFC",
    padding: "50px 0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    textAlign: "center",
}))

export const LogoWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "75px",
    [theme.breakpoints.down("md")]: {
        marginTop: "40px"
    }
}))

export const LinkWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "32px",
    marginTop: "25px",
    [theme.breakpoints.down("md")]: {
        gap: "20px",
        justifyContent: "center",
        marginTop: "15px",
    }
}))

export const SubsCribeWrapper = styled(Container)(({ theme }) => ({
    background: "#E6F6FE",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "-40px",
    position: "relative",
    flexDirection: "row",
    zIndex: "999",
    padding: "45px 55px !important",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        padding: "30px !important"
    }
}))