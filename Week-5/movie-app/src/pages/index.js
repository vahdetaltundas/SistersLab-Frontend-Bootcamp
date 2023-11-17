import { useEffect, useState } from "react";
import { fetchMovies } from "./api";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import CardSkeleton from "@/components/CardSkeleton";

export default function Home() {
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true);
    try {
      const movies = await fetchMovies();
      setMovies(movies.results);
    } catch (err) {
      console.error("Ürünler yüklenirken hata oluştu");
    }
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  const renderSkeleton=()=>{
    return Array.from({length: movies.length},(_,index)=>(
          <CardSkeleton key={index}/>
    ))
  };


  return (
    <div>
      <div className="container mx-auto">
          {loading ? (
        // Data yüklenirken skeleton componentini göster
        <div className="grid grid-cols-4 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-4 grid-4">
          {movies.map((movie) => (
              <Card
                movie={movie}
                key={movie.id}
                detailAction={() => router.push(`${movie.id}`)}
                />))}
        </div>
      )}
        
          </div>
      </div>
  );
}
