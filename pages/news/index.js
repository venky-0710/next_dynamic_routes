import React from "react";

const NewsList = ({ articles }) => {
   console.log(articles);
   return (
      <div>
         {articles.map((article) => (
            <div key={article.id}>
               {" "}
               <p>{article.title}</p>
               <p>{article.description}</p>
            </div>
         ))}
      </div>
   );
};

export default NewsList;

export async function getServerSideProps() {
   const response = await fetch("http://localhost:3004/news");
   const data = await response.json();

   return {
      props: {
         articles: data,
      },
   };
}
