import React, { useState, useEffect } from "react";
import Product from "../Containers/Products/Product";
import Axios from "axios";

const ListarProductos = () => {
  const [products, setProducts] = useState([]);
  const URL = "https://devf-test-miguel.firebaseio.com//product.json";

  const getProducts = () => {
    Axios.get(URL)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => alert(error));
  };

  const deleteProducts = (id) => {
    Axios.delete(`https://devf-test-miguel.firebaseio.com/product/${id}.json`)
      .then(() => {
        getProducts();
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark ">
          <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            Object.keys(products).map((id) => (
              <Product
                key={id}
                id={id}
                catId={products[id].categoryID}
                catName={products[id].categoryName}
                titulo={products[id].titulo}
                precio={products[id].precio}
                deleteProduct={deleteProducts}
              />
            ))
          ) : (
            <h3>No hay productos</h3>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarProductos;
