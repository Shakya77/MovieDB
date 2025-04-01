import { Icon } from '@iconify/react';
import './SocialMedia.css';

export default function SocialMedi() {
    return (
        <div className="container">
            <h3>Connect with us</h3>
            <div className="social-icons">
                <a href="#" className="icon">
                    <Icon icon="akar-icons:facebook-fill" />
                </a>
                <a href="#" className="icon">
                    <Icon icon="akar-icons:twitter-fill" />
                </a>
                <a href="#" className="icon">
                    <Icon icon="akar-icons:instagram-fill" />
                </a>
                <a href="#" className="icon">
                    <Icon icon="akar-icons:linkedin-fill" />
                </a>
                <a href="#" className="icon">
                    <Icon icon="akar-icons:discord-fill" />
                </a>
            </div>
        </div>
    );
}
