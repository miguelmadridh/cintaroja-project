import React from "react";
import ProductoML from "./ProductoML";
import Precios from "./Precios";

const ListaBusqueda = (props) => {
  const { max, min, avg, productos } = props;
  const object = productos.results;

  return (
    <>
      <Precios avg={avg} max={max} min={min} />
      <table className="table" style={{fontSize: 10 +'px'}}>
        <thead className="thead-dark ">
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Unidades Vendidas</th>
            <th scope="col">Link a producto</th>
          </tr>
        </thead>
        <tbody>
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

                />
              ))
            : console.log("No hay prodductoss")}
        </tbody>
      </table>
    </>
  );
};

export default ListaBusqueda;
