import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import iconCar from "../../assets/icons/cart.png";
import { useAuth } from "../../context/AuthContext";
import imgUser from "../../assets/perfil/blank-profile-picture.webp";
import ProductContext from "../../context/ProductContext";

function Navbar() {
  const { car = [] } = useContext(ProductContext);
  const { user, logout } = useAuth();
  return (
    <nav className="navbar bg-base-300 shadow-sm md:justify-between">
      {/* Mobile menu */}
      <div className="flex justify-between">
        <div className="dropdown md:hidden">
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
              <Link to="/">
                <i className="bxr  bx-home"></i> HOME
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="bxr  bx-luggage"></i> INGRESAR
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#cards">
                <i className="bxr  bx-groceries"></i> PRODUCTS
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Center logo */}
      <div className="navbar-center">
        <Link to="/" className="text-4xl font-bold">
          4You
        </Link>
      </div>
      {/* Right side menu */}
      <div className=" gap-x-5 hidden md:flex ">
        {user ? (
          <>
            <div className="flex gap-3 justify-center items-center">
              <Link
                to="/perfil"
                className="btn btn-circle w-12 h-12 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url(${imgUser})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                title="Ir a mi perfil"
              >
                <span className="sr-only">Mi perfil</span>
              </Link>
              <button className="btn btn-ghost " onClick={logout}>
                <i className="bxr  bx-arrow-out-left-square-half ">LOGOUT</i>
              </button>
            </div>
          </>
        ) : (
          <Link
            to="/register"
            className="btn hover:scale-105 transition ease-in-out duration-300"
          >
            REGISTER
          </Link>
        )}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Link to="/carshop" className="items-center justify-center flex">
              <img src={iconCar} alt="Carrito de compras" className="w-5 h-5" />
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
