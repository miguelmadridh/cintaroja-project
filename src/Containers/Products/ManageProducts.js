import React from 'react'
import ListarProductos from '../../Components/ListarProductos'

const ManageProducts = () => {
    return (
        <div className="container">
            <div style ={{paddingTop:1 +"rem",paddingBottom:1 +"rem"}}>
            <h2>Admon. Productos</h2>
            </div>
            <a href="/addProduct"><button  type="button" className="btn btn-primary">Agregar Producto</button></a>
            <div style ={{paddingTop:1 +"rem",paddingBottom:1 +"rem"}}>
            <ListarProductos />
            </div>
        </div>

    )
}

export default ManageProducts
