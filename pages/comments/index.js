import React, { useEffect, useState } from "react";

const CommentsPage = () => {
   const [comments, setComments] = useState("");
   const [comment, setComment] = useState("");
   const fetchData = async () => {
      const data = await (await fetch("/api/comments")).json();
      setComments(data);
   };
   useEffect(() => {
      fetchData();
   }, []);
   if (comments === "") {
      return <p>Loading ... </p>;
   }
   const handleSubmit = async (e) => {
      e.preventDefault();
      const postData = await (
         await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
               "Content-Type": "application/json",
            },
         })
      ).json();
      console.log(postData);
      setComments("");
      fetchData();
      setComment("");
   };

   const handleDelete = async (id) => {
      const response = await (await fetch(`/api/comments/${id}`, { method: "DELETE" })).json();
      if (response) fetchData();
   };
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button type="submit">Add Comment</button>
            {comments.map((comment) => (
               <div>  
                  {comment.id} | {comment.text}
                  <button type="button" onClick={() => handleDelete(comment.id)}>
                     Delete Comment
                  </button>
               </div>
            ))}
         </form>
      </div>
   );
};

export default CommentsPage;
