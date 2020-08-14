import React from "react";

const ProductoML = (props) => {

  const { id, title, price, soldQuantity, permaLink, mercadoPago } = props;

  return (
    <div style={{paddingTop: 10+"px"}}>
      <div className="card mb-4">
        <h5 className="card-header">
          {id} | {title}
        </h5>
        <div className="card-body">
          <h5 className="card-title">Precio {price}</h5>
          <p className="card-text">
            <h6>Unidades Vendidas  {soldQuantity} </h6>
            <br />
            <h6><a href= {permaLink} target="_blank" rel="noopener noreferrer" >Link a producto</a></h6>
            <br />
            <h6>Acepta Mercado Pago {mercadoPago} </h6>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductoML;
