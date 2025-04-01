import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Movie Hub</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
