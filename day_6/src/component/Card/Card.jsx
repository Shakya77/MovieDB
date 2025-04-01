import './Card.css';

export default function Card({ movie }) {
    const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
    const genres = movie.genres ? movie.genres.map(g => g.name).join(', ') : 'Unknown';

    return (
        <div className="movie-card">
            <img
                className="movie-poster"
                src={movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'https://via.placeholder.com/500x750?text=No+Image'}
                alt={movie.title || 'No Title'}
            />
            <div className="movie-info">
                <h2>{movie.title} ({releaseYear})</h2>
                <div className="content">
                    <p><strong>Description:</strong> {movie.overview || 'No description available.'}</p>
                </div>
                <p><strong>Rating:</strong> ⭐ {movie.vote_average ?? 'N/A'}</p>
            </div>
        </div>
    );
}
