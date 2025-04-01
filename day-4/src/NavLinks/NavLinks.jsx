import './NavLinks.css';

export default function NavLinks({ isNav, children, topic }) {
    return (
        <div className={isNav ? 'navLinks' : 'footerLinks'}>
            <h3>{topic}</h3>
            {children}
        </div>
    );
}
