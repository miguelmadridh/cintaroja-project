(this["webpackJsonpproyecto-cr"]=this["webpackJsonpproyecto-cr"]||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/logo.59b06d6e.png"},39:function(e,a,t){e.exports=t(69)},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),o=t(15),m=t(6),i=t(8),s=t(13),u=t.n(s),d=t(38),E=function(e){var a=e.createProduct,t=Object(n.useState)([]),c=Object(i.a)(t,2),l=c[0],o=c[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),E=s[0],p=s[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),f=h[0],v=h[1],g=Object(n.useState)(""),N=Object(i.a)(g,2),y=N[0],j=N[1];return Object(n.useEffect)((function(){u.a.get("https://api.mercadolibre.com/sites/MLM/categories").then((function(e){o(e.data)})).catch((function(e){return alert(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nombre"},"Nombre"),r.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){p(e.target.value)},id:"nombre"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"precio"},"Precio"),r.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){v(e.target.value)},id:"precio"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"categoria"},"Categoria"),r.a.createElement(d.a,{getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},options:l,onChange:function(e){console.log(e),j(e)},autoFocus:!0})),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",onClick:function(){return a(y,f,E)},className:"btn btn-success"},"Agregar")))},p=t(16),b=t(18),h=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],l=function(){return c(!1)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{paddingTop:"1rem",paddingBottom:"1rem"}},r.a.createElement("h2",null,"Agregar. Productos")),r.a.createElement("a",{href:"/manageProduct"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Admon. Productos")),r.a.createElement(E,{createProduct:function(e,a,t){var n={categoryID:e.id,categoryName:e.name,precio:a,titulo:t};u.a.post("https://devf-test-miguel.firebaseio.com/product.json",n).then((function(){console.log(e.id),c(!0)})).catch((function(e){return alert(e)}))}}),r.a.createElement(p.a,{show:t,onClick:l},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Exito al guardar")),r.a.createElement(p.a.Body,null,"Se inserto el producto gracias."),r.a.createElement(p.a.Footer,null,r.a.createElement(b.a,{variant:"secondary",onClick:l},"Close"))))},f=function(e){var a=e.id,t=e.catId,n=e.catName,c=e.titulo,l=e.precio;return r.a.createElement("div",{className:"card mb-4"},r.a.createElement("h5",{className:"card-header"},a,"  |  ",c),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Categoria: ",t,"  |  ",n," "),r.a.createElement("p",{className:"card-text"},r.a.createElement("h6",null,"Precio $ ",l," "))))},v=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){u.a.get("https://devf-test-miguel.firebaseio.com//product.json").then((function(e){c(e.data)})).catch((function(e){return alert(e)}))}),[]),r.a.createElement("div",null,t?Object.keys(t).map((function(e){return r.a.createElement(f,{key:e,id:e,catId:t[e].categoryID,catName:t[e].categoryName,titulo:t[e].titulo,precio:t[e].precio})})):r.a.createElement("h3",null,"No hay productos"))},g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{paddingTop:"1rem",paddingBottom:"1rem"}},r.a.createElement("h2",null,"Admon. Productos")),r.a.createElement("a",{href:"/addProduct"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Agregar Producto")),r.a.createElement("div",{style:{paddingTop:"1rem",paddingBottom:"1rem"}},r.a.createElement(v,null)))},N=t(36),y=t.n(N),j=function(){return r.a.createElement("header",{className:"tm-header",id:"tm-header"},r.a.createElement("div",{className:"tm-header-wrapper"},r.a.createElement("button",{className:"navbar-toggler",type:"button","aria-label":"Toggle navigation"},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("div",{className:"tm-site-header"},r.a.createElement("div",{className:"mb-3 mx-auto tm-site-logo"},r.a.createElement("img",{src:y.a,style:{width:"200px"},alt:"error"})),r.a.createElement("br",null),r.a.createElement("h2",{className:"text-center"},"Analisis de Mercado")),r.a.createElement("nav",{className:"tm-nav",id:"tm-nav"},r.a.createElement(o.a,{basename:"/"},r.a.createElement("ul",null,r.a.createElement("li",{className:"tm-nav-item active "},r.a.createElement(o.b,{to:"/manageProduct",className:"tm-nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Admon de Productos")),r.a.createElement("li",{className:"tm-nav-item active"},r.a.createElement(o.b,{to:"/analisis",className:"tm-nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Analisis de precio")),r.a.createElement("li",{className:"tm-nav-item active"},r.a.createElement("a",{href:"post.html",className:"tm-nav-link"},r.a.createElement("i",{className:"fas fa-pen"}),"Busqueda de Tendencias")))))))},O=t(17),x=function(e){var a=e.id,t=e.title,n=e.price,c=e.soldQuantity,l=e.permaLink,o=e.mercadoPago;return r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement("div",{className:"card mb-4"},r.a.createElement("h5",{className:"card-header"},a," | ",t),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Precio ",n),r.a.createElement("p",{className:"card-text"},r.a.createElement("h6",null,"Unidades Vendidas  ",c," "),r.a.createElement("br",null),r.a.createElement("h6",null,r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Link a producto")),r.a.createElement("br",null),r.a.createElement("h6",null,"Acepta Mercado Pago ",o," "),r.a.createElement("br",null)))))},P=function(e){var a=e.min,t=e.max,n=e.avg;return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Precio minimo"),r.a.createElement("th",{scope:"col"},"Promedio"),r.a.createElement("th",{scope:"col"},"Precio Maximo"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"$ ",a),r.a.createElement("td",null,"$ ",n),r.a.createElement("td",null,"$ ",t)))))},k=function(e){var a=e.max,t=e.min,n=e.avg,c=e.productos.results;return r.a.createElement("div",null,r.a.createElement(P,{avg:n,max:a,min:t}),c?Object.keys(c).map((function(e){return r.a.createElement(x,{key:c[e].id,id:c[e].id,title:c[e].title,price:c[e].price,avQuantity:c[e].available_quantity,soldQuantity:c[e].sold_quantity,permaLink:c[e].permalink,mercadoPago:c[e].accepts_mercadopago})})):console.log("No hay prodductoss"))},S=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(0),o=Object(i.a)(l,2),m=o[0],s=o[1],d=Object(n.useState)(0),E=Object(i.a)(d,2),p=E[0],h=E[1],f=Object(n.useState)(0),v=Object(i.a)(f,2),g=v[0],N=v[1];var y=function(e){u.a.get("https://api.mercadolibre.com/sites/MLM/search?q="+e).then((function(e){return c(e.data)})).catch((function(e){return alert(e)})),function(){console.log("Hola");var e=[],a=t.results;if(a){Object.keys(a).map((function(t){e.push(a[t].price)}));var n=e.slice(0,50).reduce((function(e,a){return a+e}));s(n/e.length),h(Math.max.apply(Math,e)),N(Math.min.apply(Math,e))}}()};return r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(O.a.Group,{id:"formBasicProducto"},r.a.createElement(O.a.Label,null,"Ingresa Busqueda"),r.a.createElement(O.a.Control,{type:"text",id:"producto",placeholder:"Ingresa un producto a buscar"})),r.a.createElement(b.a,{variant:"primary",onClick:function(){var e=document.querySelector("#producto");y(e.value)}},"Buscar")),r.a.createElement(k,{productos:t,avg:m,max:p,min:g}))};var M=function(){return r.a.createElement("div",{class:"container-fluid"},r.a.createElement("main",{class:"tm-main"},r.a.createElement("div",{class:"row tm-row"},r.a.createElement("div",{class:"col-12"},r.a.createElement("form",{method:"GET",class:"form-inline tm-mb-80 tm-search-form"},r.a.createElement("input",{class:"form-control tm-search-input",name:"query",type:"text",placeholder:"Buscar ...","aria-label":"Search"}),r.a.createElement("button",{class:"tm-search-button",type:"submit"},r.a.createElement("i",{class:"fas fa-search tm-search-icon","aria-hidden":"true"}))))),r.a.createElement("div",{class:"row tm-row"}),r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(o.a,{basename:"/"},r.a.createElement(m.a,{exact:!0,path:"/addProduct",component:h}),r.a.createElement(m.a,{exact:!0,path:"/manageProduct",component:g}),r.a.createElement(m.a,{exact:!0,path:"/analisis",component:S})))))};t(67),t(68);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.27da86c0.chunk.js.map