import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MovieList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
}

export default Routing;