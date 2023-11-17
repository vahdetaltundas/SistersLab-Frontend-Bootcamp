import axios from "axios";
const baseURL='https://api.themoviedb.org/3';
const api_key='?api_key=7b1c8ceb8eda6bc2b1e13c8d335746ec';
const axiosInstance=axios.create({
    baseURL,
});

export const fetchMovies=async ()=>{
    const response= await axiosInstance.get(`/discover/movie${api_key}`);
    return response.data;
}

export const fetchMovie=async (id)=>{
    const response= await axiosInstance.get(`movie/${id}${api_key}`);
    return response.data;
}