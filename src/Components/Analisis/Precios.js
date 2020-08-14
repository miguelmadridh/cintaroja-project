import React from "react";

const Precios = (props) => {
  const { min,max,avg } = props;

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Precio minimo</th>
            <th scope="col">Promedio</th>
            <th scope="col">Precio Maximo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$ {min}</td>
            <td>$ {avg}</td>
            <td>$ {max}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Precios;
