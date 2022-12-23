import { useRouter } from "next/router";
import React from "react";

const ProductIdPage = () => {
   const { productId } = useRouter().query;
   return <div>ProductIdPage and my Id is {productId} </div>;
};

export default ProductIdPage;
