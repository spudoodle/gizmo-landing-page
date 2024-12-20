import React from "react";
import { ProductSectionDescription } from "./description";
import { ProductPage } from "./product-page";

export const ProductSection: React.FC = () => {
  return (
    <div className="py-8">
      <ProductSectionDescription />
      <ProductPage />
    </div>
  );
};
