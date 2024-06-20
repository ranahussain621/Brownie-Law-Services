import { Box, Button, Typography, styled } from "@mui/material";


export const FormWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0px",
    flexDirection: "row",
    gap: "110px",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
        gap: "50px"
    }
}))


export const FormTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "700",
    color: "#171112",
    fontFamily:'poppins',


}))

export const FormNavigateText = styled(Typography)(({ theme }) => ({
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.down("md")]: {
        fontSize: "14px",
    }
}))

export const FormButton = styled(Button)(({ theme }) => ({
    background: "#2E2829",
    padding: "15px 25px",
    textAlign: "center",
    color: "#fff",
    width: "100%",
    borderRadius: "15px",
    textTransform: "capitalize",
    "&:hover": {
        background: "#231f20"
    }
}))


