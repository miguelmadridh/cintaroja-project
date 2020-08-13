import React, { useState, useEffect } from "react";
import Product from "../Containers/Products/Product";
import Axios from "axios";

const ListarProductos = () => {
  const [products, setProducts] = useState([]);
  const URL = "https://devf-test-miguel.firebaseio.com//product.json";

  const getProducts = () => {
    Axios.get(URL)
      .then((res) =>{ setProducts(res.data)})
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products ? (
        Object.keys(products).map((id) => (
          <Product
            key={id}
            id ={id}
            catId={products[id].categoryID}
            catName={products[id].categoryName}
            titulo={products[id].titulo}
            precio={products[id].precio}
          />
        ))
      ) : (
        <h3>No hay productos</h3>
      )}
    </div>
  );
};

export default ListarProductos;
