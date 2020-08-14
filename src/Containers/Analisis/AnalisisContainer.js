import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import ListaBusqueda from "../../Components/Analisis/ListaBusqueda";

const AnalisisContainer = () => {
  const URL = "https://api.mercadolibre.com/sites/MLM/search?q=";
  const [products, setProducts] = useState([]);
  let [avg, setAvg] = useState(0);
  let [max, setMax] = useState(0);
  let [min, setMin] = useState(0);

  function getPreciosArray() {
    console.log("Hola");
    let arregloPrecios = [];
    const object = products.results;
    if (object) {
      Object.keys(object).map((value) => {
        arregloPrecios.push(object[value].price);
      });

      if (arregloPrecios.length > 0) {
        let sum = arregloPrecios
          .slice(0, 50)
          .reduce((previous, current) => (current += previous));
        setAvg(Math.round(sum / arregloPrecios.length));
        setMax(Math.round(Math.max(...arregloPrecios)));
        setMin(Math.round(Math.min(...arregloPrecios)));
      }
    }
  }
  const getProductPrice = (data) => {
    Axios.get(URL + data)
      .then((res) => setProducts(res.data))
      .catch((error) => alert(error));
    getPreciosArray();
  };

  return (
    <div>
      <Form>
        <Form.Group id="formBasicProducto">
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
            getProductPrice(product.value);
          }}
        >
          Buscar
        </Button>
      </Form>
      <ListaBusqueda productos={products} avg={avg} max={max} min={min} />
    </div>
  );
};

export default AnalisisContainer;
