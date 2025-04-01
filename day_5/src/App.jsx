import './App.css';
import Card from './components/Card/Card';
import movies from './movieObject';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState('title');

  const filterMovies = (movies, searchBy) => {
    if (!searchBy || search.trim() === '') {
      return movies;
    }
    return movies.filter((movie) => {
      if (searchBy === 'title') {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      }
      if (searchBy === 'year') {
        return movie.year.toString() >= search;
      }
      if (searchBy === 'rating') {
        return movie.rating >= search;
      }
      if (searchBy === 'genre') {
        return movie.genre.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });
  };

  return (
    <>
      <div className="container">
        <input
          className="search-bar"
          type="text"
          placeholder={`Enter the ${searchBy}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter-bar"
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="">Select a filter</option>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
          <option value="genre">Genre</option>
        </select>
      </div>

      <div className="movie-list">
        {filterMovies(movies, searchBy).map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
