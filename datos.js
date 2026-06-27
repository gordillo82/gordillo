// 📋 ARCHIVO DE GESTIÓN DE PRODUCTOS Y CONFIGURACIÓN - EDITA FÁCILMENTE AQUÍ
// ============================================================

// ⚙️ CONFIGURACIÓN GENERAL DEL RESTAURANTE
const CONFIG = {
  nombre: "La PAUsa",
  ubicacion: "Avenida Real de Madrid 57, 46017 Valencia, España",
  coordenadas: {
    lat: 39.432867217652,
    lng: -0.39150530401416084
  },
  telefono: "34666840005",
  instagram: "https://www.instagram.com/la_pausa_cafe_y_tapas?igsh=ZXNxNm5uNjl4MDl5",
  facebook: "https://www.facebook.com/share/1KVNyzWesu/"
};

const PRODUCTOS = {
  cafes: [
    {
      nombre: "Espresso",
      descripcion: "Café intenso.",
      precio: "1,50",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Cortado",
      descripcion: "Espresso con leche.",
      precio: "1,70",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Café con leche",
      descripcion: "Clásico.",
      precio: "1,90",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Capuccino",
      descripcion: "Con espuma y cacao.",
      precio: "2,40",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Latte",
      descripcion: "Más leche.",
      precio: "2,40",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Americano",
      descripcion: "Suave.",
      precio: "1,80",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Bombón",
      descripcion: "Leche condensada.",
      precio: "2,00",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Carajillo",
      descripcion: "Con licor.",
      precio: "2,80",
      alergenos: "L,SU",
      por_unidad: false
    },
    {
      nombre: "Mocca",
      descripcion: "Chocolate.",
      precio: "2,90",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Infusión",
      descripcion: "Té o manzanilla.",
      precio: "2,00",
      alergenos: "",
      por_unidad: false
    }
  ],
  
  tapas: [
    {
      nombre: "Patatas Bravas",
      descripcion: "Con salsa brava.",
      precio: "5,50",
      alergenos: "H,M",
      por_unidad: false
    },
    {
      nombre: "Croquetas de jamón",
      descripcion: "Caseras.",
      precio: "7,50",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Calamares",
      descripcion: "Rebozados.",
      precio: "8,50",
      alergenos: "G,H,MO",
      por_unidad: false
    },
    {
      nombre: "Ensaladilla rusa",
      descripcion: "Tradicional.",
      precio: "5,90",
      alergenos: "H,P",
      por_unidad: false
    },
    {
      nombre: "Pan con tomate",
      descripcion: "Aceite de oliva.",
      precio: "3,50",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Tabla ibérica",
      descripcion: "Selección de embutidos.",
      precio: "12,50",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Queso curado",
      descripcion: "Selección nacional.",
      precio: "8,00",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Alitas BBQ",
      descripcion: "Asadas.",
      precio: "7,90",
      alergenos: "S",
      por_unidad: false
    },
    {
      nombre: "Nachos",
      descripcion: "Con queso y salsa.",
      precio: "8,90",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Boquerones",
      descripcion: "En vinagre.",
      precio: "6,90",
      alergenos: "P",
      por_unidad: false
    }
  ],
  
  principales: [
    {
      nombre: "Hamburguesa PAUsa",
      descripcion: "Vacuno, cheddar y bacon.",
      precio: "12,90",
      alergenos: "G,L,H,M",
      por_unidad: false
    },
    {
      nombre: "Sándwich Club",
      descripcion: "Pollo y bacon.",
      precio: "9,90",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Ensalada César",
      descripcion: "Con pollo crujiente.",
      precio: "10,50",
      alergenos: "G,L,H,P",
      por_unidad: false
    },
    {
      nombre: "Pasta Carbonara",
      descripcion: "Salsa cremosa.",
      precio: "11,50",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Solomillo",
      descripcion: "Con patatas.",
      precio: "18,90",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Salmón a la plancha",
      descripcion: "Con verduras.",
      precio: "16,90",
      alergenos: "P",
      por_unidad: false
    }
  ],
  
  postres: [
    {
      nombre: "Tarta de queso",
      descripcion: "Casera.",
      precio: "5,50",
      alergenos: "G,L,H",
      por_unidad: false
    },
    {
      nombre: "Brownie",
      descripcion: "Con nueces.",
      precio: "5,90",
      alergenos: "G,L,H,FC",
      por_unidad: false
    },
    {
      nombre: "Helado",
      descripcion: "Dos bolas.",
      precio: "4,90",
      alergenos: "L",
      por_unidad: false
    },
    {
      nombre: "Crema catalana",
      descripcion: "Tradicional.",
      precio: "5,20",
      alergenos: "L,H",
      por_unidad: false
    },
    {
      nombre: "Fruta de temporada",
      descripcion: "Natural.",
      precio: "4,50",
      alergenos: "",
      por_unidad: false
    }
  ],
  
  bebidas: [
    {
      nombre: "Rioja Crianza",
      descripcion: "Vino tinto.",
      precio: "3,80",
      alergenos: "SU",
      por_unidad: true
    },
    {
      nombre: "Ribera del Duero Roble",
      descripcion: "Vino tinto.",
      precio: "4,20",
      alergenos: "SU",
      por_unidad: true
    },
    {
      nombre: "Rioja Reserva",
      descripcion: "Vino tinto.",
      precio: "5,50",
      alergenos: "SU",
      por_unidad: true
    },
    {
      nombre: "Priorat",
      descripcion: "Vino tinto.",
      precio: "6,00",
      alergenos: "SU",
      por_unidad: true
    },
    {
      nombre: "Verdejo",
      descripcion: "Vino blanco.",
      precio: "3,80",
      alergenos: "SU",
      por_unidad: true
    },
    {
      nombre: "Albariño",
      descripcion: "Vino blanco.",
      precio: "4,50",
      alergenos: "SU",
      por_unidad: true
    },
    {
      nombre: "Sauvignon Blanc",
      descripcion: "Vino blanco.",
      precio: "4,20",
      alergenos: "SU",
      por_unidad: true
    },
    {
      nombre: "Chardonnay",
      descripcion: "Vino blanco.",
      precio: "4,80",
      alergenos: "SU",
      por_unidad: true
    },
    {
      nombre: "Mahou 5 Estrellas",
      descripcion: "Cerveza.",
      precio: "2,80",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Alhambra Reserva 1925",
      descripcion: "Cerveza.",
      precio: "3,40",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "IPA Artesana",
      descripcion: "Cerveza.",
      precio: "4,20",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Mahou Sin Alcohol",
      descripcion: "Cerveza.",
      precio: "2,70",
      alergenos: "G",
      por_unidad: false
    },
    {
      nombre: "Coca-Cola",
      descripcion: "Refresco.",
      precio: "2,60",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Coca-Cola Zero",
      descripcion: "Refresco.",
      precio: "2,60",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Fanta Naranja",
      descripcion: "Refresco.",
      precio: "2,60",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Aquarius Limón",
      descripcion: "Refresco.",
      precio: "2,60",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Agua mineral 50 cl",
      descripcion: "Botella.",
      precio: "1,80",
      alergenos: "",
      por_unidad: false
    },
    {
      nombre: "Agua con gas",
      descripcion: "Botella.",
      precio: "2,20",
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
  MO: "🌭 Mostaza",
  SE: "🌾 Sésamo",
  A: "🥬 Apio",
  SU: "🧂 Sulfitos",
  AL: "🌾 Altramuces"
};
