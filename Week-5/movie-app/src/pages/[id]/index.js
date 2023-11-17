import Card from '@/components/Card';
import React, { useEffect, useState } from 'react'
import { fetchMovie } from '../api';
import { useRouter } from 'next/router';

const MovieDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState([]);
  
    useEffect(() => {
      if (id) {
        const getDetail = async () => {
          const movieDetail = await fetchMovie(id);
          setMovie(movieDetail);
        };
        getDetail();
      }
    }, [id]);
    return (
      <div className="flex items-center justify-center flex-col">
        <h1>{movie.title} Adlı Ürünün Detayı</h1>
        <Card movie={movie}  detailVisible={false} />
      </div>
    );
}

export default MovieDetails;
