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
        
        productoHTML.innerHTML = `
          <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            ${alergenosText ? `<small>${alergenosText}</small>` : ''}
          </div>
          <strong>${producto.precio ? producto.precio + ' €' : ''}</strong>
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
const LINKS = {
  maps: "https://maps.google.com/",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  whatsapp: "https://wa.me/34600000000"
};

document.getElementById('mapsIcon').href = LINKS.maps;
document.getElementById('instagramIcon').href = LINKS.instagram;
document.getElementById('facebookIcon').href = LINKS.facebook;
document.getElementById('whatsappIcon').href = LINKS.whatsapp;
