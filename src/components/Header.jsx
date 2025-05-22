import './Header.css';
import logoImg from '../assets/chef-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logoImg} alt="Chef logo" />
            <p>Chef Cloude</p>
        </header>
    )
}