// URL del archivo JSON (simula datos remotos)
const API_URL = "productos.json";

// Variables
let productos = [];

// Cargar productos al iniciar
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }

    productos = await response.json();
    cargarProductos();
  } catch (error) {
    document.getElementById("producto").innerHTML = 
      "<option value=''>Error al cargar productos</option>";
    mostrarError("No se pudieron cargar los productos. Revisá el archivo productos.json");
  }
});

// Cargar productos en el <select>
function cargarProductos() {
  const select = document.getElementById("producto");
  select.innerHTML = "<option value=''>Elegí una funda</option>";

  productos.forEach(prod => {
    const option = document.createElement("option");
    option.value = prod.id;
    option.textContent = `${prod.nombre} - $${prod.precio}`;
    select.appendChild(option);
  });
}

// Calcular total
function calcular() {
  const id = document.getElementById("producto").value;
  const cantidad = Number(document.getElementById("cantidad").value);
  const resultado = document.getElementById("resultado");

  // Limpiar resultado anterior
  resultado.style.display = "none";

  // Validar
  if (!id || isNaN(cantidad) || cantidad < 1) {
    mostrarError("Por favor, completá los datos correctamente.");
    return;
  }

  const prod = productos.find(p => p.id == id);
  if (!prod) {
    mostrarError("Producto no encontrado.");
    return;
  }

  const total = prod.precio * cantidad;

  // Mostrar resultado
  resultado.style.display = "block";
  resultado.innerHTML = `
    <p><strong>Producto:</strong> ${prod.nombre}</p>
    <p><strong>Cantidad:</strong> ${cantidad}</p>
    <p><strong>Total a pagar:</strong> $${total}</p>
  `;
}

// Mostrar errores con SweetAlert2 (librería externa)
function mostrarError(mensaje) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: mensaje,
    confirmButtonText: 'Entendido'
  });
}