import React from "react";
import { comments } from "../../data/comments";
const Comment = ({ comment }) => {
   return (
      <div>
         {comment.id} | {comment.text}
      </div>
   );
};

export const getStaticPaths = () => {
   return {
      paths: ["1", "2", "3"].map((item) => ({ params: { commentId: item } })),
      fallback: false,
   };
};

export const getStaticProps = (context) => {
   const { params } = context;
   const { commentId } = params;

   const comment = comments.find((comment) => comment.id === parseInt(commentId));

   return {
      props: {
         comment,
      },
   };
};
export default Comment;
