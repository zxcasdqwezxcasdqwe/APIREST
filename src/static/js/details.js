let productos = [];

fetch("/detail")
    .then(response => response.json())
    .then(data => {
        productos = data;
        librosDestacados(productos);
    })

const detallesProductos = document.querySelector("#contenedor-detalles");
detallesProductos.innerHTML = "";
const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =`<div class="h-100 bg-light p-30" id="contenedor-detalles">
                            <h3>${productos.titulo}</h3>
                            <div class="d-flex mb-3">
                                <div class="text-primary mr-2">
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star-half-alt"></small>
                                    <small class="far fa-star"></small>
                                </div>
                                <small class="pt-1">(99 Reviews)</small>
                            </div>
        
        `;