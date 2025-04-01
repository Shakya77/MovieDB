import Profile from '../Components/Profile/Profile'
import Logo from '../Logo/Logo'
import NavLinks from '../NavLinks/NavLinks'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Logo logoName="Movie Hub" />
            <div className="links">
                <NavLinks isNav={true} >
                    <ul>
                        <a href="#">Movies</a>
                        <a href="#">Categories</a>
                        <a href="#">Watchlist</a>
                    </ul>
                </NavLinks>
                <Profile />
            </div>
        </nav>
    )
}
