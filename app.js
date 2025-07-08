// Precios
const FUNDA_SILICONA = 5000;
const FUNDA_CUERO = 10000;

// Pregunto qué producto quiere
let producto = prompt("¿Qué funda querés comprar?\n1 - Funda de silicona ($5000)\n2 - Funda de cuero ($10000)");

// Pregunto cuántas unidades quiere
let cantidad = prompt("¿Cuántas fundas querés comprar?");

// Convierto cantidad a número
cantidad = Number(cantidad);

// Variable para guardar el total
let total = 0;

// Según la opción que elija, calculo el total con switch
switch (producto) {
  case "1":
    total = FUNDA_SILICONA * cantidad;
    alert("Elegiste fundas de silicona.\nTotal: $" + total);
    console.log("Elegiste fundas de silicona. Total: $" + total);
    break;
  case "2":
    total = FUNDA_CUERO * cantidad;
    alert("Elegiste fundas de cuero.\nTotal: $" + total);
    console.log("Elegiste fundas de cuero. Total: $" + total);
    break;
  default:
    alert("Opción inválida.");
    console.log("El usuario ingresó una opción inválida.");
    break;
}
