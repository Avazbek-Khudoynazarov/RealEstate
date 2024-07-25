import React from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/homes.css";
import "../css/bestRooms.css";
import "../css/allProducts.css";
import "../css/board.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Products from "./screens/ProductPage";
import BoardPage from "./screens/BoardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allProducts" element={<Products />} />
        <Route path="/board" element={<BoardPage />} />
        //TODO
      </Routes>
    </Router>
  );
}

export default App;
