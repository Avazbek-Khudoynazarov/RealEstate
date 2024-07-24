import React from "react";
import { Button, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const home1 = [
  "/home1/2.jpg",
  "/home1/1.jpg",
  "/home1/3.jpg",
  "/home1/4.jpg",
  "/home1/5.jpg",
  "/home1/6.jpg",
  "/home1/8.jpg",
  "/home1/9.jpg",
  "/home1/10.jpg",
];

const home2 = [
  "/home2/1.jpg",
  "/home2/2.jpg",
  "/home2/3.jpg",
  "/home2/4.jpg",
  "/home2/5.jpg",
  "/home2/6.jpg",
  "/home2/7.jpg",
  "/home2/8.jpg",
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 5 }}>{children}</Box>}
    </div>
  );
}

export default function AllProducts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="img-config">
      <div className="mainImg">
        <CustomTabPanel value={value} index={0}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {home1.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {home2.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>!</SwiperSlide>
          </Swiper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>1</SwiperSlide>
          </Swiper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>1 </SwiperSlide>
          </Swiper>
        </CustomTabPanel>
      </div>
      <Box className="productBtn">
        <div className="productWrap">
          <Button
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/home2/3.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
            onClick={() => handleChange(1)}
            className="tabButton"
          ></Button>
          <Button
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/home1/2.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
            className="tabButton"
            onClick={() => handleChange(0)}
          ></Button>

          <Button
            onClick={() => handleChange(2)}
            className="tabButton"
          ></Button>
          <Button
            onClick={() => handleChange(3)}
            className="tabButton"
          ></Button>
        </div>
        <div className="productWrap">
          <Button
            onClick={() => handleChange(4)}
            className="tabButton"
          ></Button>
        </div>
      </Box>
    </div>
  );
}
