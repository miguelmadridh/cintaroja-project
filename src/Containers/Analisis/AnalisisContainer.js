import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

const AnalisisContainer = () => {
  const URL = "https://api.mercadolibre.com/sites/MLM/search?q=";
  const [products, setProducts] = useState([]);
  const getProductPrice = (data) => {
    Axios.get(URL + data)
      .then((res) => setProducts(res.data))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicProducto">
          <Form.Label>Ingresa Busqueda</Form.Label>
          <Form.Control
            type="text"
            id="producto"
            placeholder="Ingresa un producto a buscar"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            let product = document.querySelector("#producto");  
            console.log(product.value);
            getProductPrice(product.value)}}
        >
          Buscar
        </Button>
        {
            products ? (console.log(products.results)): (alert("No hay productos"))
        }
      </Form>
    </div>
  );
};

export default AnalisisContainer;
