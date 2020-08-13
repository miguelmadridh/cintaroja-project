import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export const AddProductComponent = (props) => {
  const {createProduct} = props;
  const [products, setProducts] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const URL = "https://api.mercadolibre.com/sites/MLM/categories";

  const handleNombreEvent = (event)=>{
    setNombre(event.target.value);
  }

  const handlePrecioEvent = (event)=>{
    setPrecio(event.target.value);
  }

  const handleCategoriaEvent = (event)=>{
    console.log(event);
    setCategoria(event);
  }
  const getProducts = () => {
    axios
      .get(URL)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getProducts();
    
  }, []);


  return (
    <div>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" className="form-control" onChange={handleNombreEvent} id="nombre" />
      </div>
      <div className="form-group">
        <label htmlFor="precio">Precio</label>
        <input type="text" className="form-control"  onChange={handlePrecioEvent} id="precio" />
      </div>
      <div className="form-group">
        <label htmlFor="categoria">Categoria</label>
        <Select
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          options={products} onChange={handleCategoriaEvent}
          autoFocus={true}
        />
      </div>

      <div className="btn-group">
        <button type="button" onClick ={()=>createProduct(categoria,precio,nombre)} className="btn btn-success">
          Agregar
        </button>
      </div>
    </div>
  );
};
