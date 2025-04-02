import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { movieId } = useParams();
    console.log(movieId)

    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDM5ODVhNjdhMDY1Y2VkNTVjZDE4MWU2NzI3OWE0ZSIsIm5iZiI6MTc0MzQyOTMyNS40Nywic3ViIjoiNjdlYTllY2Q2MjIzNWM2NTgxYzZjMzgxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.IhS1gQ-lQAVT5IyEOjklJH3qxfCA_U1joWRd82yOVEE'
        }
    };

    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
        console.log(data)
    }, [movieId]);

    return (
        <div>
            {loading ? <div>Loading...</div> : (
                data.original_title
            )}
        </div>
    )
}
