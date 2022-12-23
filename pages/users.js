import axios from "axios";
const Users = ({ users }) => {
   console.log(users);
   return (
      <div>
         {users.map((item) => (
            <div key={item.id}>
               <p>{item.name}</p> <p>{item.email}</p>
            </div>
         ))}
      </div>
   );
};

export default Users;

export async function getStaticProps() {
   const { data } = await axios.get("https://jsonplaceholder.typicode.com/users", {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
   });
   console.log("hi", data);
   return {
      props: {
         users: data,
      },
   };
}
