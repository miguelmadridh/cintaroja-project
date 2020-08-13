import React from "react";
import logo from "./../images/logo.png";
import { HashRouter, Link } from "react-router-dom";
const HeaderNav = () => {
  return (
    <header className="tm-header" id="tm-header">
      <div className="tm-header-wrapper">
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="tm-site-header">
          <div className="mb-3 mx-auto tm-site-logo">
            <img src={logo} style={{ width: 200 + "px" }} alt="error" />
          </div>
          <br />
          <h2 className="text-center">Analisis de Mercado</h2>
        </div>
        <nav className="tm-nav" id="tm-nav">
          <HashRouter basename="/">
            <ul>
              <li className="tm-nav-item active ">
                <Link to="/manageProduct" className="tm-nav-link">
                  <i className="fas fa-home"></i>
                  Admon de Productos
                </Link>
              </li>

              <li className="tm-nav-item active">
                <Link to="/analisis" className="tm-nav-link">
                  <i className="fas fa-home"></i>
                  Analisis de precio
                </Link>
              </li>
              <li className="tm-nav-item active">
                <a href="post.html" className="tm-nav-link">
                  <i className="fas fa-pen"></i>
                  Busqueda de Tendencias
                </a>
              </li>
            </ul>
          </HashRouter>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
