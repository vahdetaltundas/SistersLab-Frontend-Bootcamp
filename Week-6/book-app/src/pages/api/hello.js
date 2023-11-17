import axios from "axios"
const baseURL='http://localhost:3001';

const axiosInstance=axios.create({
    baseURL,
});


export const fetchBooks= async()=>{
  const response=await axiosInstance.get("/books");
  return response.data;
}

export const deleteBook= async(id)=>{
  const response = await axiosInstance.delete(`/books/${id}`);
  return response.data;
}