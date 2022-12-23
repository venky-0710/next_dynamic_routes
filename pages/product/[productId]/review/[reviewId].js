import { useRouter } from "next/router";
import React from "react";

const ReviewPage = () => {
   const { reviewId } = useRouter().query;
   return <div>ReviewPage with {reviewId}</div>;
};

export default ReviewPage;
