// Cargar productos al iniciar
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch('productos.json');
    
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }

    const productos = await response.json();
    const select = document.getElementById('producto');
    select.innerHTML = '<option value="">Elegí una funda</option>';

    productos.forEach(prod => {
      const option = document.createElement('option');
      option.value = prod.id;
      option.textContent = `${prod.nombre} - $${prod.precio}`;
      select.appendChild(option);
    });

  } catch (error) {
    // Mostramos mensaje con SweetAlert2 (cumple con "librería externa")
    document.getElementById('producto').innerHTML = '<option value="">Error al cargar productos</option>';
    
    Swal.fire({
      icon: 'error',
      title: 'Error de carga',
      text: 'No se pudieron cargar los productos. Revisá el archivo productos.json.',
      confirmButtonText: 'Entendido'
    });
  }
});

// Calcular total
function calcular() {
  const id = document.getElementById('producto').value;
  const cantidad = Number(document.getElementById('cantidad').value);

  if (!id || isNaN(cantidad) || cantidad < 1) {
    // También usamos SweetAlert2 aquí (en lugar de alert)
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Por favor, completá los datos correctamente.',
      confirmButtonText: 'Entendido'
    });
    return;
  }

  // Simulamos los productos (por si el JSON no está disponible)
  let nombre, precio;

  if (id == "1") {
    nombre = "Funda de silicona";
    precio = 5000;
  } else if (id == "2") {
    nombre = "Funda de cuero";
    precio = 10000;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Producto no válido.',
      confirmButtonText: 'Entendido'
    });
    return;
  }

  const total = precio * cantidad;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <p><strong>Producto:</strong> ${nombre}</p>
    <p><strong>Cantidad:</strong> ${cantidad}</p>
    <p><strong>Total:</strong> $${total}</p>
  `;
  resultado.style.display = 'block';
}