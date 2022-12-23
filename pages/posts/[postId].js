import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const PostIdPage = ({ postData }) => {
   const { postId } = useRouter().query;
   if(useRouter().isFallback){
    return <p>Loading...</p>
   }
   console.log(postData);
   return (
      <div>
         Post {postId} <h1>{postData.title}</h1>
         <p>{postData.body}</p>
      </div>
   );
};

export default PostIdPage;

export async function getStaticPaths() {
   const paths = [1,2,3].map((item)=>({params: { postId: `${item}` } }))
   return {
      paths,
      fallback: true,
   };
}
export async function getStaticProps(context) {
   const { postId } = context.params;
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

   const data = await response.json();

   if(!data.id){
    return {
        notFound:true
    }
   }
   console.log(data);
   return {
      props: {
         postData: data,
      },
   };
}
