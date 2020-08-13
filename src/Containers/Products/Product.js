import React from "react";

const Product = (props) => {
  console.log(props);
  const { id, catId, catName, titulo, precio } = props;
  return (
    <div className="card mb-4">
      <h5 className="card-header">
        {id}  |  {titulo}
      </h5>
      <div className="card-body">
        <h5 className="card-title">
          Categoria: {catId}  |  {catName}{" "}
        </h5>
        <p className="card-text">
          <h6>Precio $ {precio} </h6>
        </p>
      </div>
    </div>
  );
};

export default Product;
