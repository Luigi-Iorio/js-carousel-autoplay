"use strict";

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
// contatore miniature
let contMiniature = 0;

// creazione thumbnails nel dom
const miniature = document.createElement("div");
// aggiungo la classe thumbnails
miniature.classList.add("thumbnails");
// aggiungo nel dom
container.append(miniature);

// creazione elementi item e immagine
for (let i = 0; i < immagini.length; i++) {
  // creazione elemento idem
  const item = document.createElement("div");
  // aggiungo classe item
  item.classList.add("item");
  // appendo item al contenitore items
  items.append(item);

  // assegnazione variabile active
  if (contImmagine === i) {
    item.classList.add("active");
  }

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

  // assegnazione variabile active per miniature
  if (contMiniature === i) {
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
    if (layer === document.querySelector(".selected")) {
      contImmagine[i] == contMiniature[i];
    } else {
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

// domitems - per selezzionare tutti gli elementi item nel dom
const domItems = document.querySelectorAll(".item");
console.log(domItems);

// domThumbnails - per selezionare tutti gli elementi thumbnail nel dom
const domThumbnails = document.querySelectorAll(".layer");

// evento per cambiare le immagini
// scorrere in dietro
alto.addEventListener("click", function () {
  if (contImmagine > 0 && contMiniature > 0) {
    domItems[contImmagine].classList.remove("active");
    contImmagine--;
    domItems[contImmagine].classList.add("active");

    // cambiare classi domThumbnail
    domThumbnails[contMiniature].classList.remove("selected");
    contMiniature--;
    domThumbnails[contMiniature].classList.add("selected");
  } else if (contImmagine === 0 && contMiniature === 0) {
    domItems[contImmagine].classList.remove("active");
    contImmagine = domItems.length - 1;
    domItems[contImmagine].classList.add("active");

    // cambiare classi domThumbnail
    domThumbnails[contMiniature].classList.remove("selected");
    contMiniature = domThumbnails.length - 1;
    domThumbnails[contMiniature].classList.add("selected");
  }
});

// scorrere in avanti
basso.addEventListener("click", function () {
  if (
    contImmagine < domItems.length - 1 &&
    contMiniature < domThumbnails.length - 1
  ) {
    domItems[contImmagine].classList.remove("active");
    contImmagine++;
    domItems[contImmagine].classList.add("active");

    // cambiare classi domThumbnail
    domThumbnails[contMiniature].classList.remove("selected");
    contMiniature++;
    domThumbnails[contMiniature].classList.add("selected");
  } else if (
    contImmagine === domItems.length - 1 &&
    contMiniature === domThumbnails.length - 1
  ) {
    domItems[contImmagine].classList.remove("active");
    contImmagine = 0;
    domItems[contImmagine].classList.add("active");

    // cambiare classi domThumbnail
    domThumbnails[contMiniature].classList.remove("selected");
    contMiniature = 0;
    domThumbnails[contMiniature].classList.add("selected");
  }
});
