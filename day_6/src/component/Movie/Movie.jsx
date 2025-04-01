import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Movie.css";

export default function Movie() {

    const [movieData, setMovieData] = useState("");
    const url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3&include_adult=true";

    const getMovies = async () => {
        const data = await fetch(url, {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDM5ODVhNjdhMDY1Y2VkNTVjZDE4MWU2NzI3OWE0ZSIsIm5iZiI6MTc0MzQyOTMyNS40Nywic3ViIjoiNjdlYTllY2Q2MjIzNWM2NTgxYzZjMzgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.IhS1gQ-lQAVT5IyEOjklJH3qxfCA_U1joWRd82yOVEE'
            }
        }).then(res => res.json()).then(item => item.results)
        setMovieData(data);
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(movieData);

    return (
        <div className="movie-list">
            {movieData.length > 0 ? (
                movieData.map((movie) => <Card key={movie.id} movie={movie} />)
            ) : (
                <p>Loading movies...</p>
            )}
        </div>
    );
}
