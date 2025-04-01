import './Card.css'

export default function Card({ movie }) {
    return (
        <div className="movie-card">
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h2>{movie.title} ({movie.year})</h2>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
            </div>
        </div>
    )
}
