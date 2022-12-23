import React from "react";

const NewsListByCategory = ({ newsByCategory, category }) => {
   console.log(newsByCategory);
   return (
      <div>
         <h1>Showing news for category {category}</h1>
         {newsByCategory.map((news) => (
            <div key={news.id}>
               <h3>{news.title} </h3>
               <p>{news.description}</p>
            </div>
         ))}
      </div>
   );
};

export async function getServerSideProps(context) {
   const { params, req, res } = context;
   const category = params.category;
   console.log(req.headers.cookie);
   res.setHeader("Set-Cookie", ["name=Venkat", "last_name=Swarup"]);
   const response = await fetch(`http://localhost:3004/news?category=${category}`);
   const data = await response.json();
   return {
      props: {
         newsByCategory: data,
         category,
      },
   };
}
export default NewsListByCategory;
