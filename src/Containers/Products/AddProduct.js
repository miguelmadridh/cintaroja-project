import React, { useState } from "react";
import { AddProductComponent } from "../../Components/AddProductComponent";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddProduct = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const addNewProduct = (categoria, precio, titulo) => {
    const URL = "https://devf-test-miguel.firebaseio.com/product.json";
    const currentProduct = {
      categoryID: categoria.id,
      categoryName: categoria.name,
      precio: precio,
      titulo: titulo,
    };

    Axios.post(URL, currentProduct)
      .then(() => {
        console.log(categoria.id)
        setShow(true)})
      .catch((error) => alert(error));
  };

  return (
    <div className="container">
      <div style={{ paddingTop: 1 + "rem", paddingBottom: 1 + "rem" }}>
        <h2>Agregar. Productos</h2>
      </div>
      <a href="/manageProduct">
        <button type="button" className="btn btn-primary">
          Admon. Productos
        </button>
      </a>
      <AddProductComponent createProduct={addNewProduct} />

      <Modal show={show} onClick={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Exito al guardar</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se inserto el producto gracias.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
