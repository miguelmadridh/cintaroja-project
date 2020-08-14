import React from "react";
import ProductoML from "./ProductoML";
import Precios from "./Precios";

const ListaBusqueda = (props) => {
  const {max,min, avg,productos } = props;
  const object = productos.results;



  return (
    <div>
      <Precios avg={avg} max={max} min={min} /> 
      {object
        ? Object.keys(object).map((value) => (
            <ProductoML
              key={object[value].id}
              id={object[value].id}
              title={object[value].title}
              price={object[value].price}
              avQuantity={object[value].available_quantity}
              soldQuantity={object[value].sold_quantity}
              permaLink={object[value].permalink}
              mercadoPago={object[value].accepts_mercadopago}
            />
          ))
        : console.log("No hay prodductoss")}
    </div>
  );
};

export default ListaBusqueda;
