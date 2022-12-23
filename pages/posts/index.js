import React from "react";
import axios from "axios";
import Link from "next/link";
const PostList = ({ posts }) => {
   console.log(posts);
   return (
      <div>
        <h1>List of Posts</h1>
         {posts.map((post) => (
            <div key={post.id}>
               <Link href = {`/posts/${post.id}`}><h2>{post.title}</h2></Link>
               <p>{post.body}</p>
               <hr/>
            </div>
         ))}
      </div>
   );
};

export default PostList;

export const getStaticProps = async () => {
   const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
   });
   console.log(response)
   return {
      props: {
         posts: response.data.slice(0,3),
      },
   };
};
