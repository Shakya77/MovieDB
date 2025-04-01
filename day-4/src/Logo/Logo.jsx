import './Logo.css'
import logo from '../assets/logo2.png';

export default function Logo({ src, logoName }) {
    return (
        <>
            <div className="logoName">
                <img src={logo} alt="Logo" />
                <div>{logoName}</div>
            </div>
        </>
    )
}
