const inicio=document.getElementById('inicio');
const carta=document.getElementById('carta');
function mostrarCarta(){inicio.classList.remove('active');carta.classList.add('active');window.scrollTo(0,0);}
function mostrarInicio(){carta.classList.remove('active');inicio.classList.add('active');window.scrollTo(0,0);}
function cat(id,btn){
document.querySelectorAll('.grupo').forEach(g=>g.classList.add('oculto'));
document.getElementById(id).classList.remove('oculto');
document.querySelectorAll('.categorias button').forEach(b=>b.classList.remove('active-cat'));
if(btn) btn.classList.add('active-cat');
}


const LINKS={
 maps:"https://maps.google.com/",
 instagram:"https://instagram.com/",
 facebook:"https://facebook.com/",
 whatsapp:"https://wa.me/34600000000"
};
const m=document.getElementById('mapsLink'); if(m) m.href=LINKS.maps;
document.getElementById('mapsIcon').href=LINKS.maps;
document.getElementById('instagramIcon').href=LINKS.instagram;
document.getElementById('facebookIcon').href=LINKS.facebook;
document.getElementById('whatsappIcon').href=LINKS.whatsapp;


const ALERGENOS={
G:"🌾 Gluten",H:"🥚 Huevo",L:"🥛 Leche",FC:"🥜 Frutos de cáscara",
C:"🥜 Cacahuetes",S:"🌱 Soja",P:"🐟 Pescado",CR:"🦐 Crustáceos",
M:"🦑 Moluscos",SE:"🌾 Sésamo",A:"🥬 Apio",MO:"🌭 Mostaza",SU:"🧂 Sulfitos",AL:"🌾 Altramuces"
};
document.querySelectorAll('.producto small').forEach(el=>{
 const txt=el.textContent.trim();
 if(/[A-Z]/.test(txt)&&!txt.includes("Gluten")){
   const out=txt.split(/[,\s]+/).filter(Boolean).map(c=>ALERGENOS[c]||c);
   el.textContent=out.join(" · ");
 }
});
