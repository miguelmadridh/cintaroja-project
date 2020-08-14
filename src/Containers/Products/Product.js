import React from "react";

const Product = (props) => {
  const { id, catId, catName, titulo, precio,deleteProduct } = props;
  return (
    
      <tr>
        <td>
          {catId} | {catName}
        </td>
        <td>
          {id} | {titulo}
        </td>
        <td>$ {precio} </td>

        <td>
          <button type="button" onClick={()=>deleteProduct(id)} class="btn btn-danger">
            Eliminar
          </button>
        </td>
      </tr>
    
  );
};

export default Product;
