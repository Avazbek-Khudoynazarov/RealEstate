import React from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/homes.css";
import "../css/bestRooms.css";
import "../css/allProducts.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Products from "./screens/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allProducts" element={<Products />} />
        {/* <Route path="/other-page" element={<Others />} /> */}
        //TODO
      </Routes>
    </Router>
  );
}

export default App;
