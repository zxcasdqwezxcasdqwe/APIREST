let productos = [];


fetch("/librosDestacados")
    .then(response => response.json())
    .then(data => {
        productos = data;
        librosDestacados(productos);
    })
const destacadosProductos = document.querySelector("#contenedor-destacados");

function librosDestacados(productosElegidos) {

    destacadosProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {
    
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="static/${producto.imagen}" alt="${producto.titulo}">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" href="${producto.id}"><i class="fa fa-shopping-cart"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                    </div>
                </div>
                <div class="text-center py-3">
                    <a class="h6">${producto.titulo}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$${producto.precio}</h5>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                    </div>
                </div> 
            </div>  
        `;
        destacadosProductos.append(div);
    });
}


let nuevos = [];

fetch("/librosNuevos")
    .then(response => response.json())
    .then(data => {
        nuevos = data;
        librosNuevos(nuevos);
    })

const nuevosProductos = document.querySelector("#contenedor-nuevos");

function librosNuevos(productosElegidos) {

    nuevosProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {
    
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="product-item bg-azulOscuro mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="static/${producto.imagen}" alt="${producto.titulo}">
                    <div class="product-action">
                        
                        <a class="btn btn-outline-dark btn-square" href="${producto.id}"><i class="fa fa-shopping-cart"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                        <a class="btn btn-outline-dark btn-square" href="/detail/${producto.id}"><i class="fa fa-search"></i></a>
                        
                    </div>
                </div>
                <div class="text-center py-3">
                    <a class="h6">${producto.titulo}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$${producto.precio}</h5>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                    </div>
                </div> 
            </div>  
        `;
        nuevosProductos.append(div);
    })
}


let todos = [];

fetch("/libros")
    .then(response => response.json())
    .then(data => {
        productos = data;
        todosLosLibros(productos);
    })

const todosLosProductos = document.querySelector("#contenedor-todos");

function todosLosLibros(productosElegidos) {

    todosLosProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {
    
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="product-item bg-light mb-4" id"producto-todos">
            <div class="product-img position-relative overflow-hidden">
                <img class="img-fluid w-100" src="static/${producto.imagen}" alt="${producto.titulo}">
                <div class="product-action">
                    <a class="btn btn-outline-dark btn-square" href="${producto.id}"><i class="fa fa-shopping-cart"></i></a>
                    <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                    <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                </div>
            </div>
            <div class="text-center py-3">
                <a class="h6">${producto.titulo}</a>
                <div class="d-flex align-items-center justify-content-center mt-2">
                    <h5>$${producto.precio}</h5>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-1">
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small>(99)</small>
                </div>
            </div> 
        </div>  
        `;
        todosLosProductos.append(div);
    })
}



//Funciones botones
(function ($) {
    "use strict";
    
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });

    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);
