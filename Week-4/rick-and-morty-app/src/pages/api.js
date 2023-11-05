import axios from "axios";

const baseURL='https://rickandmortyapi.com/api';

const axiosInstance=axios.create({
    baseURL,
});

// axiosInstance.get("/character")

export const fetchCharacters= async ()=>{
    const response= await axiosInstance.get('/character');
    return response.data.results;
}
