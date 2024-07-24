import React from "react";

import NavbarHome from "../../components/header";
import Footer from "../../components/footer";
import Homes from "./homes";
import BestRooms from "./bestRooms";

const HomePage = () => {
  return (
    <div>
      <NavbarHome />
      <Homes />
      <BestRooms />
      <Footer />
    </div>
  );
};

export default HomePage;
