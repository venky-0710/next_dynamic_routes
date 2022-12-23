import Link from "next/link";
import React from "react";

const ProductPage = () => {
   return (
      <div>
         Product Page
         <Link href="/Product/1">
            <h1>Product Page 1</h1>
         </Link>
         <Link href="/Product/2">
            <h1>Product Page 2</h1>
         </Link>
         <Link href="/Product/3">
            <h1>Product Page 3</h1>
         </Link>
      </div>
   );
};

export default ProductPage;
