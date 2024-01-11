import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logistics UK Logo" className="header-logo" />
        </header>
    );
}

export default Header;
