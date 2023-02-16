// DECLARACION DE CONSTANTES -- LLAMAR A LOS DIVS QUE HAREMOS DINÁMICOS DESDE JS

const headerPic = document.getElementById('img_cambiante');
console.log(headerPic);

const cardA = document.getElementById("card1");
console.log(cardA);

const cardB = document.getElementById("card2");
console.log(cardB);

const cardC = document.getElementById("card3");
console.log(cardC);

// CREACIÓN DE ARRAYs PARA LUEGO ALMACENAR EN LOS DIVS IDENTIFICADOS ARRIBA

// const arrayBanner = ["../media_DOMtree/Banner/1.jpg", "../media_DOMtree/Banner/2.jpg", "../media_DOMtree/Banner/4.jpg", "../media_DOMtree/Banner/5.jpg", "../media_DOMtree/Banner/6.jpg", "../media_DOMtree/Banner/7.jpg", "../media_DOMtree/Banner/8.jpg"];
const arrayCambiante = [src="../media_DOMtree/Banner/1.jpg", src="../media_DOMtree/Banner/2.jpg", src="../media_DOMtree/Banner/4.jpg"]
// const arrayCambiante = [1, 2, 3, 4, 5]
var random_photo = arrayCambiante[Math.random()*arrayCambiante.length]
// var random_photo = arrayBanner[Math.random()*arrayBanner.length]
console.log(random_photo);

