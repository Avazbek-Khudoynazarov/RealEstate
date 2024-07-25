import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination as SwiperPagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const tabButtons = [
  { img: "/home1/2.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home2/3.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home3/2.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home4/2.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home5/2.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home6/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home7/5.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home8/2.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home9/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home10/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home11/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home12/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home13/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home14/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home15/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home16/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home17/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home18/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home19/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
  { img: "/home20/1.jpg", text1: "홍대 신축 7층 2룸", text2: "보2000/월50" },
];

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
const home3 = [
  "/home3/2.jpg",
  "/home3/3.jpg",
  "/home3/4.jpg",
  "/home3/5.jpg",
  "/home3/6.jpg",
  "/home3/7.jpg",
  "/home3/9.jpg",
  "/home3/10.jpg",
  "/home3/11.jpg",
  "/home3/12.jpg",
  "/home3/1.jpg",
];
const home4 = [
  "/home4/2.jpg",
  "/home4/3.jpg",
  "/home4/4.jpg",
  "/home4/5.jpg",
  "/home4/6.jpg",
  "/home4/7.jpg",
  "/home4/9.jpg",
  "/home4/10.jpg",
  "/home4/11.jpg",
  "/home4/12.jpg",
  "/home4/1.jpg",
  "/home4/13.jpg",
  "/home4/14.jpg",
];
const home5 = [
  "/home5/1.jpg",
  "/home5/2.jpg",
  "/home5/3.jpg",
  "/home5/4.jpg",
  "/home5/5.jpg",
  "/home5/6.jpg",
  "/home5/7.jpg",
  "/home5/9.jpg",
  "/home5/10.jpg",
  "/home5/11.jpg",
  "/home5/12.jpg",
];
const home6 = [
  "/home6/1.jpg",
  "/home6/2.jpg",
  "/home6/3.jpg",
  "/home6/4.jpg",
  "/home6/5.jpg",
  "/home6/6.jpg",
];
const home7 = [
  "/home7/1.jpg",
  "/home7/2.jpg",
  "/home7/3.jpg",
  "/home7/4.jpg",
  "/home7/5.jpg",
  "/home7/6.jpg",
  "/home7/7.jpg",
  "/home7/8.jpg",
  "/home7/9.jpg",
];
const home8 = [
  "/home8/1.jpg",
  "/home8/2.jpg",
  "/home8/3.jpg",
  "/home8/4.jpg",
  "/home8/5.jpg",
  "/home8/6.jpg",
  "/home8/7.jpg",
  "/home8/9.jpg",
  "/home8/10.jpg",
  "/home8/11.jpg",
  "/home8/12.jpg",
];
const home9 = [
  "/home9/1.jpg",
  "/home9/2.jpg",
  "/home9/3.jpg",
  "/home9/4.jpg",
  "/home9/5.jpg",
  "/home9/6.jpg",
  "/home9/7.jpg",
  "/home9/9.jpg",
  "/home9/10.jpg",
  "/home9/11.jpg",
  "/home9/12.jpg",
];
const home10 = [
  "/home10/1.jpg",
  "/home10/2.jpg",
  "/home10/3.jpg",
  "/home10/4.jpg",
  "/home10/5.jpg",
  "/home10/6.jpg",
  "/home10/7.jpg",
  "/home10/9.jpg",
  "/home10/10.jpg",
  "/home10/11.jpg",
  "/home10/12.jpg",
  "/home10/13.jpg",
  "/home10/14.jpg",
  "/home10/15.jpg",
  "/home10/16.jpg",
  "/home10/17.jpg",
  "/home10/17.jpg",
  "/home10/18.jpg",
  "/home10/19.jpg",
  "/home10/20.jpg",
];
const home11 = [
  "/home11/1.jpg",
  "/home11/2.jpg",
  "/home11/3.jpg",
  "/home11/4.jpg",
  "/home11/5.jpg",
  "/home11/6.jpg",
  "/home11/7.jpg",
  "/home11/9.jpg",
  "/home11/10.jpg",
  "/home11/11.jpg",
  "/home11/12.jpg",
  "/home11/13.jpg",
  "/home11/14.jpg",
];
const home12 = [
  "/home12/1.jpg",
  "/home12/2.jpg",
  "/home12/3.jpg",
  "/home12/4.jpg",
  "/home12/5.jpg",
  "/home12/6.jpg",
  "/home12/7.jpg",
  "/home12/9.jpg",
  "/home12/10.jpg",
  "/home12/11.jpg",
  "/home12/12.jpg",
  "/home12/13.jpg",
  "/home12/14.jpg",
];
const home13 = [
  "/home13/1.jpg",
  "/home13/2.jpg",
  "/home13/3.jpg",
  "/home13/4.jpg",
  "/home13/5.jpg",
  "/home13/6.jpg",
  "/home13/7.jpg",
  "/home13/9.jpg",
  "/home13/10.jpg",
  "/home13/11.jpg",
];
const home14 = [
  "/home14/1.jpg",
  "/home14/2.jpg",
  "/home14/3.jpg",
  "/home14/4.jpg",
  "/home14/5.jpg",
  "/home14/6.jpg",
  "/home14/7.jpg",
  "/home14/9.jpg",
  "/home14/10.jpg",
];
const home15 = [
  "/home15/1.jpg",
  "/home15/2.jpg",
  "/home15/3.jpg",
  "/home15/4.jpg",
  "/home15/5.jpg",
  "/home15/6.jpg",
  "/home15/7.jpg",
  "/home15/9.jpg",
  "/home15/10.jpg",
  "/home15/11.jpg",
];
const home16 = [
  "/home16/1.jpg",
  "/home16/2.jpg",
  "/home16/3.jpg",
  "/home16/4.jpg",
  "/home16/5.jpg",
  "/home16/6.jpg",
  "/home16/7.jpg",
  "/home16/9.jpg",
  "/home16/10.jpg",
];
const home17 = [
  "/home17/1.jpg",
  "/home17/2.jpg",
  "/home17/3.jpg",
  "/home17/4.jpg",
  "/home17/5.jpg",
  "/home17/6.jpg",
  "/home17/7.jpg",
];
const home18 = [
  "/home18/1.jpg",
  "/home18/2.jpg",
  "/home18/3.jpg",
  "/home18/4.jpg",
  "/home18/5.jpg",
  "/home18/6.jpg",
  "/home18/7.jpg",
  "/home18/9.jpg",
  "/home18/10.jpg",
];
const home19 = [
  "/home19/1.jpg",
  "/home19/2.jpg",
  "/home19/3.jpg",
  "/home19/4.jpg",
  "/home19/5.jpg",
  "/home19/6.jpg",
  "/home19/7.jpg",
  "/home19/9.jpg",
];
const home20 = [
  "/home20/1.jpg",
  "/home20/2.jpg",
  "/home20/3.jpg",
  "/home20/4.jpg",
  "/home20/5.jpg",
  "/home20/6.jpg",
  "/home20/7.jpg",
  "/home20/9.jpg",
  "/home20/10.jpg",
];
const imageSets = [
  home1,
  home2,
  home3,
  home4,
  home5,
  home6,
  home7,
  home8,
  home9,
  home10,
  home11,
  home12,
  home13,
  home14,
  home15,
  home16,
  home17,
  home18,
  home19,
  home20,
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel({ children, value, index, ...other }: TabPanelProps) {
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
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const handleChange = (index: number) => {
    setValue(index);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const displayedButtons = tabButtons.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="img-config">
      <div className="mainImg">
        {imageSets.map((images, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, SwiperPagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {images.map((image, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={image}
                    alt={`Slide ${i + 1}`}
                    style={{ width: "100%", height: "auto" }}
                    draggable={"false"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </CustomTabPanel>
        ))}
      </div>
      <Box className="productBtn">
        <div className="productWrap">
          {displayedButtons.map((button, index) => (
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${button.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                width: "270px",
                height: "320px",
              }}
              onClick={() => handleChange((page - 1) * itemsPerPage + index)}
              className="tabButton"
              key={index}
            >
              <div>
                <LocationOnIcon
                  style={{ color: "wheat", width: "30px", height: "30px" }}
                />
                <span>{button.text1}</span>
              </div>
              <div>
                <span>{button.text2}</span>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          count={Math.ceil(tabButtons.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          style={{ marginTop: "20px" }}
        />
      </Box>
    </div>
  );
}
