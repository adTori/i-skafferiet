import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        iSkafferiet
      </Link>

      <nav className="site-nav">
        <Link to="/">Skafferiet</Link>
        <Link to="/add">Lägg till vara</Link>
      </nav>
    </header>
  );
}

export default Header;