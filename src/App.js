import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProduct from "./Containers/Products/AddProduct";
import ManageProducts from "./Containers/Products/ManageProducts";
import HeaderNav from "./Components/HeaderNav";
import AnalisisContainer from "./Containers/Analisis/AnalisisContainer";

function App() {
  return (
    <div class="container-fluid">
      <main class="tm-main">
        <div class="row tm-row">
          <div class="col-12">
            <form method="GET" class="form-inline tm-mb-80 tm-search-form">
              <input
                class="form-control tm-search-input"
                name="query"
                type="text"
                placeholder="Buscar ..."
                aria-label="Search"
              />
              <button class="tm-search-button" type="submit">
                <i class="fas fa-search tm-search-icon" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="row tm-row"></div>
        <div className="App">
          <HeaderNav />
          <BrowserRouter>
            <Switch>
              <Route exact path="/addProduct" component={AddProduct}></Route>
              <Route
                exact
                path="/manageProduct"
                component={ManageProducts}
              ></Route>
                     <Route
                exact
                path="/analisis"
                component={AnalisisContainer}
              ></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
}

export default App;
