import React from "react";
import ProductBoard from "./productBoard";
import ProductHead from "../ProductPage/productHead";
import Footer from "../../components/footer";

export default function BoardPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <ProductHead />
      <ProductBoard />
      <Footer />
    </div>
  );
}
