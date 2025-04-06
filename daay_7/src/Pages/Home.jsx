import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
    const navigation = useNavigate();

    const handleNavigation = () => {
        navigation('/movies')
    }

    return (
        <div className='container'>
            <button onClick={handleNavigation}>Popular Movies</button>
            <input type="text" placeholder="Search for a movie" />
        </div>
    )
}
