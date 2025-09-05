import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";
function Navbar() {
  const { car = [] } = useContext(ProductContext);
  const { user, logout } = useAuth();
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="#">PORTFOLIO</Link>
            </li>
            <li>
              <HashLink smooth to="/#cards">
                PRODUCTS
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="text-2xl">
          4You
        </Link>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn btn-ghost " onClick={logout}>
            {user.email}
          </button>
        ) : (
          <button className="btn btn-ghost ">
            <Link to="/register">registrarse</Link>
          </button>
        )}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Link to="/carshop">
              <i className="bxr  bx-cart-minus text-2xl"></i>
              <span className="badge badge-xs badge-primary indicator-item">
                {car.length}
              </span>
            </Link>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
