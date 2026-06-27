// ==========================================
// NAVEGACIÓN ENTRE SECCIONES
// ==========================================
const inicio = document.getElementById('inicio');
const carta = document.getElementById('carta');

function mostrarCarta() {
  inicio.classList.remove('active');
  carta.classList.add('active');
  window.scrollTo(0, 0);
}

function mostrarInicio() {
  carta.classList.remove('active');
  inicio.classList.add('active');
  window.scrollTo(0, 0);
}

// ==========================================
// CAMBIO DE CATEGORÍAS - ARREGLADO
// ==========================================
function cat(id, btn) {
  // Ocultar todos los contenedores
  document.querySelectorAll('.categorias-container').forEach(container => {
    container.classList.add('oculto');
  });
  
  // Mostrar el contenedor seleccionado
  const container = document.getElementById(id + '-container');
  if (container) {
    container.classList.remove('oculto');
  }
  
  // Actualizar botón activo
  document.querySelectorAll('.categorias button').forEach(b => {
    b.classList.remove('active-cat');
  });
  if (btn) btn.classList.add('active-cat');
}

// ==========================================
// GENERAR PRODUCTOS DESDE DATOS
// ==========================================
function generarProductos() {
  const categorias = ['cafes', 'tapas', 'principales', 'postres', 'bebidas'];
  
  categorias.forEach(categoria => {
    const container = document.getElementById(categoria + '-container');
    const productos = PRODUCTOS[categoria];
    
    if (container && productos) {
      container.innerHTML = '';
      
      productos.forEach(producto => {
        const productoHTML = document.createElement('div');
        productoHTML.className = 'producto';
        
        // Procesar alérgenos
        let alergenosText = '';
        if (producto.alergenos) {
          const codigosAlergenos = producto.alergenos.split(',').map(c => c.trim());
          alergenosText = codigosAlergenos
            .map(codigo => ALERGENOS[codigo] || codigo)
            .join(' · ');
        }
        
        // Procesar precio con sufijo €/u si es por unidad
        let precioText = '';
        if (producto.precio) {
          const sufijo = producto.por_unidad ? '€/u' : '€';
          precioText = producto.precio + ' ' + sufijo;
        }
        
        productoHTML.innerHTML = `
          <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            ${alergenosText ? `<small>${alergenosText}</small>` : ''}
          </div>
          <strong>${precioText}</strong>
        `;
        
        container.appendChild(productoHTML);
      });
    }
  });
}

// Generar productos cuando carga la página
generarProductos();

// ==========================================
// CONFIGURACIÓN DE ENLACES
// ==========================================

// Google Maps - Abrir con coordenadas exactas
document.getElementById('mapsIcon').href = `https://maps.google.com/?q=${CONFIG.coordenadas.lat},${CONFIG.coordenadas.lng}`;

// Instagram
document.getElementById('instagramIcon').href = CONFIG.instagram;

// Facebook
document.getElementById('facebookIcon').href = CONFIG.facebook;

// WhatsApp
document.getElementById('whatsappIcon').href = `https://wa.me/${CONFIG.telefono}`;
