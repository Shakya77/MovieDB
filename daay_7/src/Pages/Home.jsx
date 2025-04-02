import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigation = useNavigate();

    const handleNavigation = () => {
        navigation('/movies')
    }

    return (
        <div>
            {/* <Link to='/movies'>Popular Movies</Link> */}
            <button onClick={handleNavigation}>Popular Movies</button>
        </div>
    )
}
