import React from "react";
import { HashRouter, Link } from "react-router-dom";
import ListarProductos from "../../Components/ListarProductos";

const ManageProducts = () => {
  return (
    <div className="container">
      <div style={{ paddingTop: 1 + "rem", paddingBottom: 1 + "rem" }}>
        <h2>Admon. Productos</h2>
      </div>
      <HashRouter basename="/">
        <Link to="/addProduct">
          <button type="button" className="btn btn-primary">
            Agregar Producto
          </button>
        </Link>
      </HashRouter>
      <div style={{ paddingTop: 1 + "rem", paddingBottom: 1 + "rem" }}>
        <ListarProductos />
      </div>
    </div>
  );
};

export default ManageProducts;
