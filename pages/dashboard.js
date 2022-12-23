import React, { useEffect, useState } from "react";

const DashBoard = () => {
   const [dashBoardData, setDashBoardData] = useState("");
   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch("http://localhost:3004/dashboard");
         const data = await response.json();
         setDashBoardData(data);
         console.log("Render Client Side", data);
      };
      fetchData();
   }, []);
   if (dashBoardData === "") {
      return <p>Loading....</p>;
   }
   return (
      <div>
         {Object.keys(dashBoardData).map((key) => (
            <div>{key}: {dashBoardData?.[key]}</div>
         ))}
         {}
      </div>
   );
};

export default DashBoard;
