import useSWR from "swr";
import React from "react";

const DashBoardSwr = () => {
   const fetcher = async () => {
      const response = await fetch("http://localhost:3004/dashboard");
      const data = await response.json();
      return data;
   };
   const { data, error } = useSWR("dashboard", fetcher);
   if (error) return <p>An Error Occured</p>;
   if (!data) return <p>Loading...</p>;
   return (
      <div>
         {Object.keys(data).map((key) => (
            <div>
               {key}: {data?.[key]}
            </div>
         ))}
         {}
      </div>
   );
};

export default DashBoardSwr;
