// DECLARACION DE CONSTANTES -- LLAMAR A LOS DIVS QUE HAREMOS DINÁMICOS DESDE JS

const headerPic = document.querySelector("#img_cambiante");

const cardA = document.querySelector("#card1");

const cardB = document.querySelector("#card2");

const cardC = document.querySelector("#card3");

const urlCardBase = "../media_DOMtree/Viajes/";


// CREACIÓN DE ARRAY BANNER PARA LUEGO ALMACENAR EN EL DIVS CORRESPONDIENTE ARRIBA

const arrayBanner = [
    "../media_DOMtree/Banner/1.jpg",
    "../media_DOMtree/Banner/2.jpg",
    "../media_DOMtree/Banner/4.jpg",
    "../media_DOMtree/Banner/5.jpg",
    "../media_DOMtree/Banner/6.jpg",
    "../media_DOMtree/Banner/7.jpg",
    "../media_DOMtree/Banner/8.jpg"];

console.log(arrayBanner);

// ARRAYs para img cambiante de Banner

let img = document.createElement("img")

var random_photo = [Math.floor(Math.random() * arrayBanner.length)];
img.src = arrayBanner[random_photo]

headerPic.appendChild(img);

// ARRAYs para imgs de CARDS.

const paintRecomended = () =>{

    const arrayCards =[
        ["viaje-1.jpg", "Viaje 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
        ["viaje-2.jpg", "Viaje 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
        ["viaje-3.jpg", "Viaje 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
    ];
    
    arrayCards.forEach((item)=>{ 
        // const card = document.createElement('ARTICLE'); 
        //     card.classList.add('grid-item-2'); 
        //     card.classList.add('border-top-right-bottom');
        // const cardImg = document.createElement('IMG'); 
        //     cardImg.src=`${urlBase}/viajes/${item[0]}`; 
        //     cardImg.setAttribute('alt', item[1]); 
        //     cardImg.title = item[1];
        //     cardImg.classList.add('img-fluid'); 
        // const cardT = document.createElement('H3'); 
        //     cardT.textContent = item[1]; 
        // const cardP = document.createElement('P'); 
        //     cardP.textContent = item[2];
        const card = document.querySelector("prueba1")
    
        card.append(arrayCards);
    
        fragment.append(card);
    
    })
    
    recomendados.append(fragment);
    }

// const paintDestiny = () => {

// }

// const pintarDestinos=()=>{
// const destinos = document.querySelector('#prueba1');
// const arrayCities = ['Bogotá', 'La Paz', 'Santiago de Chile', 'Caracas', 'Buenos Aires'];

// }

paintRecomemded();
// paintDestiny();
