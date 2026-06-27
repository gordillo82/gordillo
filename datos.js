// 📋 ARCHIVO DE GESTIÓN DE PRODUCTOS - EDITA FÁCILMENTE AQUÍ
// ============================================================

const PRODUCTOS = {
  cafes: [
    {
      nombre: "Espresso",
      descripcion: "Café 100% arábica recién molido.",
      precio: "1,50",
      alergenos: ""
    },
    {
      nombre: "Cafe con leche",
      descripcion: "Café 100% arábica recién molido.",
      precio: "1,80",
      alergenos: "L"
    }
  ],
  
  tapas: [
    {
      nombre: "Patatas Bravas",
      descripcion: "Con salsa casera.",
      precio: "5,00",
      alergenos: "H"
    },
    {
      nombre: "Croquetas de jamon",
      descripcion: "Con una bechamel secreta.",
      precio: "3,00",
      alergenos: "H,L"
    }
  ],
  
  principales: [
    {
      nombre: "Próximamente",
      descripcion: "Nuevos platos principales.",
      precio: "",
      alergenos: ""
    }
  ],
  
  postres: [
    {
      nombre: "Próximamente",
      descripcion: "Nuestros postres caseros.",
      precio: "",
      alergenos: ""
    }
  ],
  
  bebidas: [
    {
      nombre: "Agua",
      descripcion: "Botella 50 cl.",
      precio: "1,50",
      alergenos: ""
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
