import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MovieList from './Pages/MovieList';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MovieList />} />
            </Routes>
        </Router>
    );
}

export default Routing;