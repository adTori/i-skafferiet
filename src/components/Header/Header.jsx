import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Mitt skafferi</h1>

      <nav>
        <Link to="/">Hem</Link>
        <Link to="/add">Lägg till vara</Link>
      </nav>
    </header>
  );
}

export default Header;