"use strict";

// FUNZIONI
// cambio immagine - scorrere le classi tra gli elementi
function cambioImmagine(indice) {
  const domItems = document.querySelectorAll(".item");
  const domThumbnails = document.querySelectorAll(".layer");

  domItems[contImmagine].classList.remove("active");
  domThumbnails[contImmagine].classList.remove("selected");

  domItems[indice].classList.add("active");
  domThumbnails[indice].classList.add("selected");

  contImmagine = indice;
}

// PROGRAMMA

// assegnazione / dichiarazione variabile per il container
const container = document.querySelector(".container");
// creazione elemento items
const items = document.createElement("div");
// aggiungo classe items
items.classList.add("items");
// appendo al container
container.append(items);

// creazione array di immagini
const immagini = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// contatore immagini
let contImmagine = 0;

// creazione thumbnails nel dom
const miniature = document.createElement("div");
// aggiungo la classe thumbnails
miniature.classList.add("thumbnails");
// aggiungo nel dom
container.append(miniature);

// creazione elementi item e immagine
for (let i = 0; i < immagini.length; i++) {
  // creazione elemento item
  const item = document.createElement("div");
  // aggiungo classe item
  item.classList.add("item");
  // appendo item al contenitore items
  items.append(item);

  // creazione thumbnail
  const miniatura = document.createElement("div");
  // aggiungo classe thumbnail
  miniatura.classList.add("thumbnail");
  // inserisco in thumbnails
  miniature.append(miniatura);

  // creazione layer
  const layer = document.createElement("div");
  // classe layer
  layer.classList.add("layer");
  // inserito in miniatura
  miniatura.append(layer);

  // assegnazione variabile active e selected
  if (contImmagine === i) {
    item.classList.add("active");
    layer.classList.add("selected");
  }

  // inserisco le immagini dell'array nel dom
  const img = document.createElement("img");
  img.src = `img/${immagini[i]}`;
  img.alt = `Paesaggio ${i + 1}`;
  // inserisco immagine in item
  item.append(img);

  // inserisco immagini nelle miniature
  const imgMiniature = document.createElement("img");
  imgMiniature.src = `img/${immagini[i]}`;
  imgMiniature.alt = `Paesaggio ${i + 1}`;
  // inserisco immagine in miniatura
  miniatura.append(imgMiniature);

  // click miniature
  miniatura.addEventListener("click", function () {
    if (layer !== document.querySelector(".selected")) {
      document.querySelector(".selected").classList.remove("selected");
      layer.classList.add("selected");
    }
  });
}

// creazione frecce
// freccia in alto
const alto = document.createElement("div");
// assegnazione classe prev
alto.classList.add("prev");
// inserimento in items
miniature.append(alto);
// freccia in basso
const basso = document.createElement("div");
// assegnazione classe prev
basso.classList.add("next");
// inserimento in items
miniature.append(basso);

// Nuovo indice
let nuovaPosizione;

// evento per cambiare le immagini
// scorrere in dietro
alto.addEventListener("click", function () {
  // se il contatore è inferiore a 0
  if (contImmagine - 1 < 0) {
    // la nuova posizione è l'ultima immagine dell'array
    nuovaPosizione = immagini.length - 1;
  } else {
    // La nuova posizione è l'immagine precedente
    nuovaPosizione = contImmagine - 1;
  }
  cambioImmagine(nuovaPosizione);
});

// scorrere in avanti
basso.addEventListener("click", function () {
  // se il contatore è maggiore/uguale alla lunghezza dell'array
  if (contImmagine + 1 >= immagini.length) {
    // la nuova posizione è 0
    nuovaPosizione = 0;
  } else {
    // La nuova posizione è l'immagine successiva
    nuovaPosizione = contImmagine + 1;
  }
  cambioImmagine(nuovaPosizione);
});
