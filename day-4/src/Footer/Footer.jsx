import Content from '../Components/PargraphContent/Content';
import NavLinks from '../NavLinks/NavLinks';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Content />
                <section className='links'>
                    <NavLinks isNav={false} topic={'Links'}>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </NavLinks>
                </section>
                <section className='links'>
                    <NavLinks isNav={false} topic={'Links'}>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </NavLinks>
                </section>
                <SocialMedia />
            </div>
            <div className="copyright">
                <p>
                    @{new Date().getFullYear()} Movie Hub. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
