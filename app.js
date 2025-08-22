
const productos = [
  { id: 1, nombre: "Funda de silicona", precio: 5000 },
  { id: 2, nombre: "Funda de cuero", precio: 10000 }
];


function cargarForm() {
  const form = document.getElementById("form");
  form.innerHTML = `
    <label for="producto">Modelo:</label>
    <select id="producto">
      <option value="">Elegí una opción</option>
      ${productos.map(p => `<option value="${p.id}">${p.nombre} - $${p.precio}</option>`).join('')}
    </select>

    <label for="cantidad">Cantidad:</label>
    <input type="number" id="cantidad" value="1" min="1">

    <button onclick="calcular()">Calcular total</button>
  `;
}


function calcular() {
  const id = document.getElementById("producto").value;
  const cantidad = Number(document.getElementById("cantidad").value);
  const resultado = document.getElementById("resultado");

 
  if (!id || isNaN(cantidad) || cantidad < 1) {
    alert("Por favor, completá bien los datos.");
    return;
  }

  
  const prod = productos.find(p => p.id == id);
  if (!prod) return;

  const total = prod.precio * cantidad;

  resultado.style.display = "block";
  resultado.innerHTML = `
    <p><strong>Producto:</strong> ${prod.nombre}</p>
    <p><strong>Cantidad:</strong> ${cantidad}</p>
    <p><strong>Total:</strong> $${total}</p>
  `;
}


document.addEventListener("DOMContentLoaded", cargarForm);
