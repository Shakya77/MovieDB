import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

export default function MovieDetails() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { movieId } = useParams();
    console.log("Movie ID:", movieId);

    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDM5ODVhNjdhMDY1Y2VkNTVjZDE4MWU2NzI3OWE0ZSIsIm5iZiI6MTc0MzQyOTMyNS40Nywic3ViIjoiNjdlYTllY2Q2MjIzNWM2NTgxYzZjMzgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.IhS1gQ-lQAVT5IyEOjklJH3qxfCA_U1joWRd82yOVEE` // Use environment variable
        }
    };

    useEffect(() => {
        setLoading(true);
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch movie details");
                }
                return res.json();
            })
            .then(json => setData(json))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [movieId]);

    useEffect(() => {
        console.log("Fetched Data:", data);
    }, [data]);

    return (
        <div className="movie-details">
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">Error: {error}</div>}
            {data && (
                <div className='movie-l'>
                    <img
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.original_title}
                    />
                    <div className="">

                        <h1 className="movie-title">{data.original_title}</h1>
                        <p className="movie-overview">{data.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
