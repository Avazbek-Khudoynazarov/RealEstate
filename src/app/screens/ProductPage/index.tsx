import React from "react";
import AllProducts from "./allProducts";
import ProductHead from "./productHead";
import Footer from "../../components/footer";

export default function Products() {
  return (
    <div>
      <ProductHead />
      <AllProducts />
      <Footer />
    </div>
  );
}
