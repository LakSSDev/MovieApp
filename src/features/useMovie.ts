// src/features/movies/useMovies.ts
import { useEffect, useState } from 'react';
import { Movie } from '../core/Movie';
import { api_omdb } from '../infrastructure/tmbd/api_omdb';

export const useMovies = (nameMovie: any) => {


  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await api_omdb(nameMovie);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      } 
    };

    loadMovies();
  }, []);

  return { movie, loading };
};
