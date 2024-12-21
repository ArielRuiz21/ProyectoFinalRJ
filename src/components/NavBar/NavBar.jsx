import {Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

export default function NavBar({title}) {
    return (
      <nav className="navbar-alt">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <ul className="navbar-menu">
          <li className="nav-item">
            <Link className="nav-link" to="/category/celular">
              Celulares
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/tablet">
              Tablets
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/computer">
              Computadoras
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
        <div className="navbar-cart">
          <CartWidget cartCount={5} />
        </div>
      </div>
    </nav>
  );
}
