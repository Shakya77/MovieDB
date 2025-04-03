import "../CSS/MovieList.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const url =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDM5ODVhNjdhMDY1Y2VkNTVjZDE4MWU2NzI3OWE0ZSIsIm5iZiI6MTc0MzQyOTMyNS40Nywic3ViIjoiNjdlYTllY2Q2MjIzNWM2NTgxYzZjMzgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.IhS1gQ-lQAVT5IyEOjklJH3qxfCA_U1joWRd82yOVEE",
        },
    };

    useEffect(() => {
        fetch(url, options)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch movies");
                }
                return res.json();
            })
            .then((data) => {
                setMovies(data.results);
            })
            .catch((err) => setError(err.message));
    }, []);

    const navigation = useNavigate();
    const handleNavigate = (id) => {
        navigation('/movies/' + id)
    }
    return (
        <div>
            <h1>Popular Movies</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul >
                {movies.map((movie) => (
                    <li key={movie.id} onClick={() => handleNavigate(movie.id)}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="movie-overlay">
                            <span className="movie-title">{movie.title}</span>
                            <span className="movie-rating">⭐ {movie.vote_average}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default MovieList
