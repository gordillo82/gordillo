// 📋 ARCHIVO DE GESTIÓN DE PRODUCTOS - EDITA FÁCILMENTE AQUÍ
// ============================================================

const PRODUCTOS = {
  cafes: [
    {
      nombre: "Espresso",
      descripcion: "Café 100% arábica recién molido.",
      precio: "1,50",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Cafe con leche",
      descripcion: "Café 100% arábica recién molido.",
      precio: "1,80",
      alergenos: "L",
      por_unidad: false
    }
  ],
  
  tapas: [
    {
      nombre: "Patatas Bravas",
      descripcion: "Con salsa casera.",
      precio: "5,00",
      alergenos: "H",
      por_unidad: false
    },
    {
      nombre: "Croquetas de jamon",
      descripcion: "Con una bechamel secreta.",
      precio: "3,00",
      alergenos: "H,L",
      por_unidad: true
    }
  ],
  
  principales: [
    {
      nombre: "Próximamente",
      descripcion: "Nuevos platos principales.",
      precio: "",
      alergenos: "",
      por_unidad: false
    }
  ],
  
  postres: [
    {
      nombre: "Próximamente",
      descripcion: "Nuestros postres caseros.",
      precio: "",
      alergenos: "",
      por_unidad: false
    }
  ],
  
  bebidas: [
    {
      nombre: "Agua",
      descripcion: "Botella 50 cl.",
      precio: "1,50",
      alergenos: "",
      por_unidad: false
    }
  ]
};

// CÓDIGOS DE ALÉRGENOS
const ALERGENOS = {
  G: "🌾 Gluten",
  H: "🥚 Huevo",
  L: "🥛 Leche",
  FC: "🥜 Frutos de cáscara",
  C: "🥜 Cacahuetes",
  S: "🌱 Soja",
  P: "🐟 Pescado",
  CR: "🦐 Crustáceos",
  M: "🦑 Moluscos",
  SE: "🌾 Sésamo",
  A: "🥬 Apio",
  MO: "🌭 Mostaza",
  SU: "🧂 Sulfitos",
  AL: "🌾 Altramuces"
};
