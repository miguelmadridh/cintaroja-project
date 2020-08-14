import React from "react";

const ProductoML = (props) => {
  const { id, title, price, soldQuantity, permaLink } = props;

  return (
    <tr>
      <td>
        {id} | {title}
      </td>
      <td>$ {price}</td>
      <td>{soldQuantity}</td>
      <td>
        <a href={permaLink} target="_blank" rel="noopener noreferrer">
          Link a producto
        </a>
      </td>
    </tr>
  );
};

export default ProductoML;
