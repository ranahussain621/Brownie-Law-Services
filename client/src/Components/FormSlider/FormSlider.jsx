import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Box, Typography } from "@mui/material";

const FormSlider = ({ sliderData }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliderData.map((data, i) => (
        <SwiperSlide key={i}>
          <Box sx={{ position: "relative" }}>
            <img className="w-100" src={data.img} alt="" style={{maxHeight:'80vh'}} />
            <Box
              sx={{
                position: "absolute",
                bottom: "80px",
                color: "#fff",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "23px", fontWeight: "600" }}>
                {data.title}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FormSlider;
