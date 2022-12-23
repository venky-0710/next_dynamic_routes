import Router from "next/router";
import React, { useState } from "react";

const EventList = ({ eventList }) => {
   const [events, setEvents] = useState(eventList);
   const fetchSportEvents = async () =>{
    const response  = await(await fetch(`http://localhost:3004/events?category=sports`)).json()
    setEvents(response);
    Router.push('/events?category=sports',undefined,{shallow:true})
   }
   console.log(eventList);
   return (
      <div>
        <button onClick={fetchSportEvents}>Sports Events</button>
         <h1>List of Events</h1>
         {events.map((event) => (
            <div key={event.id}>
               <h2>
                  {event.id} {event.title} {event.date} | {event.category}
               </h2>
            </div>
         ))}
      </div>
   );
};

export async function getServerSideProps(context) {
    const {query} = context;
    const {category} = query;
    const queryString = category?'category=sports':''
   const data = await (await fetch(`http://localhost:3004/events?${queryString}`)).json();
   return {
      props: {
         eventList: data,
      },    
   };
}

export default EventList;
