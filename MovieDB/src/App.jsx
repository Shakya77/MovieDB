import { useEffect, useState } from "react";
import Card from "./component/Card";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer YOUR_API_KEY',  // Replace YOUR_API_KEY with your actual API key
      },
    };

    // Fetch data from the API
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results); // Assuming the movie data is in 'results'
        setLoading(false); // Set loading state to false once data is fetched
      })
      .catch((err) => {
        setError(err); // Handle errors
        setLoading(false); // Set loading state to false in case of error
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <ul>
          {movies.map((movie) => (
            <Card
              title={movie.title}
              image={movie.image}
              description={movie.description}
              link={movie.link}
            />
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App
