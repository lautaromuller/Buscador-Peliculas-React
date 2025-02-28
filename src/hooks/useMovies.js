import { useState, useCallback, useRef, useMemo } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies ({ search }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search);

    const getMovies = useCallback(async ({ search }) => {
        if(search === previousSearch.current) return;

        try{
            setLoading(true);
            setError(null);
            previousSearch.current = search;
            const newMovies = await searchMovies({ search });
            setMovies(newMovies);
        } catch(error){
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }, []);

    const sortedMovies = useMemo(() => {
        return [...movies].sort((a, b) => a.title.localeCompare(b.title))
    }, [movies]);

    return { movies: sortedMovies, loading, getMovies };
}