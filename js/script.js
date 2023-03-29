const textosSpanVenta = [
  "ENVÍO GRATIS A PARTIR DE $5.000",
  "ABIERTO TODOS LOS DIAS",
  "ENVIOS A TODO EL PAIS",
  "LOS MEJORES SANGUCHITOS",
];

function cambiarPublicidad() {
  let indice = 0;
  const spanVenta = document.getElementById("encabezado2");
  setInterval(() => {
    spanVenta.textContent = textosSpanVenta[indice];
    indice = (indice + 1) % textosSpanVenta.length;
  }, 4000);
}
document.addEventListener("DOMContentLoaded", () => {
  cambiarPublicidad();
});

let imagenProductos = [];
let indice = 1;
let anterior = 0;

function cambiarImagen() {
  setInterval(() => {
    imagenProductos[anterior].style.display = `none`;
    imagenProductos[indice].style.display = `block`;
    anterior = indice;
    indice = (indice + 1) % imagenProductos.length;
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  imagenProductos = document.querySelectorAll(".imgProductos");
  cambiarImagen();
});

let imagenProductos2 = [];
let indice2 = 1;
let anterior2 = 0;

function cambiarImagen2() {
  setInterval(() => {
    imagenProductos2[anterior2].style.display = `none`;
    imagenProductos2[indice2].style.display = `block`;
    anterior2 = indice2;
    indice2 = (indice2 + 1) % imagenProductos2.length;
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  imagenProductos2 = document.querySelectorAll(".imgProductos2");
  cambiarImagen2();
});

let imagenProductos3 = [];
let indice3 = 1;
let anterior3 = 0;

function cambiarImagen3() {
  setInterval(() => {
    imagenProductos3[anterior3].style.display = `none`;
    imagenProductos3[indice3].style.display = `block`;
    anterior3 = indice3;
    indice3 = (indice3 + 1) % imagenProductos3.length;
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  imagenProductos3 = document.querySelectorAll(".imgProductos3");
  cambiarImagen3();
});
