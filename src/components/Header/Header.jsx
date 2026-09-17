import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        Skafferiet
      </Link>

      <nav className="site-nav">
        <Link to="/">Hem</Link>
        <Link to="/add">Lägg till vara</Link>
      </nav>
    </header>
  );
}

export default Header;