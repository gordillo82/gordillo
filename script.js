const inicio=document.getElementById('inicio');
const carta=document.getElementById('carta');
function mostrarCarta(){inicio.classList.remove('active');carta.classList.add('active');window.scrollTo(0,0);}
function mostrarInicio(){carta.classList.remove('active');inicio.classList.add('active');window.scrollTo(0,0);}
function cat(id){document.querySelectorAll('.grupo').forEach(g=>g.classList.add('oculto'));document.getElementById(id).classList.remove('oculto');}


const LINKS={
 maps:"https://maps.google.com/",
 instagram:"https://instagram.com/",
 facebook:"https://facebook.com/",
 whatsapp:"https://wa.me/34600000000"
};
document.getElementById('mapsLink').href=LINKS.maps;
document.getElementById('mapsIcon').href=LINKS.maps;
document.getElementById('instagramIcon').href=LINKS.instagram;
document.getElementById('facebookIcon').href=LINKS.facebook;
document.getElementById('whatsappIcon').href=LINKS.whatsapp;
