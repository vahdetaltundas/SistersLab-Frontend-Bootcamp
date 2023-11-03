import axios from "axios";
import React, { useEffect, useState } from "react";


const PostBody = ({ id }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
    // FETCH
//   useEffect(() => {
//     fetch(`https://dummyjson.com/posts/${id}`)
//       .then((response) => {
//         if(!response.ok){
//           throw Error("Something went wrong")
//         }
//         return response.json()
//       })
//       .then((data) => {
//         setData(data.body);
//         setError(null)
//       })
//       .catch(err=>{
//         setError(err.message)
//       });
//   }, [id]);

    // AXİO
    useEffect(()=>{
        async function fetchData() {
            try {
              const response = await axios.get(`https://dummyjson.com/posts/${id}`);
              setData(response.data);
              setError(null)
              console.log(data);
            } catch (error) {
              setError("Something went wrong");
            }
          }
          fetchData();
    },[id])

  return (
    <div>
      {data.body}
      {error && <div>{error}</div>}
    </div>
  );
};

export default PostBody;